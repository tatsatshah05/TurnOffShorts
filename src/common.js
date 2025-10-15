// Default options
const DEFAULTS = {
  enableYouTube: true,
  enableInstagram: true,
  ytRedirectShortsToWatch: true // /shorts/<id> → /watch?v=<id>
};

// Read options with sane fallbacks
function getOptions() {
  return new Promise((resolve) => {
    try {
      chrome.storage.sync.get(DEFAULTS, (opts) => resolve({ ...DEFAULTS, ...opts }));
    } catch {
      chrome.storage.local.get(DEFAULTS, (opts) => resolve({ ...DEFAULTS, ...opts }));
    }
  });
}

// Lightweight DOM-ready
function onReady(fn) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  } else {
    fn();
  }
}

// Re-apply on dynamic pages (SPAs)
function repeat(fn, interval = 1000) {
  fn();
  const id = setInterval(fn, interval);
  window.addEventListener("beforeunload", () => clearInterval(id));
  return id;
}

window.__TOC__ = { getOptions, onReady, repeat };
