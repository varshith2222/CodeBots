// Define custom header component
class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar">
          <div class="logo">
            <a href="index.html">
              <img src="favicon.ico" alt="Char-E-T Logo" class="logo-img">
            </a>
          </div>
          <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-trigger">Categories <i class="fas fa-chevron-down"></i></a>
              <ul class="dropdown-menu">
                <li><a href="Food.html">Food</a></li>
                <li><a href="Clothes.html">Clothes</a></li>
                <li><a href="Electronics.html">Electronics</a></li>
                <li><a href="Books.html">Books</a></li>
              </ul>
            </li>
            <li><a href="#about-us-section">About Us</a></li>
            <li><a href="#contactForm">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

// Define custom footer component
class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-content">
          <div class="footer-info">
            <img src="images/favicon.ico" alt="Logo" class="footer-logo">
            <div class="contact-info">
              <h3>Contact Information</h3>
              <p><i class="fas fa-map-marker-alt"></i> Dundigal, Hyderabad, Mlrit</p>
              <p><i class="fas fa-phone"></i> 9849865028</p>
              <p><i class="fas fa-envelope"></i> share&care@gmail.com</p>
            </div>
          </div>
          <div class="contact-form">
            <label for="name"><h3>Send us a Message</h3></label>
            <form id="contactForm">
              <div class="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
              </div>
              <div class="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" required>
              </div>
              <div class="form-group">
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" class="btn send-btn">Send Message</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Char-E-T. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

// Register custom elements
customElements.define("our-header", SpecialHeader);
customElements.define("our-footer", SpecialFooter);

// Smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", () => {
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  
  smoothScrollLinks.forEach(link => {
      link.addEventListener("click", (e) => {
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
  
          if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({ behavior: "smooth" });
          }
      });
  });

  // Testimonial Slider functionality
  let currentIndex = 0;
  const slides = document.querySelectorAll('.testimonial-slide');

  function changeSlide() {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    });
    currentIndex = (currentIndex + 1) % slides.length;
  }

  setInterval(changeSlide, 5000); // Change slide every 5 seconds

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
  
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const message = document.getElementById("message").value;
  
          console.log("Form submitted:", { name, email, message });
  
          // Reset the form
          contactForm.reset();
  
          // Show a success message to the user
          alert("Thank you for your message! We will get back to you soon.");
      });
  }
});
