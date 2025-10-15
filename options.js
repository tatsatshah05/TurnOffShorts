const DEFAULTS = {
  enableYouTube: true,
  enableInstagram: true,
  ytRedirectShortsToWatch: true
};

function getStore() {
  return new Promise((resolve) => {
    try {
      chrome.storage.sync.get(DEFAULTS, (o) => resolve({ ...DEFAULTS, ...o }));
    } catch {
      chrome.storage.local.get(DEFAULTS, (o) => resolve({ ...DEFAULTS, ...o }));
    }
  });
}

function setStore(values) {
  return new Promise((resolve) => {
    try {
      chrome.storage.sync.set(values, resolve);
    } catch {
      chrome.storage.local.set(values, resolve);
    }
  });
}

(async () => {
  const yt = document.getElementById("yt");
  const ig = document.getElementById("ig");
  const ytRedirect = document.getElementById("ytRedirect");
  const status = document.getElementById("status");

  const opts = await getStore();
  yt.checked = opts.enableYouTube;
  ytRedirect.checked = opts.ytRedirectShortsToWatch;
  ig.checked = opts.enableInstagram;

  document.getElementById("save").addEventListener("click", async () => {
    await setStore({
      enableYouTube: yt.checked,
      ytRedirectShortsToWatch: ytRedirect.checked,
      enableInstagram: ig.checked
    });
    status.textContent = "Saved";
    setTimeout(() => (status.textContent = ""), 1200);
  });
})();
