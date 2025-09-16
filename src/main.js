// filepath: c:\Users\CandidED\OneDrive - Chart Industries Inc\Visual Studio Projects\edsonlcandido\vite-vanilla\src\main.js
// Add simple JS to make the page interactive
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });

  // Toggle features section
  const toggleBtn = document.getElementById('toggle-features');
  const featuresSection = document.getElementById('recursos');
  
  if (toggleBtn && featuresSection) {
    toggleBtn.addEventListener('click', () => {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Animation on scroll
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  // Initial check for elements in viewport
  checkAnimations();
  
  // Check for animations when scrolling
  window.addEventListener('scroll', checkAnimations);
  
  function checkAnimations() {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('animate');
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });

  // Interactive alerts for buttons (demonstração)
  const primaryButtons = document.querySelectorAll('.btn-primary');
  
  primaryButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Button clicked: ' + button.innerText);
    });
  });
});

