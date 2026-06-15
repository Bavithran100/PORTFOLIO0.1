export function navigate(path) {
  if (`${window.location.pathname}${window.location.hash}` === path) return;
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));

  const hash = path.includes("#") ? path.split("#")[1] : "";
  if (hash) {
    requestAnimationFrame(() => {
      const target = document.getElementById(hash);
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: -64 });
      } else {
        target?.scrollIntoView();
      }
    });
    return;
  }

  if (window.lenis) {
    window.lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0 });
  }
}
