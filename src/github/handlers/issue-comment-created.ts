import { GitHubContext } from "../github-context";
import { getConfig } from "../utils/config";
import { GithubPlugin, isGithubPlugin } from "../types/plugin-configuration";

export default async function issueCommentCreated(context: GitHubContext<"issue_comment.created">) {
  const body = context.payload.comment.body.trim();
  if (/^\/help$/.test(body)) {
    const comments = [
      "### Available Commands\n\n",
      "| Command | Description | Example |",
      "|---|---|---|",
      "| `/help` | List all available commands. | `/help` |",
    ];
    const configuration = await getConfig(context);
    for (const pluginArray of Object.values(configuration.plugins)) {
      for (const pluginElement of pluginArray) {
        const { plugin } = pluginElement.uses[0];
        if (isGithubPlugin(plugin)) {
          console.log("Github plugin", await fetchActionManifest(context, plugin));
        } else {
          console.log("Worker plugin", await fetchWorkerManifest(plugin));
        }
        // Only show plugins that have commands available for the user
        // if (plugin.command) {
        //   comments.push(`| \`${getContent(plugin.command)}\` | ${getContent(plugin.description)} | \`${getContent(plugin.example)}\` |`);
        // }
      }
    }
    await context.octokit.issues.createComment({
      body: comments.join("\n"),
      issue_number: context.payload.issue.number,
      owner: context.payload.repository.owner.login,
      repo: context.payload.repository.name,
    });
  }
}

/**
 * Ensures that passed content does not break MD display within the table.
 */
// function getContent(content: string | undefined) {
//   return content ? content.replace("|", "\\|") : "-";
// }

async function fetchActionManifest(context: GitHubContext<"issue_comment.created">, { owner, repo }: GithubPlugin) {
  try {
    const { data } = await context.octokit.repos.getContent({
      owner,
      repo,
      path: "manifest.json",
    });
    if ("content" in data) {
      const content = Buffer.from(data.content, "base64").toString();
      return JSON.parse(content);
    }
  } catch (e) {
    console.warn(`Could not find a manifest for ${owner}/${repo}`);
  }
  return null;
}

async function fetchWorkerManifest(url: string) {
  try {
    const { json } = await fetch(`${url}/manifest.json`);
    return await json();
  } catch (e) {
    console.warn(`Could not find a manifest for ${url}`);
  }
  return null;
}
