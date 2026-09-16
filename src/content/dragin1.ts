/**
 * Shared DragIn1 facts and links.
 *
 * The product page, support page, and journal entries all reference these, so
 * a moved repo or a renamed asset is a one-line change. Downloads point at
 * GitHub Releases on purpose — we never host the binary on this domain, so
 * there is exactly one official source and its hash is published beside it.
 */

export const dragin1 = {
  name: "DragIn1",
  tagline: "Drag attachments out of New Outlook again.",
  repo: "https://github.com/wildtechdev/DragIn1",
  releases: "https://github.com/wildtechdev/DragIn1/releases/latest",
  issues: "https://github.com/wildtechdev/DragIn1/issues",
  newIssue: "https://github.com/wildtechdev/DragIn1/issues/new",
  writeup:
    "https://github.com/wildtechdev/DragIn1/blob/main/docs/how-it-works.md",
  signingPolicy:
    "https://github.com/wildtechdev/DragIn1/blob/main/CODE_SIGNING_POLICY.md",
  license: "https://github.com/wildtechdev/DragIn1/blob/main/LICENSE",
  chromeExtension:
    "https://chromewebstore.google.com/detail/dragin1/dfjodholanpnddcmbcledbbmbkdcibal",
  supportEmail: "info@wildtechdev.com",
} as const;

/** Chromium-based sources whose drags fail the same way. */
export const dragSources = [
  { name: "New Outlook", detail: "the olk.exe desktop app" },
  { name: "Outlook on the web", detail: "outlook.office.com" },
  { name: "Microsoft Teams", detail: "files and chat attachments" },
  { name: "Gmail", detail: "in any Chromium browser" },
  { name: "SharePoint", detail: "document libraries" },
  { name: "OneDrive", detail: "web and sync views" },
];

export const dragDestinations = [
  { name: "File Explorer", detail: "folders, desktop, network shares" },
  { name: "Browser upload boxes", detail: "any drop-a-file control" },
  { name: "CRMs and ERPs", detail: "Salesforce, NetSuite, Dynamics" },
  { name: "Chat apps", detail: "Slack, Teams, Discord" },
  { name: "Ticketing systems", detail: "Jira, Zendesk, ServiceNow" },
  { name: "Desktop applications", detail: "anything that accepts a file" },
];
