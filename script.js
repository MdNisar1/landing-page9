// Mobile Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = () => {
  navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
};

// Year Auto Update
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMsg").innerText =
    "Thank you! Your message has been received.";
  this.reset();
});
