// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scrolling for Navigation Links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Get the target section
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Contact Form Submission Handling
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple form validation can be added here

    // Display success message
    alert("Thank you for your message! I will get back to you soon.");

    // Reset the form
    contactForm.reset();
  });

  // Dark Mode Toggle Functionality with Persistence
  const themeToggle = document.getElementById("theme-toggle");

  // Function to set the theme based on a boolean parameter
  function setTheme(isDark) {
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.querySelector("nav").classList.add("dark-mode");
      document.querySelector("footer").classList.add("dark-mode"); // Optional: If you have a footer
      themeToggle.textContent = "☀️"; // Sun icon for light mode
    } else {
      document.body.classList.remove("dark-mode");
      document.querySelector("nav").classList.remove("dark-mode");
      document.querySelector("footer").classList.remove("dark-mode"); // Optional: If you have a footer
      themeToggle.textContent = "🌙"; // Moon icon for dark mode
    }
  }

  // Check localStorage for theme preference on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setTheme(true);
  } else {
    setTheme(false);
  }

  // Dark Mode Toggle with Persistence
  themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    setTheme(isDark);
    // Save the preference to localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 1000, // Animation duration
    once: true, // Whether animation should happen only once
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Animate Header and Paragraph
  gsap.from("#home h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
  gsap.from("#home p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });

  // Animate Project Cards with ScrollTrigger
  gsap.utils.toArray(".project-card").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
    });
  });
});
