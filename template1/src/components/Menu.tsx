import { motion } from "motion/react";
import { useState } from "react";

const categories = ["Semua", "Hidangan Utama", "Sate & Bakaran", "Sayuran", "Minuman"];

const menuItems = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    category: "Hidangan Utama",
    price: "Rp 45.000",
    image: "https://picsum.photos/seed/nasigoreng/400/400",
    description: "Nasi goreng autentik dengan telur mata sapi, ayam goreng, dan kerupuk udang."
  },
  {
    id: 2,
    name: "Rendang Daging Sapi",
    category: "Hidangan Utama",
    price: "Rp 65.000",
    image: "https://picsum.photos/seed/rendang-dish/400/400",
    description: "Daging sapi yang dimasak perlahan dengan santan dan rempah-rempah pilihan."
  },
  {
    id: 3,
    name: "Sate Ayam Madura",
    category: "Sate & Bakaran",
    price: "Rp 35.000",
    image: "https://picsum.photos/seed/satay/400/400",
    description: "Sate ayam empuk dengan bumbu kacang khas Madura yang gurih."
  },
  {
    id: 4,
    name: "Gado-Gado Betawi",
    category: "Sayuran",
    price: "Rp 28.000",
    image: "https://picsum.photos/seed/gadogado/400/400",
    description: "Campuran sayuran segar, tahu, tempe, dan telur dengan saus kacang kental."
  },
  {
    id: 5,
    name: "Ikan Bakar Jimbaran",
    category: "Sate & Bakaran",
    price: "Rp 85.000",
    image: "https://picsum.photos/seed/grilled-fish/400/400",
    description: "Ikan laut segar yang dibakar dengan bumbu khas Jimbaran, Bali."
  },
  {
    id: 6,
    name: "Es Teler Durian",
    category: "Minuman",
    price: "Rp 32.000",
    image: "https://picsum.photos/seed/esteler/400/400",
    description: "Minuman segar dengan alpukat, nangka, kelapa muda, dan topping durian."
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems = activeCategory === "Semua" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold uppercase tracking-[0.2em] text-sm"
          >
            Menu Kami
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif mt-4 mb-6"
          >
            Nikmati Hidangan Di Mana Setiap Kreasi Adalah <br />
            <span className="italic">Mahakarya Cita Rasa</span>
          </motion.h2>
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
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-cream text-ink/60 hover:bg-cream/80"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square rounded-[32px] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full font-serif font-bold text-primary shadow-sm">
                  {item.price}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-accent transition-colors">
                {item.name}
              </h3>
              <p className="text-ink/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
