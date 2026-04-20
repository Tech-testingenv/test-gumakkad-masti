// Initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Resize section animation
const handleResizeSection = () => {
  const section = document.getElementById('resizeSection');
  if (!section) return;

  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const scrollProgress = Math.min(
      Math.max(0, (window.innerHeight - rect.top) / 300),
      1
    );
    section.style.transform = `scaleX(${0.5 + (0.5 * scrollProgress)})`;
    section.style.opacity = 0.6 + (0.4 * scrollProgress);
  }
};

// Navigation and scroll handling
const handleNavigation = () => {
  const sections = ['home', 'about', 'services', 'contact'];
  const navLinks = document.querySelectorAll('#navbar-sticky a');
  const navbar = document.getElementById('navbar-sticky');
  const navList = navbar.querySelector('ul');
  const isMobile = window.innerWidth < 768;
  let activeSection = '';

  // Find active section
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection = sectionId;
      }
    }
  });

  if (isMobile) {
    // Mobile menu styles
    navList.classList.remove('bg-transparent');
    navList.classList.add('bg-white/90');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      link.classList.remove('text-blue-600', 'text-white');
      link.classList.add('text-gray-900');
      
      if (href === activeSection) {
        link.classList.remove('text-gray-900');
        link.classList.add('text-blue-600');
      }
    });
  } else {
    // Desktop menu styles - only handle background transparency
    if (activeSection === 'about' || activeSection === 'contact') {
      navList.classList.remove('bg-white/90');
      navList.classList.add('bg-transparent');
    } else {
      navList.classList.remove('bg-transparent');
      navList.classList.add('bg-white/90');
    }

    // Only update active state for desktop
    navLinks.forEach(link => {
      const href = link.getAttribute('href').substring(1);
      if (href === activeSection) {
        link.classList.add('text-blue-600');
      } else {
        link.classList.remove('text-blue-600');
      }
    });
  }
};

// Add resize listener to handle mobile/desktop transitions
window.addEventListener('resize', () => {
  handleNavigation();
});

// Blog cards animation
const handleBlogCards = () => {
  const cards = document.querySelectorAll('.card');
  const windowHeight = window.innerHeight;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    card.classList.toggle('visible', cardTop < windowHeight - 200);
  });
};

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navHeight = document.querySelector('nav').offsetHeight;
      window.scrollTo({
        top: targetElement.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll event handler with throttling
let ticking = false;
document.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleResizeSection();
      handleNavigation();
      handleBlogCards();
      ticking = false;
    });
    ticking = true;
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  handleResizeSection();
  handleNavigation();
  handleBlogCards();
});