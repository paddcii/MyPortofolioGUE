/* ===== EDIT DI SINI: semua konten yang sering diganti ===== */
const PROFILE = {
  name: "Fadlah Afrizal",
  roles: ["IT Support", "Technical Support", "Network Enthusiast", "Web Designer"],
  email: "fadlahafrizal522@gmail.com",
  phone: "6282318564499",
  cv: "../assets/cv/Fadlah_Afrizal_Resume.pdf"
};
const SOCIALS = [ // ganti USERNAME dengan akun kamu
  { name: "GitHub", url: "https://github.com/paddcii" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/fadlah-afrizal-a64549405?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
  { name: "Instagram", url: "https://www.instagram.com/paddcii?psln=MXI5Z2JwbjMxZ3NlMQ==" },
  { name: "WhatsApp", url: "https://wa.me/082318564499" + PROFILE.phone }
];
// Gambar sementara dari picsum.photos. Ganti dengan "../assets/img/namafile.jpg" milikmu.
const PROJECTS = [
  { title: "Company Profile", type: "Website Profil Perusahaan Alat Berat", img: "../assets/img/1.png", tech: ["HTML", "CSS", "JavaScript"], desc: "Mengembangkan website company profile untuk perusahaan penyewaan alat berat dengan tampilan responsif dan modern. Berfokus pada pengembangan antarmuka, penyempurnaan tampilan, serta perbaikan bug pada website.", url: "https://skscorp.netlify.app/" },
  { title: "E-Commerce", type: "Marketplace Outdoor", img: "../assets/img/2.png", tech: ["HTML", "CSS", "JavaScript"], desc: "Mengembangkan website e-commerce khusus kebutuhan outdoor dengan konsep marketplace, yang menyediakan berbagai kategori perlengkapan dan produk untuk aktivitas luar ruang. Website dirancang dengan tampilan responsif agar nyaman digunakan melalui desktop maupun perangkat mobile.", url: "https://outerpedia.vercel.app/" },
  { title: "Catalog", type: "Website Katalog Produk", img: "../assets/img/3.png", tech: ["PHP", "CSS", "JavaScript", "MySQL"], desc: "Website katalog untuk menampilkan berbagai pilihan menu makanan. Dilengkapi dengan fitur keranjang sederhana dan filter kategori untuk memudahkan pengguna dalam melihat serta memilih menu yang tersedia. Website dirancang dengan tampilan responsif agar nyaman diakses melalui desktop maupun perangkat mobile.", url: "https://tendabirudemo.freedev.app/" },
  { title: "Company Profile", type: "Website Coffee Shop", img: "../assets/img/4.png", tech: ["HTML", "CSS", "JavaScript"], desc: "Website company profile untuk kedai kopi yang menampilkan informasi brand, menu, serta berbagai produk yang ditawarkan. Website dirancang dengan tampilan modern dan responsif untuk memberikan pengalaman yang nyaman bagi pengunjung di berbagai perangkat.", url: "https://kopiasmaraa.vercel.app/" },
  { title: "Properti Catalog", type: "Website Properti", img: "../assets/img/5.png", tech: ["HTML", "CSS", "JavaScript"], desc: "Website informasi properti yang membantu calon pembeli menemukan hunian terbaik di kawasan Tangerang Selatan, mulai dari BSD hingga Pamulang. Dilengkapi informasi properti, pilihan lokasi, dan galeri untuk memudahkan pencarian rumah sesuai kebutuhan.", url: "https://tangselproperty.vercel.app/" },
  { title: "Event & Campaign", type: "Website Event", img: "../assets/img/6.png", tech: ["HTML", "CSS", "JavaScript"], desc: "Website promosi acara Depok Run for Hope yang mengajak masyarakat untuk berpartisipasi dalam kegiatan lari sekaligus berbagi kepedulian terhadap sesama. Menampilkan informasi acara, kategori lari, jadwal kegiatan, serta penghitung waktu menuju hari pelaksanaan.", url: "https://depokrunevent.vercel.app/" }
];
const CERTS = [
  { title: "Junior Technical Support", org: "BNSP", year: "2026", img: "../assets/img/c1.png", url: "../assets/img/c1.png" },
  { title: "Personal Branding & Creative Marketing", org: "Polimedia", year: "2025", img: "../assets/img/c2.png", url: "../assets/img/c2.png" },
  { title: "Praktik Kerja Lapangan", org: "PKL", year: "2025", img: "../assets/img/c3.png", url: "../assets/img/c3.png" },
  { title: "Financial Literacy & Job Readiness", org: "DBS Foundation", year: "2026", img: "../assets/img/c4.png", url: "../assets/img/c4.png" }
];
