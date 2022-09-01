const modal = document.querySelector(".modal-container");
const openModal = document.querySelector(".openBtn");
const closeModal = document.querySelector(".closeBtn");
const body = document.querySelector("body");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
  setTimeout(() => {
    body.style.background = " rgb(34, 3, 62)";
  }, 100);
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  body.style.background = "rgba(137, 43, 226, 0.687)";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    body.style.background = "rgba(137, 43, 226, 0.687)";
  }
});
