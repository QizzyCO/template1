import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen md:h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_162203.jpg.jpeg" 
          alt="Coffee Shop Garden Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4" fill="currentColor" />
              ))}
            </div>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest opacity-80 text-white">
              Kopi Pilihan & Suasana Asri
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-[92px] font-['Times_New_Roman',_serif] leading-[1.1] mb-6 text-balance text-white">
            Temukan <span className="italic text-accent">Ketenangan</span> di Jasty Garden
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-secondary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-medium flex items-center gap-2 shadow-2xl shadow-black/40 transition-colors hover:bg-secondary/90"
            >
              Reservasi Sekarang <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "var(--color-secondary)", color: "var(--color-secondary)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Lihat Menu
            </motion.button>
          </div>
        </motion.div>
      </div >
    </section >
  );
}
