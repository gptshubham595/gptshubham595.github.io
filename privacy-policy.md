# Privacy Policy

Last updated: 2026-05-06

## Overview

PM Interview Command Center ("the extension") is a Chrome extension that helps users run structured Product Manager mock interviews on ChatGPT. This Privacy Policy explains what information the extension handles, how it is used, and the choices available to users.

## Information We Collect

The extension is designed to minimize data collection. It primarily stores configuration and session data locally in the browser.

### Data stored locally

The extension may store the following in Chrome local storage:

- Interview configuration selected by the user (for example role, company, interview type, duration, feedback mode, difficulty).
- Session state (for example active/paused status, timer state, hint count, current question number).
- Local performance telemetry (for example questions asked, solved count, local scores/statistics).
- UI preferences (for example read-aloud toggle state).

### Data processed on ChatGPT pages

When the extension is active on supported hosts, it can read and modify page content necessary to:

- Inject interview instructions and controls.
- Display and update the interview overlay/UI.
- Process user interactions for interview flow.

Supported hosts:

- `https://chatgpt.com/*`
- `https://chat.openai.com/*`

## Permissions and Why They Are Used

- `activeTab`: Used after explicit user action (such as Start/End interview) to access the currently active ChatGPT tab.
- `scripting`: Used to inject extension scripts into the active supported tab to run interview features.
- `storage`: Used to persist user settings, session state, and local performance tracking.
- Host permissions (`chatgpt.com`, `chat.openai.com`): Required so extension features work on ChatGPT pages only.

## Remote Code and Third-Party Services

- The extension does not intentionally execute remote code as part of its core functionality.
- Interview interactions occur within ChatGPT pages as initiated by the user.
- This extension is not affiliated with OpenAI.

## Data Sharing and Selling

- We do not sell personal data.
- We do not share extension-stored data with data brokers.
- We do not use extension data for advertising.

## Data Retention

Data stored by the extension remains in the user's browser until:

- The user clears extension/browser storage, or
- The extension is removed.

## User Controls

Users can:

- Change or reset interview/session state from the extension UI.
- Clear local tracking/statistics from the extension UI.
- Remove the extension at any time to stop all processing and remove extension access.

## Security

We aim to follow reasonable security practices and least-privilege permissions. No method of storage or transmission is guaranteed to be 100% secure.

## Children's Privacy

The extension is not directed to children under 13, and we do not knowingly collect personal information from children.

## Changes to This Policy

This policy may be updated from time to time. Material changes will be reflected by updating the "Last updated" date.

## Contact

For privacy questions or support, contact:

- Email: `support@example.com`
- Support URL: `https://example.com/support`

Replace the contact details above with your real support email and reachable public support page before publishing.
