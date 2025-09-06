// Init AOS (animation on scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// Back to top button (modern style)
const backToTop = document.createElement("button");
backToTop.innerHTML = '<i class="bi bi-arrow-up"></i>'; // pakai Bootstrap Icons
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

// Styling tombol (bisa juga dipindahkan ke style.css)
const style = document.createElement("style");
style.innerHTML = `
  .back-to-top {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(135deg, #ffc107, #ff9800);
    color: #fff;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.8);
    transition: all 0.3s ease-in-out;
    z-index: 999;
  }
  .back-to-top.show {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }
  .back-to-top:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, #ff9800, #ff5722);
  }
`;
document.head.appendChild(style);

// Show/Hide saat scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Smooth scroll to top
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
