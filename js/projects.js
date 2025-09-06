document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projectsContainer");
  const modal = new bootstrap.Modal(document.getElementById("projectModal"));

  const projectTitle = document.getElementById("projectTitle");
  const projectImage = document.getElementById("projectImage");
  const projectDescription = document.getElementById("projectDescription");
  const projectLink = document.getElementById("projectLink");

  // Data project (20 total)
  const projects = {
    1: {
      title: "Sistem Informasi Peminjaman Barang",
      img: "https://picsum.photos/600/400?random=1",
      desc: "Sistem informasi berbasis web untuk mengelola peminjaman barang di kampus dengan fitur CRUD, validasi form, dan otentikasi multi-role.",
      link: "#",
    },
    2: {
      title: "SIKC (Smart City Competition)",
      img: "https://picsum.photos/600/400?random=2",
      desc: "Platform internal kompetisi berbasis web yang mendukung pendaftaran, pengelolaan peserta, penilaian, dan statistik laporan.",
      link: "#",
    },
    3: {
      title: "Penetration Testing Dashboard",
      img: "https://picsum.photos/600/400?random=3",
      desc: "Dashboard untuk mendokumentasikan hasil pengujian keamanan (Gray, Black, White Box Testing) terhadap aplikasi berbasis web.",
      link: "#",
    },
    4: {
      title: "Task Manager App",
      img: "https://picsum.photos/600/400?random=4",
      desc: "Aplikasi pencatat tugas dengan login, Google sign-in, dan Firebase database. Dibuat dengan Flutter.",
      link: "#",
    },
    5: {
      title: "Portfolio Website",
      img: "https://picsum.photos/600/400?random=5",
      desc: "Website personal dengan navigasi dinamis, dark/light mode, dan halaman responsive.",
      link: "#",
    },
    6: {
      title: "E-Voting System",
      img: "https://picsum.photos/600/400?random=6",
      desc: "Aplikasi voting online berbasis web dengan keamanan OTP dan rekap hasil real-time.",
      link: "#",
    },
    7: {
      title: "Smart Parking IoT",
      img: "https://picsum.photos/600/400?random=7",
      desc: "Prototype IoT parkir pintar dengan ESP32, sensor ultrasonik, dan notifikasi via mobile app.",
      link: "#",
    },
    8: {
      title: "Chatbot AI",
      img: "https://picsum.photos/600/400?random=8",
      desc: "Chatbot berbasis NLP dengan Python Flask untuk layanan informasi mahasiswa.",
      link: "#",
    },
    9: {
      title: "Smart City Dashboard",
      img: "https://picsum.photos/600/400?random=9",
      desc: "Dashboard analitik data kota cerdas, menampilkan data IoT, transportasi, dan lingkungan.",
      link: "#",
    },
    10: {
      title: "Music App 'Rifqyfy'",
      img: "https://picsum.photos/600/400?random=10",
      desc: "Aplikasi streaming musik seperti Spotify dengan playlist pribadi dan rekomendasi lagu.",
      link: "#",
    },
    11: {
      title: "Online Learning Platform",
      img: "https://picsum.photos/600/400?random=11",
      desc: "Platform pembelajaran online dengan fitur kelas virtual, forum diskusi, dan kuis interaktif.",
      link: "#",
    },
    12: {
      title: "Weather Forecast App",
      img: "https://picsum.photos/600/400?random=12",
      desc: "Aplikasi mobile prediksi cuaca real-time menggunakan API eksternal dengan UI modern.",
      link: "#",
    },
    13: {
      title: "E-Commerce Website",
      img: "https://picsum.photos/600/400?random=13",
      desc: "Website toko online dengan keranjang belanja, pembayaran online, dan dashboard admin.",
      link: "#",
    },
    14: {
      title: "Smart Home IoT",
      img: "https://picsum.photos/600/400?random=14",
      desc: "Prototype rumah pintar dengan kontrol lampu dan sensor suhu berbasis ESP32 dan MQTT.",
      link: "#",
    },
    15: {
      title: "Library Management System",
      img: "https://picsum.photos/600/400?random=15",
      desc: "Sistem manajemen perpustakaan untuk mengelola peminjaman, pengembalian, dan katalog buku.",
      link: "#",
    },
    16: {
      title: "Machine Learning Fraud Detection",
      img: "https://picsum.photos/600/400?random=16",
      desc: "Model machine learning untuk mendeteksi transaksi keuangan mencurigakan.",
      link: "#",
    },
    17: {
      title: "Mobile Banking App UI",
      img: "https://picsum.photos/600/400?random=17",
      desc: "Prototype aplikasi mobile banking dengan keamanan fingerprint login dan UI clean.",
      link: "#",
    },
    18: {
      title: "Blog CMS",
      img: "https://picsum.photos/600/400?random=18",
      desc: "Content Management System sederhana untuk membuat dan mengelola posting blog.",
      link: "#",
    },
    19: {
      title: "Online Exam System",
      img: "https://picsum.photos/600/400?random=19",
      desc: "Sistem ujian online dengan randomisasi soal, timer, dan rekap hasil otomatis.",
      link: "#",
    },
    20: {
      title: "Healthcare Monitoring IoT",
      img: "https://picsum.photos/600/400?random=20",
      desc: "IoT monitoring kesehatan pasien dengan sensor detak jantung dan suhu tubuh.",
      link: "#",
    },
  };

  // Generate card dari data
  Object.entries(projects).forEach(([id, project]) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm project-card" data-project="${id}">
        <img src="${project.img}" class="card-img-top" alt="${project.title}">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text text-muted">${project.desc.substring(
            0,
            80
          )}...</p>
        </div>
      </div>
    `;

    projectsContainer.appendChild(col);
  });

  // Event klik card
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const projectId = card.dataset.project;
      const project = projects[projectId];

      if (project) {
        projectTitle.textContent = project.title;
        projectImage.src = project.img;
        projectImage.alt = project.title;
        projectDescription.textContent = project.desc;

        if (project.link) {
          projectLink.classList.remove("d-none");
          projectLink.href = project.link;
        } else {
          projectLink.classList.add("d-none");
        }

        modal.show();
      }
    });
  });
});
// Daftar semua proyek
const projects = [
  {
    title: "Sistem Informasi Peminjaman Barang",
    description: "Aplikasi web untuk memanajemen peminjaman barang di kampus.",
    image: "https://picsum.photos/600/400?random=1",
    link: "https://github.com/rifqy/project-peminjaman"
  },
  {
    title: "Website Portofolio",
    description: "Website portofolio pribadi dengan Bootstrap & AOS Animation.",
    image: "https://picsum.photos/600/400?random=2",
    link: "https://github.com/rifqy/portfolio"
  },
  {
    title: "Aplikasi Flutter QTask",
    description: "Task manager mobile app dengan Flutter & Firebase.",
    image: "https://picsum.photos/600/400?random=3",
    link: "https://github.com/rifqy/qtask"
  },
  {
    title: "Penetration Testing Report",
    description: "Laporan uji keamanan web menggunakan metode Gray Box.",
    image: "https://picsum.photos/600/400?random=4",
    link: "https://github.com/rifqy/security-report"
  }
];

// Container daftar project
const projectList = document.getElementById("project-list");

// Render hanya 3 proyek pertama di index.html
projects.slice(0, 3).forEach((project, index) => {
  const col = document.createElement("div");
  col.className = "col-md-4";
  col.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${project.image}" class="card-img-top" alt="${project.title}">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#projectModal"
          onclick="showProject(${index})">Lihat Detail</button>
      </div>
    </div>
  `;
  projectList.appendChild(col);
});

// Function modal untuk detail project
function showProject(index) {
  const project = projects[index];
  document.getElementById("projectImage").src = project.image;
  document.getElementById("projectTitle").textContent = project.title;
  document.getElementById("projectDescription").textContent = project.description;

  const linkBtn = document.getElementById("projectLink");
  if (project.link) {
    linkBtn.href = project.link;
    linkBtn.classList.remove("d-none");
  } else {
    linkBtn.classList.add("d-none");
  }
}
