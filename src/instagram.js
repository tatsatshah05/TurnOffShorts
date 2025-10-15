(async () => {
  const { getOptions, onReady, repeat } = window.__TOC__;
  const opts = await getOptions();
  if (!opts.enableInstagram) return;

  // If directly on /reels/, kick to home
  const redirectIfReelsPage = () => {
    try {
      const url = new URL(location.href);
      if (url.pathname.startsWith("/reels/")) {
        location.replace("https://www.instagram.com/");
      }
    } catch {}
  };
  redirectIfReelsPage();

  const hideReels = () => {
    const sels = [
      'a[href="/reels/"]',                // top/side nav button
      'a[href^="/reels/"]',               // any link into reels
      'a[role="link"][href*="/reels/"]',  // variant
      '[aria-label="Reels"]',             // icon buttons labeled Reels
      'svg[aria-label="Reels"]',
      // feed/cards commonly containing reels (catch broader wrappers)
      'article:has(video)',                // reels use <video> in many surfaces
      'div[role="button"]:has(video)',
      'div:has(> div > a[href*="/reels/"])'
    ];
    for (const s of sels) {
      document.querySelectorAll(s).forEach((el) => {
        const card = el.closest("article, section, div") || el;
        card.style.display = "none";
      });
    }
  };

  onReady(() => repeat(hideReels, 1000));
})();
