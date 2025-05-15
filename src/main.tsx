
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add the reveal animation functionality
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    for (let i = 0; i < revealElements.length; i++) {
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      } else {
        // Optional: remove the active class if you want elements to hide when scrolled away
        // revealElements[i].classList.remove('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  // Trigger once to check for elements already in view on page load
  setTimeout(revealOnScroll, 100); // Small delay to ensure DOM is fully rendered
});

createRoot(document.getElementById("root")!).render(<App />);
