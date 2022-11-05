const scrollElement = document.querySelector(".scrollToTop");
window.addEventListener("scroll", () => {
  window.pageYOffset > 300
    ? (scrollElement.style.display = "block")
    : (scrollElement.style.display = "none");
});

scrollElement.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
});

sr.reveal(
  `nav, .starter,
    .services,.destination,
    .next-trip,.testimonials,
    .brands,.subscribe,footer
`,
  {
    interval: 200,
  }
);
