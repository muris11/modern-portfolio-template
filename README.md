# Portofolio Website - Rifqy Saputra

<<<<<<< HEAD
![Portfolio Template]

https://muris11.github.io/modern-portofolio-template/

Template portofolio modern berbasis **HTML, CSS, Bootstrap 5, dan JavaScript**.  
Dirancang untuk **developer, desainer, freelancer, atau siapa saja** yang ingin menampilkan karya dan profil secara profesional. Template ini **responsif**, siap pakai, dan mudah dikustomisasi.
=======
Website ini adalah portofolio online modern untuk menampilkan profil, daftar proyek, dan kontak secara profesional. Dibangun dengan HTML, CSS, dan JavaScript, serta komponen Navbar dan Footer yang konsisten di semua halaman.
>>>>>>> e7d062b (pesan commit pertama)

---

## Demo

Lihat demo website di [GitHub Pages](https://muris11.github.io/modern-portfolio-template/)

## Fitur Utama

- Desain responsif (desktop, tablet, mobile)
- Mode gelap/terang
- Navbar dan footer komponen
- Filter & pencarian proyek
- Form kontak dengan validasi
- Animasi modern (AOS)
- Struktur folder rapi dan mudah dikustomisasi

## Teknologi

- HTML5 & CSS3
- Bootstrap 5
- JavaScript (Vanilla)
- FontAwesome & AOS Animation

## Struktur Folder

```
portfolio-template/
├── index.html           # Halaman utama
├── about.html           # Halaman tentang diri
├── projects.html        # Halaman proyek
├── contact.html         # Halaman kontak
├── README.md            # Dokumentasi
│
├── css/
│   ├── style.css        # CSS utama
│   └── projects.css     # CSS khusus proyek
│
├── js/
│   ├── navbar.js        # Script navbar
│   ├── theme.js         # Script mode gelap/terang
│   ├── projects.js      # Data & logic proyek
│   ├── components.js    # Loader komponen
│
├── components/
│   ├── navbar.html      # Komponen navbar
│   └── footer.html      # Komponen footer
│
├── img/                 # Gambar profil/proyek
└── cv/                  # File CV (opsional)
```

## Cara Kustomisasi

- Ganti foto profil/gambar proyek di folder `img/`
- Edit data proyek di `js/projects.js`
- Ubah warna dan tema di `css/style.css` dan `css/projects.css`
- Edit komponen navbar/footer di folder `components/`
- Tambahkan/ubah section sesuai kebutuhan di file HTML

## Troubleshooting

- Navbar/footer tidak muncul: cek file di folder `components/` dan script `js/components.js` di HTML
- Mode gelap tidak berfungsi: cek urutan script dan tombol dengan id `theme-toggle` di navbar
- Gambar tidak tampil: cek path dan nama file di folder `img/`
- Push ke GitHub error: pastikan remote sudah diatur dan Anda punya akses repo

## FAQ

**Q: Apakah website ini bisa di-deploy ke GitHub Pages?**  
A: Ya, cukup push ke repo GitHub dan aktifkan GitHub Pages di pengaturan repo.

**Q: Bagaimana cara menambah proyek baru?**  
A: Edit file `js/projects.js` dan tambahkan objek proyek sesuai format yang ada.

**Q: Bagaimana cara mengganti foto profil?**  
A: Ganti file gambar di folder `img/` dan update referensi di `about.html`.

**Q: Apakah website ini bisa dihubungkan ke backend?**  
A: Ya, form kontak bisa dihubungkan ke backend sesuai kebutuhan Anda.

## Roadmap

- [x] Komponen Navbar/Footer
- [x] Mode gelap/terang
- [x] Filter & pencarian proyek
- [x] Form kontak validasi
- [x] Animasi & desain modern
- [ ] Integrasi backend untuk form kontak
- [ ] Fitur blog/artikel
- [ ] Multi-bahasa

## Changelog

**v1.0.0**

- Rilis awal: struktur komponen, fitur utama, desain responsif

**v1.1.0**

- Penambahan preview CV, perbaikan bug navbar, optimasi mobile

**v1.2.0**

- README diperbarui, troubleshooting, credits, FAQ, roadmap

## Credits

- Template oleh [muris11](https://github.com/muris11)
- Bootstrap, FontAwesome, AOS
- Inspirasi desain dari berbagai portofolio modern

## Kontribusi

Silakan ajukan pull request atau saran untuk pengembangan lebih lanjut.

## Contact

Untuk pertanyaan atau kerjasama, silakan kontak melalui halaman kontak di website atau email: rifqy.saputra@email.com

## Lisensi

MIT
