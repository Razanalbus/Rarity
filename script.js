document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const nav = document.getElementById("nav");
    if (mobileMenu && nav) {
      mobileMenu.addEventListener("click", function () {
        nav.classList.toggle("active");
      });
    }
  
    // Donation Form Handling (if present on page)
    const donationForm = document.getElementById("donation-form");
    if (donationForm) {
      const donationAmount = document.getElementById("donation-amount");
      const customAmountContainer = document.getElementById("custom-amount-container");
  
      donationAmount.addEventListener("change", function () {
        if (this.value === "custom") {
          customAmountContainer.style.display = "block";
        } else {
          customAmountContainer.style.display = "none";
        }
      });
  
      donationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Demo alert – in a real scenario, you would connect to a payment gateway
        alert("Thank you for your donation! This is a demo.");
        donationForm.reset();
        if (customAmountContainer) {
          customAmountContainer.style.display = "none";
        }
      });
    }
  
    // Contact Form Handling (if present on page)
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Demo alert – in a real scenario, you would process the form submission
        alert("Thank you for your message! We will get back to you soon.");
        contactForm.reset();
      });
    }
  });
  