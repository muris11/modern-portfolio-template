// Dark / Light mode toggle with localStorage
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  // Fungsi update icon tombol
  const updateIcon = () => {
    toggleBtn.innerHTML = body.classList.contains("dark-mode")
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  };

  // Cek preferensi user di localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  } else if (savedTheme === "light") {
    body.classList.remove("dark-mode");
  }

  // Update icon saat pertama kali load
  updateIcon();

  // Event listener tombol toggle
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark-mode");

      // Simpan preferensi user ke localStorage
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }

      updateIcon();
    });
  }
});
