import { motion } from "motion/react";
import { useState } from "react";

const categories = ["Semua", "Menu & Hidangan", "Fasilitas & Ruangan", "Paket & Venue"];

const menuItems = [
  {
    id: 1,
    name: "Minuman",
    category: "Menu & Hidangan",
    price: "Pesan",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Koleksi minuman segar, kopi pilihan, dan racikan khas Jasty Garden.",
    link: "https://wa.me/p/26799477306407571/42662598049871"
  },
  {
    id: 2,
    name: "Menu Umum",
    category: "Menu & Hidangan",
    price: "Pesan",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Berbagai santapan lezat, hidangan utama, dan masakan favorit keluarga asli Nusantara.",
    link: "https://wa.me/p/24467577819607524/628976777669"
  },
  {
    id: 3,
    name: "Tempat Parkir",
    category: "Fasilitas & Ruangan",
    price: "Lokasi",
    image: "https://images.unsplash.com/photo-1590674899484-d564fa7922d0?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Fasilitas area parkir armada kendaraan luas, aman, dan memadai untuk seluruh tamu.",
    link: "https://wa.me/p/27093152390291843/628976777669"
  },
  {
    id: 4,
    name: "Area Garden",
    category: "Fasilitas & Ruangan",
    price: "Detail",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Nikmati suasana santai outdoor di taman asri yang hijau, subur, dan menyejukkan.",
    link: "https://wa.me/p/25948302764835195/628976777669"
  },
  {
    id: 5,
    name: "Gazebo Samping Joglo",
    category: "Fasilitas & Ruangan",
    price: "Detail",
    image: "https://images.unsplash.com/photo-1621293954908-907141447fcb?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Gazebo kayu estetik semi terbuka di sebelah pendopo, sejuk dan santai untuk berkumpul.",
    link: "https://wa.me/p/25948364088159321/628976777669"
  },
  {
    id: 6,
    name: "VIP lt 2 Indoor & Outdoor",
    category: "Fasilitas & Ruangan",
    price: "Booking",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Ruang eksklusif di lantai dua dengan pemandangan elok, tersedia indoor AC & balkon outdoor.",
    link: "https://wa.me/p/26078382365144771/628976777669"
  },
  {
    id: 7,
    name: "VIP Room Joglo AC",
    category: "Fasilitas & Ruangan",
    price: "Booking",
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Ruang pertemuan privat berukuran sedang di bagian Joglo lengkap dengan fasilitas AC.",
    link: "https://wa.me/p/26344636785161676/628976777669"
  },
  {
    id: 8,
    name: "VIP Room Garden AC",
    category: "Fasilitas & Ruangan",
    price: "Booking",
    image: "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Acara keluarga lebih intim di ruang ber-AC dengan pemandangan hijau langsung ke taman indah.",
    link: "https://wa.me/p/25944254071868587/628976777669"
  },
  {
    id: 9,
    name: "VIP Room Garden Non-AC",
    category: "Fasilitas & Ruangan",
    price: "Booking",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Kebersamaan natural di ruang taman semi terbuka dengan embusan angin sepoi alam yang rindang.",
    link: "https://wa.me/p/26184844401131736/628976777669"
  },
  {
    id: 10,
    name: "Mushola",
    category: "Fasilitas & Ruangan",
    price: "Gratis",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Tempat ibadah bersih, nyaman, tenang, beralaskan sajadah rapi untuk kenyamanan Anda sekeluarga.",
    link: "https://wa.me/p/26094087243540955/628976777669"
  },
  {
    id: 11,
    name: "Area Joglo Jasty Garden",
    category: "Fasilitas & Ruangan",
    price: "Booking",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Pendopo bertema arsitektur klasik Jawa yang anggun dan luas untuk pertemuan keluarga atau reuni.",
    link: "https://wa.me/p/34483895477862273/628976777669"
  },
  {
    id: 12,
    name: "Snack",
    category: "Menu & Hidangan",
    price: "Pesan",
    image: "https://images.unsplash.com/photo-1599490659273-1b519d742837?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Camilan gurih renyah, kue tradisional, serta aneka jajanan pendamping kongkow santai sore hari.",
    link: "https://wa.me/p/25856515724032952/628976777669"
  },
  {
    id: 13,
    name: "Menu Paket & Buffet",
    category: "Menu & Hidangan",
    price: "Pesan",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400&h=455",
    description: "Pilihan paket katering prasmanan buffet mewah untuk perkawinan, reuni, ataupun ulang tahun.",
    link: "https://wa.me/p/25802657539402425/628976777669"
  },
  {
    id: 14,
    name: "Menu Western",
    category: "Menu & Hidangan",
    price: "Pesan",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Sajian hidangan barat modern andalan yang digemari kalangan muda, rasa nikmat berkualitas.",
    link: "https://wa.me/p/25872860519020594/628976777669"
  },
  {
    id: 15,
    name: "Paket Pertunangan",
    category: "Paket & Venue",
    price: "Booking",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Momentum pertunangan (engagement) romantis dikelilingi taman murni dengan sajian memikat.",
    link: "https://wa.me/p/33699901256324505/628976777669"
  },
  {
    id: 16,
    name: "Paket Wisuda",
    category: "Paket & Venue",
    price: "Booking",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Rayakan kelulusan berharga bersama dosen, kerabat, atau teman sejawat dengan nuansa alam rileks.",
    link: "https://wa.me/p/26140003205611110/628976777669"
  },
  {
    id: 17,
    name: "Venue Jasty Garden",
    category: "Paket & Venue",
    price: "Booking",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400&h=450",
    description: "Sewa tempat, gedung utama, halaman taman asri untuk resepsi pernikahan istimewa impian Anda.",
    link: "https://wa.me/p/25509495098752351/628976777669"
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems = activeCategory === "Semua" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-mint">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary/60 font-semibold uppercase tracking-[0.2em] text-sm"
          >
            Katalog
          </motion.span>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? "bg-secondary text-white shadow-lg shadow-secondary/20" 
                  : "bg-secondary/5 text-secondary hover:bg-secondary/10 border border-secondary/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredItems.map((item) => (
            <motion.a
              layout
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer block bg-white border border-secondary/10 p-6 md:p-8 rounded-[24px] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-secondary/40 mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-3 group-hover:text-[#164e32] transition-colors text-secondary">
                  {item.name}
                </h3>
                <p className="text-secondary/60 text-xs md:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-secondary/5">
                <span className="text-[10px] uppercase tracking-widest font-bold text-secondary/30">WhatsApp Catalog</span>
                <div className="bg-[#164e32] text-white px-4 py-1.5 rounded-full font-serif font-bold text-[10px] md:text-xs shadow-sm group-hover:bg-[#25D366] transition-colors flex items-center gap-1.5 border border-white/10">
                  <span className="w-1.2 h-1.2 bg-white rounded-full animate-ping" />
                  {item.price}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
