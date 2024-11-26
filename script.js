// script.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
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
});

// script.js (continued)

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple form validation can be added here

    // Display success message
    alert("Thank you for your message! I will get back to you soon.");

    // Reset the form
    contactForm.reset();
  });
});
