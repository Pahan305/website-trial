// script.js

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Optional welcome function (same as before)
function showWelcome() {
  alert("🌟 Welcome to eUNLOCK Solutions! Let’s unlock your success.");
}