// Contact form validation + simulated send
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  // Buat toast element (Bootstrap)
  const toastContainer = document.createElement("div");
  toastContainer.innerHTML = `
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="formToast" class="toast align-items-center text-bg-success border-0 shadow" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body">
            ✅ Message sent successfully! (simulated)
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(toastContainer);

  const toastEl = document.getElementById("formToast");
  const toast = new bootstrap.Toast(toastEl);

  // Handle submit
  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      toast.show(); // tampilkan notifikasi modern
      form.reset();
    }
    form.classList.add("was-validated");
  });
});
