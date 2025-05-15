
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add the reveal animation functionality
document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    for (let i = 0; i < revealElements.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = revealElements[i].getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        revealElements[i].classList.add('active');
      }
    }
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Check on initial load
});

createRoot(document.getElementById("root")!).render(<App />);
