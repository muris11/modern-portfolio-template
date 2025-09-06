// Fade-in animation on scroll (with optimization)
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".card, .fade-in");

  const handleScroll = () => {
    animatedElements.forEach((el) => {
      // Lewati jika sudah diberi animasi sekali
      if (el.classList.contains("animate__fadeInUp")) return;

      const position = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Jika elemen terlihat di viewport, tambahkan animasi
      if (position < windowHeight - 100) {
        el.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  };

  // Jalankan saat load & scroll
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // agar elemen di atas langsung animasi saat reload
});
