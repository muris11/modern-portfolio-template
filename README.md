# Portfolio Template

![Portfolio Template](img/placeholder/hero.jpg)  

Template portofolio modern berbasis **HTML, CSS, Bootstrap 5, dan JavaScript**.  
Dirancang untuk **developer, desainer, freelancer, atau siapa saja** yang ingin menampilkan karya dan profil secara profesional. Template ini **responsif**, siap pakai, dan mudah dikustomisasi.

---

## Fitur Utama
- **Responsive Design:** Tampilan optimal di desktop, tablet, dan mobile.  
- **Dark/Light Mode Toggle:** Ubah tema dengan tombol toggle.  
- **Navbar Fixed:** Navigasi selalu terlihat saat scroll.  
- **Hero Section:** Perkenalan dengan nama, profesi, dan CTA ke proyek.  
- **About Section:** Deskripsi singkat, skills, dan foto profil.  
- **Skills Section:** Keahlian ditampilkan dengan ikon dan deskripsi.  
- **Projects Section:** Menampilkan proyek unggulan (3 proyek di halaman utama).  
- **Project Modal:** Klik proyek untuk melihat detail lebih lengkap.  
- **Testimonials Section:** Contoh review atau testimoni dari mentor/klien.  
- **Contact Form:** Formulir UI siap pakai (hanya front-end, bisa dikoneksikan backend).  
- **Footer:** Ikon media sosial dan copyright.

---

## Struktur Folder
portfolio-template/
│
├── index.html # Halaman utama
├── about.html # Halaman tentang diri
├── projects.html # Halaman menampilkan semua proyek
├── contact.html # Halaman kontak
├── README.md # Panduan penggunaan template
│
├── css/
│ └── style.css # File CSS utama
│
├── js/
│ ├── navbar.js # Script navbar aktif & shrink
│ ├── theme.js # Script toggle dark/light mode
│ └── projects.js # Data proyek contoh
│
└── img/
└── placeholder/ # Gambar contoh/foto profil yang bisa diganti

yaml
Salin kode

---

## Cara Menggunakan Template

1. **Clone Repository**
   ```bash
   git clone https://github.com/username/portfolio-template.git
Ganti Nama & Foto Profil

Ubah di index.html (Hero Section).

Ubah di about.html (Foto profil & deskripsi).

Update Data Proyek

Buka js/projects.js.

Tambahkan atau edit proyek sesuai kebutuhan.

Kustomisasi Skills

Ubah di about.html dan Skills Section.

Ganti Gambar

Simpan gambar baru di folder img/placeholder/.

Pastikan nama file sama atau ubah path di HTML.

Kustomisasi CSS

Edit css/style.css sesuai warna, font, atau style yang diinginkan.

Preview

Buka index.html di browser untuk melihat hasilnya.

Deploy

Bisa menggunakan GitHub Pages, Netlify, Vercel, atau hosting lain.

Contoh Penambahan Proyek di projects.js
javascript
Salin kode
const projects = [
  {
    title: "Website Company Profile",
    image: "img/placeholder/project1.jpg",
    description: "Website company profile responsive untuk startup.",
    link: "https://example.com"
  },
  {
    title: "Aplikasi ToDo List",
    image: "img/placeholder/project2.jpg",
    description: "Aplikasi web ToDo List dengan CRUD menggunakan JS dan LocalStorage.",
    link: "https://example.com"
  },
  {
    title: "Sistem Peminjaman Barang",
    image: "img/placeholder/project3.jpg",
    description: "Sistem peminjaman barang berbasis web dengan PHP dan MySQL.",
    link: "https://example.com"
  }
];
Teknologi yang Digunakan
HTML5 & CSS3

Bootstrap 5

JavaScript ES6

FontAwesome 6

AOS Animation Library

Tips Penggunaan
Gunakan gambar beresolusi tinggi tapi ukuran file kecil agar cepat dimuat.

Edit warna & font di style.css agar sesuai branding personal atau klien.

Tambahkan favicon di index.html untuk tampilan lebih profesional.

Gunakan GitHub Pages untuk deploy gratis langsung dari repository.

Lisensi
Template ini dilisensikan di bawah MIT License.
Silakan gunakan, modifikasi, dan distribusikan untuk keperluan pribadi maupun komersial.

Kontak
Jika ada pertanyaan tentang template ini:

GitHub: https://github.com/muris11

Email: your-email@example.com

yaml
Salin kode

---

Kalau kamu mau, aku juga bisa buatkan **versi folder template lengkap siap pakai**, dengan 3 proyek default, foto placeholder, dan script JS siap jalan, supaya tinggal di-upload ke GitHub.  

Apakah mau aku buatkan versi lengkap itu juga?