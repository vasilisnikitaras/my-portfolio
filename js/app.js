// Dark / Light Mode Toggle
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light")
    ? "Dark Mode"
    : "Light Mode";
});

// Scroll animations for sections
const animatedElements = document.querySelectorAll(".scroll-animate");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));

// Project card micro-animations
const projects = document.querySelectorAll('.project');

const projectObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

projects.forEach(p => projectObserver.observe(p));

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
