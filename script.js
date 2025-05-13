// Typing animation
const textArray = ["Creative Developer", "Programmer", "Problem Solver"];
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = textArray[textIndex];
  typedText.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    isDeleting = !isDeleting;
    textIndex = !isDeleting ? (textIndex + 1) % textArray.length : textIndex;
    setTimeout(typeEffect, 1000);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll('.skill-bar');
  
    skillBars.forEach(bar => {
      const value = bar.getAttribute('data-skill');
      bar.querySelector('::after'); // animation handled via CSS transition
      bar.style.setProperty('--skill-width', value);
      bar.style.setProperty('width', value);
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Add 'scrolled' class to navbar on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  
    // Highlight active link on scroll
    window.addEventListener("scroll", function () {
      let current = "";
      document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
          link.classList.add("active");
        }
      });
    });
  });