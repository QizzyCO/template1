import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Hero />
          
          {/* Features Section (Quick highlights) */}
          <section className="py-12 bg-primary text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap justify-between items-center gap-8">
                {[
                  { label: "Bahan Lokal", value: "100%" },
                  { label: "Resep Warisan", value: "50+" },
                  { label: "Tahun Pengalaman", value: "15+" },
                  { label: "Tamu Puas", value: "50rb+" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-serif font-bold text-accent mb-1">{stat.value}</div>
                    <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <About />
          
          <Menu />

          {/* Testimonials Section */}
          <section className="py-24 bg-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-primary font-semibold uppercase tracking-[0.2em] text-sm"
              >
                Testimoni
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-serif mt-4"
              >
                Di Mana Momen Menjadi <span className="italic">Kenangan</span>
              </motion.h2>
            </div>

            <div className="relative flex overflow-x-hidden">
              <motion.div
                className="flex gap-8 py-4"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ 
                  duration: 40, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                {[...Array(2)].map((_, outerIndex) => (
                  <div key={outerIndex} className="flex gap-8">
                    {[
                      {
                        name: "Mila Santoso",
                        role: "Kritikus Makanan",
                        text: "Perhatian terhadap detail di setiap hidangan sungguh luar biasa. Permata kuliner sejati di jantung kota.",
                        image: "https://picsum.photos/seed/person1/100/100"
                      },
                      {
                        name: "Iris Wijaya",
                        role: "Tamu Reguler",
                        text: "Rasa Nusantara telah menjadi tempat favorit keluarga kami. Suasananya senikmat makanannya.",
                        image: "https://picsum.photos/seed/person2/100/100"
                      },
                      {
                        name: "James Wilson",
                        role: "Pecinta Kuliner",
                        text: "Saya telah berkeliling dunia mencicipi masakan lezat, dan rasa di sini benar-benar unik dan tak terlupakan.",
                        image: "https://picsum.photos/seed/person3/100/100"
                      },
                      {
                        name: "Budi Pratama",
                        role: "Pengusaha",
                        text: "Pelayanan yang sangat ramah dan rasa masakan yang konsisten. Sangat direkomendasikan untuk jamuan bisnis.",
                        image: "https://picsum.photos/seed/person4/100/100"
                      }
                    ].map((t, i) => (
                      <div
                        key={i}
                        className="w-[350px] md:w-[450px] flex-shrink-0 bg-white p-10 rounded-[40px] shadow-xl shadow-black/5 text-left relative cursor-default"
                      >
                        <div className="flex gap-1 text-accent mb-6">
                          {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                        <p className="text-ink/70 italic mb-8 leading-relaxed whitespace-normal">"{t.text}"</p>
                        <div className="flex items-center gap-4">
                          <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                          <div>
                            <h4 className="font-serif font-bold">{t.name}</h4>
                            <p className="text-xs opacity-50 uppercase tracking-widest">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          <Reservation />
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
