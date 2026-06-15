export function navigate(path) {
  if (`${window.location.pathname}${window.location.hash}` === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));

  const hash = path.includes("#") ? path.split("#")[1] : "";
  if (hash) {
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    });
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}
