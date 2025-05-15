
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  mobileMenuButton.addEventListener('click', function() {
    mobileMenuButton.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });
  
  // Handle menu item clicks on mobile
  const menuItems = document.querySelectorAll('.mobile-menu .menu-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      mobileMenuButton.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
  
  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');
  
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);
  
  // Trigger once on page load to check for elements already in view
  setTimeout(revealOnScroll, 100);
  
  // Create stars for background
  function createStars() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    const count = Math.min(window.innerWidth / 2.5, 150);
    
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      
      const size = Math.random() * 3;
      const opacity = Math.random() * 0.8 + 0.2;
      
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.opacity = `${opacity}`;
      star.style.animationDuration = `${Math.random() * 50 + 10}s`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      
      starsContainer.appendChild(star);
    }
  }
  
  createStars();
  window.addEventListener('resize', createStars);
  
  // Custom cursor effect
  const cursor = document.getElementById('custom-cursor');
  
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('mousemove', function(e) {
      setTimeout(() => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }, 50);
    });
    
    document.addEventListener('mousedown', function() {
      cursor.classList.add('cursor-clicked');
    });
    
    document.addEventListener('mouseup', function() {
      cursor.classList.remove('cursor-clicked');
    });
    
    // Add hover effect for buttons and links
    const interactiveElements = document.querySelectorAll('button, a');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', function() {
        cursor.classList.add('cursor-hover');
      });
      el.addEventListener('mouseleave', function() {
        cursor.classList.remove('cursor-hover');
      });
    });
  }
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // University slider - clone items for infinite scroll
  const universitiesTrack = document.querySelector('.universities-track');
  if (universitiesTrack) {
    const universities = document.querySelectorAll('.university');
    universities.forEach(university => {
      const clone = university.cloneNode(true);
      universitiesTrack.appendChild(clone);
    });
  }
  
  // Testimonials slider
  const testimonialsContainer = document.querySelector('.testimonials-container');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentSlide = 0;
  
  function showSlide(index) {
    if (index < 0) {
      currentSlide = testimonials.length - 1;
    } else if (index >= testimonials.length) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }
    
    testimonials.forEach((slide, i) => {
      slide.style.display = i === currentSlide ? 'block' : 'none';
    });
  }
  
  // Initialize the testimonials slider
  if (testimonials.length > 0) {
    showSlide(0);
    
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
    
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
    
    // Auto-advance slides every 5 seconds
    setInterval(() => {
      showSlide(currentSlide + 1);
    }, 5000);
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Progress bars animation
  const progressBars = document.querySelectorAll('.progress');
  
  function animateProgressBars() {
    progressBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }
  
  // Run progress bar animation when talent card is in view
  const talentCard = document.querySelector('.talent-card');
  if (talentCard) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgressBars();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(talentCard);
  }
});
