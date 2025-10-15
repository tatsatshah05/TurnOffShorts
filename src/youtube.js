(async () => {
  const { getOptions, onReady, repeat } = window.__TOC__;
  const opts = await getOptions();
  if (!opts.enableYouTube) return;

  // 1) Redirect /shorts/<id> → /watch?v=<id>
  const doRedirect = () => {
    if (!opts.ytRedirectShortsToWatch) return;
    try {
      const url = new URL(location.href);
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.split("/")[2];
        if (id) location.replace(`https://www.youtube.com/watch?v=${id}`);
      }
    } catch {}
  };
  doRedirect();

  // 2) Hide Shorts UI elements
  const hideShortsUI = () => {
    const selectors = [
      "ytd-reel-shelf-renderer",
      "ytd-rich-shelf-renderer[is-shorts]",
      'a[title="Shorts"]',
      '#endpoint.yt-simple-endpoint[title="Shorts"]',
      'ytd-guide-entry-renderer a[href^="/shorts"]',
      'yt-chip-cloud-chip-renderer a[href^="/shorts"]',
      'a[href^="/shorts"]',
      "ytd-reel-item-renderer"
    ];
    for (const sel of selectors) {
      document.querySelectorAll(sel).forEach((el) => {
        // remove whole blocks where possible
        const block = el.closest("ytd-rich-section-renderer, ytd-reel-shelf-renderer, ytd-rich-shelf-renderer, ytd-guide-entry-renderer, ytd-chip-cloud-chip-renderer") || el;
        block.style.display = "none";
      });
    }
  };

  onReady(() => repeat(hideShortsUI, 1000));
})();
