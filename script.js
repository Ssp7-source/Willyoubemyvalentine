const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const buttons = document.querySelector(".buttons");

function moveNoButton() {
  const area = buttons.getBoundingClientRect();

  const maxX = area.width - noBtn.offsetWidth;
  const maxY = area.height - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  document.querySelector(".buttons").style.display = "none";
});
