export enum GitHubEvent {
  "BRANCH_PROTECTION_RULE" = "branch_protection_rule",
  "BRANCH_PROTECTION_RULE_CREATED" = "branch_protection_rule.created",
  "BRANCH_PROTECTION_RULE_DELETED" = "branch_protection_rule.deleted",
  "BRANCH_PROTECTION_RULE_EDITED" = "branch_protection_rule.edited",
  "CHECK_RUN" = "check_run",
  "CHECK_RUN_COMPLETED" = "check_run.completed",
  "CHECK_RUN_CREATED" = "check_run.created",
  "CHECK_RUN_REQUESTED_ACTION" = "check_run.requested_action",
  "CHECK_RUN_REREQUESTED" = "check_run.rerequested",
  "CHECK_SUITE" = "check_suite",
  "CHECK_SUITE_COMPLETED" = "check_suite.completed",
  "CHECK_SUITE_REQUESTED" = "check_suite.requested",
  "CHECK_SUITE_fREREQUESTED" = "check_suite.rerequested",
  "CODE_SCANNING_ALERT" = "code_scanning_alert",
  "CODE_SCANNING_ALERT_APPEARED_IN_BRANCH" = "code_scanning_alert.appeared_in_branch",
  "CODE_SCANNING_ALERT_CLOSED_BY_USER" = "code_scanning_alert.closed_by_user",
  "CODE_SCANNING_ALERT_CREATED" = "code_scanning_alert.created",
  "CODE_SCANNING_ALERT_FIXED" = "code_scanning_alert.fixed",
  "CODE_SCANNING_ALERT_REOPENED" = "code_scanning_alert.reopened",
  "CODE_SCANNING_ALERT_REOPENED_BY_USER" = "code_scanning_alert.reopened_by_user",
  "COMMIT_COMMENT" = "commit_comment",
  "COMMIT_COMMENT_CREATED" = "commit_comment.created",
  "CREATE" = "create",
  "DELETE" = "delete",
  "DEPLOY_KEY" = "deploy_key",
  "DEPLOY_KEY_CREATED" = "deploy_key.created",
  "DEPLOY_KEY_DELETED" = "deploy_key.deleted",
  "DEPLOYMENT" = "deployment",
  "DEPLOYMENT_CREATED" = "deployment.created",
  "DEPLOYMENT_STATUS" = "deployment_status",
  "DEPLOYMENT_STATUS_CREATED" = "deployment_status.created",
  "DISCUSSION" = "discussion",
  "DISCUSSION_ANSWERED" = "discussion.answered",
  "DISCUSSION_CATEGORY_CHANGED" = "discussion.category_changed",
  "DISCUSSION_CREATED" = "discussion.created",
  "DISCUSSION_DELETED" = "discussion.deleted",
  "DISCUSSION_EDITED" = "discussion.edited",
  "DISCUSSION_LABELED" = "discussion.labeled",
  "DISCUSSION_LOCKED" = "discussion.locked",
  "DISCUSSION_PINNED" = "discussion.pinned",
  "DISCUSSION_TRANSFERRED" = "discussion.transferred",
  "DISCUSSION_UNANSWERED" = "discussion.unanswered",
  "DISCUSSION_UNLABELED" = "discussion.unlabeled",
  "DISCUSSION_UNLOCKED" = "discussion.unlocked",
  "DISCUSSION_UNPINNED" = "discussion.unpinned",
  "DISCUSSION_COMMENT" = "discussion_comment",
  "DISCUSSION_COMMENT_CREATED" = "discussion_comment.created",
  "DISCUSSION_COMMENT_DELETED" = "discussion_comment.deleted",
  "DISCUSSION_COMMENT_EDITED" = "discussion_comment.edited",
  "FORK" = "fork",
  "GITHUB_APP_AUTHORIZATION" = "github_app_authorization",
  "GITHUB_APP_AUTHORIZATION_REVOKED" = "github_app_authorization.revoked",
  "GOLLUM" = "gollum",
  "INSTALLATION" = "installation",
  "INSTALLATION_CREATED" = "installation.created",
  "INSTALLATION_DELETED" = "installation.deleted",
  "INSTALLATION_NEW_PERMISSIONS_ACCEPTED" = "installation.new_permissions_accepted",
  "INSTALLATION_SUSPEND" = "installation.suspend",
  "INSTALLATION_UNSUSPEND" = "installation.unsuspend",
  "INSTALLATION_REPOSITORIES" = "installation_repositories",
  "INSTALLATION_REPOSITORIES_ADDED" = "installation_repositories.added",
  "INSTALLATION_REPOSITORIES_REMOVED" = "installation_repositories.removed",
  "ISSUE_COMMENT" = "issue_comment",
  "ISSUE_COMMENT_CREATED" = "issue_comment.created",
  "ISSUE_COMMENT_DELETED" = "issue_comment.deleted",
  "ISSUE_COMMENT_EDITED" = "issue_comment.edited",
  "ISSUES" = "issues",
  "ISSUES_ASSIGNED" = "issues.assigned",
  "ISSUES_CLOSED" = "issues.closed",
  "ISSUES_DELETED" = "issues.deleted",
  "ISSUES_DEMILESTONED" = "issues.demilestoned",
  "ISSUES_EDITED" = "issues.edited",
  "ISSUES_LABELED" = "issues.labeled",
  "ISSUES_LOCKED" = "issues.locked",
  "ISSUES_MILESTONED" = "issues.milestoned",
  "ISSUES_OPENED" = "issues.opened",
  "ISSUES_PINNED" = "issues.pinned",
  "ISSUES_REOPENED" = "issues.reopened",
  "ISSUES_TRANSFERRED" = "issues.transferred",
  "ISSUES_UNASSIGNED" = "issues.unassigned",
  "ISSUES_UNLABELED" = "issues.unlabeled",
  "ISSUES_UNLOCKED" = "issues.unlocked",
  "ISSUES_UNPINNED" = "issues.unpinned",
  "LABEL" = "label",
  "LABEL_CREATED" = "label.created",
  "LABEL_DELETED" = "label.deleted",
  "LABEL_EDITED" = "label.edited",
  "MARKETPLACE_PURCHASE" = "marketplace_purchase",
  "MARKETPLACE_PURCHASE_CANCELLED" = "marketplace_purchase.cancelled",
  "MARKETPLACE_PURCHASE_CHANGED" = "marketplace_purchase.changed",
  "MARKETPLACE_PURCHASE_PENDING_CHANGE" = "marketplace_purchase.pending_change",
  "MARKETPLACE_PURCHASE_PENDING_CHANGE_CANCELLED" = "marketplace_purchase.pending_change_cancelled",
  "MARKETPLACE_PURCHASE_PURCHASED" = "marketplace_purchase.purchased",
  "MEMBER" = "member",
  "MEMBER_ADDED" = "member.added",
  "MEMBER_EDITED" = "member.edited",
  "MEMBER_REMOVED" = "member.removed",
  "MEMBERSHIP" = "membership",
  "MEMBERSHIP_ADDED" = "membership.added",
  "MEMBERSHIP_REMOVED" = "membership.removed",
  "META" = "meta",
  "META_DELETED" = "meta.deleted",
  "MILESTONE" = "milestone",
  "MILESTONE_CLOSED" = "milestone.closed",
  "MILESTONE_CREATED" = "milestone.created",
  "MILESTONE_DELETED" = "milestone.deleted",
  "MILESTONE_EDITED" = "milestone.edited",
  "MILESTONE_OPENED" = "milestone.opened",
  "ORG_BLOCK" = "org_block",
  "ORG_BLOCK_BLOCKED" = "org_block.blocked",
  "ORG_BLOCK_UNBLOCKED" = "org_block.unblocked",
  "ORGANIZATION" = "organization",
  "ORGANIZATION_DELETED" = "organization.deleted",
  "ORGANIZATION_MEMBER_ADDED" = "organization.member_added",
  "ORGANIZATION_MEMBER_INVITED" = "organization.member_invited",
  "ORGANIZATION_MEMBER_REMOVED" = "organization.member_removed",
  "ORGANIZATION_RENAMED" = "organization.renamed",
  "PACKAGE" = "package",
  "PACKAGE_PUBLISHED" = "package.published",
  "PACKAGE_UPDATED" = "package.updated",
  "PAGE_BUILD" = "page_build",
  "PING" = "ping",
  "PROJECT" = "project",
  "PROJECT_CLOSED" = "project.closed",
  "PROJECT_CREATED" = "project.created",
  "PROJECT_DELETED" = "project.deleted",
  "PROJECT_EDITED" = "project.edited",
  "PROJECT_REOPENED" = "project.reopened",
  "PROJECT_CARD" = "project_card",
  "PROJECT_CARD_CONVERTED" = "project_card.converted",
  "PROJECT_CARD_CREATED" = "project_card.created",
  "PROJECT_CARD_DELETED" = "project_card.deleted",
  "PROJECT_CARD_EDITED" = "project_card.edited",
  "PROJECT_CARD_MOVED" = "project_card.moved",
  "PROJECT_COLUMN" = "project_column",
  "PROJECT_COLUMN_CREATED" = "project_column.created",
  "PROJECT_COLUMN_DELETED" = "project_column.deleted",
  "PROJECT_COLUMN_EDITED" = "project_column.edited",
  "PROJECT_COLUMN_MOVED" = "project_column.moved",
  "PROJECTS_V2_ITEM" = "projects_v2_item",
  "PROJECTS_V2_ITEM_ARCHIVED" = "projects_v2_item.archived",
  "PROJECTS_V2_ITEM_CONVERTED" = "projects_v2_item.converted",
  "PROJECTS_V2_ITEM_CREATED" = "projects_v2_item.created",
  "PROJECTS_V2_ITEM_DELETED" = "projects_v2_item.deleted",
  "PROJECTS_V2_ITEM_EDITED" = "projects_v2_item.edited",
  "PROJECTS_V2_ITEM_REORDERED" = "projects_v2_item.reordered",
  "PROJECTS_V2_ITEM_RESTORED" = "projects_v2_item.restored",
  "PUBLIC" = "public",
  "PULL_REQUEST" = "pull_request",
  "PULL_REQUEST_ASSIGNED" = "pull_request.assigned",
  "PULL_REQUEST_AUTO_MERGE_DISABLED" = "pull_request.auto_merge_disabled",
  "PULL_REQUEST_AUTO_MERGE_ENABLED" = "pull_request.auto_merge_enabled",
  "PULL_REQUEST_CLOSED" = "pull_request.closed",
  "PULL_REQUEST_CONVERTED_TO_DRAFT" = "pull_request.converted_to_draft",
  "PULL_REQUEST_EDITED" = "pull_request.edited",
  "PULL_REQUEST_LABELED" = "pull_request.labeled",
  "PULL_REQUEST_LOCKED" = "pull_request.locked",
  "PULL_REQUEST_OPENED" = "pull_request.opened",
  "PULL_REQUEST_READY_FOR_REVIEW" = "pull_request.ready_for_review",
  "PULL_REQUEST_REOPENED" = "pull_request.reopened",
  "PULL_REQUEST_REVIEW_REQUEST_REMOVED" = "pull_request.review_request_removed",
  "PULL_REQUEST_REVIEW_REQUESTED" = "pull_request.review_requested",
  "PULL_REQUEST_SYNCHRONIZE" = "pull_request.synchronize",
  "PULL_REQUEST_UNASSIGNED" = "pull_request.unassigned",
  "PULL_REQUEST_UNLABELED" = "pull_request.unlabeled",
  "PULL_REQUEST_UNLOCKED" = "pull_request.unlocked",
  "PULL_REQUEST_REVIEW" = "pull_request_review",
  "PULL_REQUEST_REVIEW_DISMISSED" = "pull_request_review.dismissed",
  "PULL_REQUEST_REVIEW_EDITED" = "pull_request_review.edited",
  "PULL_REQUEST_REVIEW_SUBMITTED" = "pull_request_review.submitted",
  "PULL_REQUEST_REVIEW_COMMENT" = "pull_request_review_comment",
  "PULL_REQUEST_REVIEW_COMMENT_CREATED" = "pull_request_review_comment.created",
  "PULL_REQUEST_REVIEW_COMMENT_DELETED" = "pull_request_review_comment.deleted",
  "PULL_REQUEST_REVIEW_COMMENT_EDITED" = "pull_request_review_comment.edited",
  "PULL_REQUEST_REVIEW_THREAD" = "pull_request_review_thread",
  "PULL_REQUEST_REVIEW_THREAD_RESOLVED" = "pull_request_review_thread.resolved",
  "PULL_REQUEST_REVIEW_THREAD_UNRESOLVED" = "pull_request_review_thread.unresolved",
  "PUSH" = "push",
  "RELEASE" = "release",
  "RELEASE_CREATED" = "release.created",
  "RELEASE_DELETED" = "release.deleted",
  "RELEASE_EDITED" = "release.edited",
  "RELEASE_PRERELEASED" = "release.prereleased",
  "RELEASE_PUBLISHED" = "release.published",
  "RELEASE_RELEASED" = "release.released",
  "RELEASE_UNPUBLISHED" = "release.unpublished",
  "REPOSITORY" = "repository",
  "REPOSITORY_ARCHIVED" = "repository.archived",
  "REPOSITORY_CREATED" = "repository.created",
  "REPOSITORY_DELETED" = "repository.deleted",
  "REPOSITORY_EDITED" = "repository.edited",
  "REPOSITORY_PRIVATIZED" = "repository.privatized",
  "REPOSITORY_PUBLICIZED" = "repository.publicized",
  "REPOSITORY_RENAMED" = "repository.renamed",
  "REPOSITORY_TRANSFERRED" = "repository.transferred",
  "REPOSITORY_UNARCHIVED" = "repository.unarchived",
  "REPOSITORY_DISPATCH" = "repository_dispatch",
  "REPOSITORY_IMPORT" = "repository_import",
  "REPOSITORY_VULNERABILITY_ALERT" = "repository_vulnerability_alert",
  "REPOSITORY_VULNERABILITY_ALERT_CREATE" = "repository_vulnerability_alert.create",
  "REPOSITORY_VULNERABILITY_ALERT_DISMISS" = "repository_vulnerability_alert.dismiss",
  "REPOSITORY_VULNERABILITY_ALERT_REOPEN" = "repository_vulnerability_alert.reopen",
  "REPOSITORY_VULNERABILITY_ALERT_RESOLVE" = "repository_vulnerability_alert.resolve",
  "SECRET_SCANNING_ALERT" = "secret_scanning_alert",
  "SECRET_SCANNING_ALERT_CREATED" = "secret_scanning_alert.created",
  "SECRET_SCANNING_ALERT_REOPENED" = "secret_scanning_alert.reopened",
  "SECRET_SCANNING_ALERT_RESOLVED" = "secret_scanning_alert.resolved",
  "SECURITY_ADVISORY" = "security_advisory",
  "SECURITY_ADVISORY_PERFORMED" = "security_advisory.performed",
  "SECURITY_ADVISORY_PUBLISHED" = "security_advisory.published",
  "SECURITY_ADVISORY_UPDATED" = "security_advisory.updated",
  "SECURITY_ADVISORY_WITHDRAWN" = "security_advisory.withdrawn",
  "SPONSORSHIP" = "sponsorship",
  "SPONSORSHIP_CANCELLED" = "sponsorship.cancelled",
  "SPONSORSHIP_CREATED" = "sponsorship.created",
  "SPONSORSHIP_EDITED" = "sponsorship.edited",
  "SPONSORSHIP_PENDING_CANCELLATION" = "sponsorship.pending_cancellation",
  "SPONSORSHIP_PENDING_TIER_CHANGE" = "sponsorship.pending_tier_change",
  "SPONSORSHIP_TIER_CHANGED" = "sponsorship.tier_changed",
  "STAR" = "star",
  "STAR_CREATED" = "star.created",
  "STAR_DELETED" = "star.deleted",
  "STATUS" = "status",
  "TEAM" = "team",
  "TEAM_ADDED_TO_REPOSITORY" = "team.added_to_repository",
  "TEAM_CREATED" = "team.created",
  "TEAM_DELETED" = "team.deleted",
  "TEAM_EDITED" = "team.edited",
  "TEAM_REMOVED_FROM_REPOSITORY" = "team.removed_from_repository",
  "TEAM_ADD" = "team_add",
  "WATCH" = "watch",
  "WATCH_STARTED" = "watch.started",
  "WORKFLOW_DISPATCH" = "workflow_dispatch",
  "WORKFLOW_JOB" = "workflow_job",
  "WORKFLOW_JOB_COMPLETED" = "workflow_job.completed",
  "WORKFLOW_JOB_IN_PROGRESS" = "workflow_job.in_progress",
  "WORKFLOW_JOB_QUEUED" = "workflow_job.queued",
  "WORKFLOW_RUN" = "workflow_run",
  "WORKFLOW_RUN_COMPLETED" = "workflow_run.completed",
  "WORKFLOW_RUN_REQUESTED" = "workflow_run.requested",
  "DEPENDABOT_ALERT" = "dependabot_alert",
  "DEPLOYMENT_PROTECTION_RULE" = "deployment_protection_rule",
  "INSTALLATION_TARGET" = "installation_target",
  "MERGE_GROUP" = "merge_group",
  "REGISTRY_PACKAGE" = "registry_package",
  "SECRET_SCANNING_ALERT_LOCATION" = "secret_scanning_alert_location",
}
