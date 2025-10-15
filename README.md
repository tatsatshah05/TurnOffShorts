#Author : Tatsat Shah
# Turn Off Short Form

A tiny **Chrome MV3** extension to reduce distractions on desktop.

- **YouTube:** Redirects `/shorts/<id>` → classic `/watch?v=<id>` and hides Shorts shelves/chips.
- **Instagram:** Hides Reels links/buttons/shelves and blocks `/reels/` pages.
- **Privacy-first:** No tracking, no analytics, no external requests. Uses `chrome.storage` only to save options.

---

## Quick Start (Chrome/Brave/Edge/Opera on desktop)

1. **Download the code**
   - On GitHub, click **Code → Download ZIP**, then **unzip** it  
   - (or) `git clone https://github.com/<your-username>/TurnOffShorts.git`

2. **Load the extension**
   - Open `chrome://extensions/`
   - Toggle **Developer mode** (top-right) **ON**
   - Click **Load unpacked** and select the **TurnOffShorts** folder (the one with `manifest.json`)

3. **Configure (optional)**
   - On the extension card, click **Details → Extension options**
   - Toggles available:
     - **Enable YouTube filtering**
     - **Redirect /shorts → /watch**
     - **Enable Instagram filtering**

4. **Use it**
   - Visiting a YouTube **Shorts** URL now opens the regular **Watch** page
   - Shorts/Reels UI areas are hidden on YouTube & Instagram
   - If you change options, just **refresh** the page

---

## Update / Remove

- **Update (local edits or new ZIP):**
  - Replace files in your local folder
  - Go to `chrome://extensions/` → click **Reload** on *Turn Off Short Form*
  - Refresh your YouTube/Instagram tabs

- **Disable temporarily:** `chrome://extensions/` → toggle the switch **off**  
- **Uninstall:** `chrome://extensions/` → **Remove**

---

## Supported browsers

- ✅ Chrome, Brave, Edge, Opera (desktop, Chromium-based)
- ❌ Mobile Chrome (Android/iOS) — extensions are not supported there

---

## Permissions

- `https://*.youtube.com/*`, `https://www.instagram.com/*` — required to modify page UI and redirect Shorts/Reels
- `storage` — saves your options (on/off toggles) locally/sync

> **Privacy:** No data leaves your device. No analytics. No remote code.
