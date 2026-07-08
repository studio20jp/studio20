const targets = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);

targets.forEach(target => observer.observe(target));

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const closeBtn = document.querySelector(".lightbox__close");

document.querySelectorAll(".gallery-item").forEach(button => {
  button.addEventListener("click", () => {
    lightboxImg.src = button.dataset.full;
    lightbox.classList.add("is-open");
    document.body.classList.add("is-locked");
  });
});

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.classList.remove("is-locked");
  lightboxImg.src = "";
}

closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});
