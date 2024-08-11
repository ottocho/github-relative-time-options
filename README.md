# github-relative-time-options

In GitHub, datetimes are rendered a relative format (e.g., "2 days ago").  [relative-time](https://github.com/github/relative-time-element) is the open-sourced web-component library that support this: Formats a timestamp as a localized string or as relative text that auto-updates in the user's browser.

This is convenient for casual browsing but less helpful when investigating production issues or tracking incidents. To address this, I created a bookmarklet that toggles the display to show the exact date and time. This leverages GitHub's web component parameters to achieve the desired result.

While I haven’t developed this into a browser extension, it would be relatively straightforward to do so.

Open issue in Github community [here](https://github.com/orgs/community/discussions/5972).

## Usage

Copy the code in [bookmarklet.js](./bookmarklet.js), and create a bookmark in your browser: In the URL part, paste the JavaScript code in.
