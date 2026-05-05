import { motion } from "motion/react";
import { useState } from "react";

const categories = ["Semua", "Kopi", "Non-Kopi", "Camilan", "Dessert"];

const menuItems = [
  {
    id: 1,
    name: "Manual Brew V60",
    category: "Kopi",
    price: "Rp 35.000",
    image: "https://picsum.photos/seed/v60-coffee/400/400",
    description: "Kopi pilihan dengan teknik drip untuk mengeluarkan karakter rasa terbaik."
  },
  {
    id: 2,
    name: "Cafe Latte",
    category: "Kopi",
    price: "Rp 32.000",
    image: "https://picsum.photos/seed/latte-art/400/400",
    description: "Perpaduan espresso lembut dengan susu creamy yang dipanaskan sempurna."
  },
  {
    id: 3,
    name: "Matcha Latte",
    category: "Non-Kopi",
    price: "Rp 30.000",
    image: "https://picsum.photos/seed/matcha-tea/400/400",
    description: "Bubuk matcha Jepang premium dengan susu segar untuk energi yang menenangkan."
  },
  {
    id: 4,
    name: "Croissant Almond",
    category: "Camilan",
    price: "Rp 28.000",
    image: "https://picsum.photos/seed/croissant/400/400",
    description: "Pastry berlapis yang renyah dengan isian dan topping krim almond."
  },
  {
    id: 5,
    name: "Tiramisu Garden",
    category: "Dessert",
    price: "Rp 45.000",
    image: "https://picsum.photos/seed/tiramisu/400/400",
    description: "Dessert kopi khas Italia dengan sentuhan garnish bunga edibel dari taman kami."
  },
  {
    id: 6,
    name: "Iced Peach Tea",
    category: "Non-Kopi",
    price: "Rp 25.000",
    image: "https://picsum.photos/seed/peach-tea/400/400",
    description: "Teh hitam dingin dengan sari buah persik segar dan potongan buah asli."
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
            Menu Kami
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
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
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
              <div className="relative aspect-square rounded-2xl md:rounded-[32px] overflow-hidden mb-4 md:mb-6 shadow-lg shadow-primary/10">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-white/90 backdrop-blur px-2 md:px-4 py-0.5 md:py-1 rounded-full font-serif font-bold text-[10px] md:text-base text-black shadow-sm">
                  {item.price}
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-serif font-bold mb-1 md:mb-2 group-hover:text-secondary transition-colors text-secondary">
                {item.name}
              </h3>
              <p className="text-secondary/60 text-[10px] md:text-sm leading-relaxed line-clamp-2 md:line-clamp-none">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
