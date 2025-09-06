// Shrink navbar & shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-shrink", "shadow-sm");
  } else {
    navbar.classList.remove("navbar-shrink", "shadow-sm");
  }
});

// Active link highlight
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
});

// Tambahkan style via JS (bisa juga ke style.css)
const style = document.createElement("style");
style.innerHTML = `
  /* Navbar shrink effect */
  .navbar {
    transition: all 0.3s ease-in-out;
    padding: 1rem 0;
  }
  .navbar.navbar-shrink {
    padding: 0.4rem 0;
    background-color: rgba(33, 37, 41, 0.95); /* lebih transparan */
  }

  /* Active link modern style */
  .nav-link {
    position: relative;
    transition: color 0.3s ease;
  }
  .nav-link.active-link {
    color: #ffc107 !important;
  }
  .nav-link.active-link::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #ffc107, #ff9800);
    border-radius: 2px;
    animation: underline 0.3s ease forwards;
  }

  @keyframes underline {
    from { width: 0; }
    to { width: 100%; }
  }
`;
document.head.appendChild(style);
