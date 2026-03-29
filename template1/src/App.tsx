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

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/628123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white hover:bg-[#128C7E] transition-all"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
}
