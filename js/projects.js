document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projectsContainer");
  const modal = new bootstrap.Modal(document.getElementById("projectModal"));

  const projectTitle = document.getElementById("projectTitle");
  const projectImage = document.getElementById("projectImage");
  const projectDescription = document.getElementById("projectDescription");
  const projectLink = document.getElementById("projectLink");

  // Data proyek
  const projects = [
    {
      id: 1,
      title: "Website Portfolio",
      category: "web",
      description:
        "Website portfolio personal menggunakan HTML, CSS, dan JavaScript.",
      image: "images/projects/portfolio.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://example.com/portfolio",
    },
    {
      id: 2,
      title: "Sistem Informasi Peminjaman Barang",
      category: "web",
      description:
        "Sistem informasi berbasis web untuk mengelola peminjaman barang di kampus dengan fitur CRUD, validasi form, dan otentikasi multi-role.",
      image: "https://picsum.photos/600/400?random=1",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
    },
    {
      id: 3,
      title: "SIKC (Smart City Competition)",
      category: "web",
      description:
        "Platform internal kompetisi berbasis web yang mendukung pendaftaran, pengelolaan peserta, penilaian, dan statistik laporan.",
      image: "https://picsum.photos/600/400?random=2",
      technologies: ["HTML", "CSS", "JavaScript", "Laravel", "MySQL"],
      link: "#",
    },
    {
      id: 4,
      title: "Penetration Testing Dashboard",
      category: "web",
      description:
        "Dashboard untuk mendokumentasikan hasil pengujian keamanan (Gray, Black, White Box Testing) terhadap aplikasi berbasis web.",
      image: "https://picsum.photos/600/400?random=3",
      technologies: ["HTML", "CSS", "JavaScript", "Django", "Python"],
      link: "#",
    },
    {
      id: 5,
      title: "Task Manager App",
      category: "mobile",
      description:
        "Aplikasi pencatat tugas dengan login, Google sign-in, dan Firebase database. Dibuat dengan Flutter.",
      image: "https://picsum.photos/600/400?random=4",
      technologies: ["Dart", "Flutter", "Firebase"],
      link: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "web",
      description:
        "Website personal dengan navigasi dinamis, dark/light mode, dan halaman responsive.",
      image: "https://picsum.photos/600/400?random=5",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
    {
      id: 7,
      title: "E-Voting System",
      category: "web",
      description:
        "Aplikasi voting online berbasis web dengan keamanan OTP dan rekap hasil real-time.",
      image: "https://picsum.photos/600/400?random=6",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      link: "#",
    },
    {
      id: 8,
      title: "Smart Parking IoT",
      category: "iot",
      description:
        "Prototype IoT parkir pintar dengan ESP32, sensor ultrasonik, dan notifikasi via mobile app.",
      image: "https://picsum.photos/600/400?random=7",
      technologies: ["ESP32", "Ultrasonic Sensor", "MQTT", "Node-RED"],
      link: "#",
    },
    {
      id: 9,
      title: "Chatbot AI",
      category: "ai",
      description:
        "Chatbot berbasis NLP dengan Python Flask untuk layanan informasi mahasiswa.",
      image: "https://picsum.photos/600/400?random=8",
      technologies: ["Python", "Flask", "NLTK", "TensorFlow"],
      link: "#",
    },
    {
      id: 10,
      title: "Smart City Dashboard",
      category: "web",
      description:
        "Dashboard analitik data kota cerdas, menampilkan data IoT, transportasi, dan lingkungan.",
      image: "https://picsum.photos/600/400?random=9",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
      link: "#",
    },
    {
      id: 11,
      title: "Music App 'Rifqyfy'",
      category: "mobile",
      description:
        "Aplikasi streaming musik seperti Spotify dengan playlist pribadi dan rekomendasi lagu.",
      image: "https://picsum.photos/600/400?random=10",
      technologies: ["Dart", "Flutter", "Firebase"],
      link: "#",
    },
    {
      id: 12,
      title: "Online Learning Platform",
      category: "web",
      description:
        "Platform pembelajaran online dengan fitur kelas virtual, forum diskusi, dan kuis interaktif.",
      image: "https://picsum.photos/600/400?random=11",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
    },
    {
      id: 13,
      title: "Weather Forecast App",
      category: "mobile",
      description:
        "Aplikasi mobile prediksi cuaca real-time menggunakan API eksternal dengan UI modern.",
      image: "https://picsum.photos/600/400?random=12",
      technologies: ["Dart", "Flutter", "API"],
      link: "#",
    },
    {
      id: 14,
      title: "E-Commerce Website",
      category: "web",
      description:
        "Website toko online dengan keranjang belanja, pembayaran online, dan dashboard admin.",
      image: "https://picsum.photos/600/400?random=13",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
    },
    {
      id: 15,
      title: "Smart Home IoT",
      category: "iot",
      description:
        "Prototype rumah pintar dengan kontrol lampu dan sensor suhu berbasis ESP32 dan MQTT.",
      image: "https://picsum.photos/600/400?random=14",
      technologies: ["ESP32", "MQTT", "Node-RED"],
      link: "#",
    },
    {
      id: 16,
      title: "Library Management System",
      category: "web",
      description:
        "Sistem manajemen perpustakaan untuk mengelola peminjaman, pengembalian, dan katalog buku.",
      image: "https://picsum.photos/600/400?random=15",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
    },
    {
      id: 17,
      title: "Machine Learning Fraud Detection",
      category: "ai",
      description:
        "Model machine learning untuk mendeteksi transaksi keuangan mencurigakan.",
      image: "https://picsum.photos/600/400?random=16",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      link: "#",
    },
    {
      id: 18,
      title: "Mobile Banking App UI",
      category: "mobile",
      description:
        "Prototype aplikasi mobile banking dengan keamanan fingerprint login dan UI clean.",
      image: "https://picsum.photos/600/400?random=17",
      technologies: ["Dart", "Flutter"],
      link: "#",
    },
    {
      id: 19,
      title: "Blog CMS",
      category: "web",
      description:
        "Content Management System sederhana untuk membuat dan mengelola posting blog.",
      image: "https://picsum.photos/600/400?random=18",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
    },
    {
      id: 20,
      title: "Online Exam System",
      category: "web",
      description:
        "Sistem ujian online dengan randomisasi soal, timer, dan rekap hasil otomatis.",
      image: "https://picsum.photos/600/400?random=19",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "#",
    },
    {
      id: 21,
      title: "Healthcare Monitoring IoT",
      category: "iot",
      description:
        "IoT monitoring kesehatan pasien dengan sensor detak jantung dan suhu tubuh.",
      image: "https://picsum.photos/600/400?random=20",
      technologies: ["ESP32", "MQTT", "Node-RED"],
      link: "#",
    },
  ];

  // DOM Elements
  const searchInput = document.getElementById("searchProjects");
  const filterSelect = document.getElementById("filterProjects");

  // Event Listeners
  searchInput.addEventListener("input", filterProjects);
  filterSelect.addEventListener("change", filterProjects);

  // Filter projects based on search and category
  function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = filterSelect.value;

    const filteredProjects = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm);
      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    displayProjects(filteredProjects);
  }

  // Display projects in the container
  function displayProjects(projectsToShow) {
    try {
      if (!projectsContainer) {
        console.error("Projects container not found");
        return;
      }

      projectsContainer.innerHTML = projectsToShow.length
        ? ""
        : '<div class="col-12 text-center"><p>Tidak ada proyek yang ditemukan</p></div>';

      if (projectsToShow.length === 0) return;

      projectsToShow.forEach((project) => {
        if (!project.title || !project.description) {
          console.warn("Invalid project data:", project);
          return;
        }

        const card = document.createElement("div");
        card.className = "col-md-6 col-lg-4";
        card.innerHTML = `
                <div class="card h-100 project-card" data-project-id="${
                  project.id
                }">
                    <img src="${
                      project.image
                    }" class="card-img-top project-image" alt="${
          project.title
        }">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text text-muted">${project.description.substring(
                          0,
                          100
                        )}...</p>
                        <div class="mt-2">
                            ${project.technologies
                              .map(
                                (tech) =>
                                  `<span class="tech-tag">${tech}</span>`
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `;

        card
          .querySelector(".project-card")
          .addEventListener("click", () => showProjectDetails(project));
        projectsContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error displaying projects:", error);
    }
  }

  // Show project details in modal
  function showProjectDetails(project) {
    try {
      if (!project) {
        console.error("No project data provided");
        return;
      }

      const modalElement = document.getElementById("projectModal");
      if (!modalElement) {
        console.error("Modal element not found");
        return;
      }

      // Update modal content
      const elements = {
        title: document.getElementById("projectTitle"),
        description: document.getElementById("projectDescription"),
        image: document.getElementById("projectImage"),
        category: document.getElementById("projectCategory"),
        link: document.getElementById("projectLink"),
        tech: document.getElementById("projectTech"),
      };

      // Verify all elements exist
      for (const [key, element] of Object.entries(elements)) {
        if (!element) {
          console.error(`Modal ${key} element not found`);
          return;
        }
      }

      elements.title.textContent = project.title;
      elements.description.textContent = project.description;
      elements.image.src = project.image || "";
      elements.image.alt = project.title;
      elements.category.textContent = getCategoryLabel(project.category);

      if (project.link) {
        elements.link.href = project.link;
        elements.link.classList.remove("d-none");
      } else {
        elements.link.classList.add("d-none");
      }

      elements.tech.innerHTML = project.technologies
        ? project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")
        : "";

      new bootstrap.Modal(modalElement).show();
    } catch (error) {
      console.error("Error showing project details:", error);
    }
  }

  // Get category label in Indonesian
  function getCategoryLabel(category) {
    const categories = {
      web: "Pengembangan Web",
      mobile: "Aplikasi Mobile",
      other: "Lainnya",
    };
    return categories[category] || category;
  }

  // Initial display
  displayProjects(projects);
});
