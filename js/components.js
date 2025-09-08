// Fungsi untuk memuat komponen HTML
function loadComponent(id, url) {
  fetch(url)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

// Panggil fungsi untuk navbar dan footer
window.addEventListener("DOMContentLoaded", function () {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("footer", "components/footer.html");

  // Highlight menu aktif di navbar
  fetch("components/navbar.html")
    .then((res) => res.text())
    .then(() => {
      const path = window.location.pathname.split("/").pop();
      const navLinks = document.querySelectorAll("#navbar .nav-link");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === path) {
          link.classList.add("active");
        }
      });
      // Pasang event listener theme-toggle setelah navbar dimuat
      const themeBtn = document.querySelector("#navbar #theme-toggle");
      if (themeBtn) {
        themeBtn.addEventListener("click", function () {
          document.body.classList.toggle("dark-mode");
        });
      }
    });
});
