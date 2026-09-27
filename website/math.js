document.addEventListener("DOMContentLoaded", () => {
  if (!window.renderMathInElement) return;

  renderMathInElement(document.body, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false }
    ],
    throwOnError: false
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".chapter-nav summary a").forEach((link) => {
    link.addEventListener("click", () => {
      link.closest("details")?.setAttribute("open", "");
    });
  });
});
