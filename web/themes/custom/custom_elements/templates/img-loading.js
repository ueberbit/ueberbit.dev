/**
 * Check if element is in viewport.
 * @param {Node} el
 * @returns {boolean}
 */
const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Create Mutation Observer, which sets proper loading attribute.
 */
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((el) => {
      if (el.tagName !== "IMG") return;
      isInViewport(el)
        ? el.setAttribute("loading", "eager")
        : el.setAttribute("loading", "lazy");
    });
  });
});
const config = { childList: true, subtree: true };
observer.observe(document.documentElement, config);
// Disconnect Observer when DOM is done loading.
document.addEventListener("DOMContentLoaded", () => observer.disconnect());
