import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen md:h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/indonesia-restaurant/1920/1080" 
          alt="Indonesian Restaurant Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
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
                <Star key={i} size={14} md:size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest opacity-80 text-white">
              Pengalaman Kuliner Bintang 5
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif leading-[1.1] md:leading-[0.9] mb-6 md:mb-8 text-balance text-white">
            Nikmati <span className="italic text-accent">Cita Rasa</span> Autentik Nusantara
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Perpaduan sempurna antara teknik tradisional dan inovasi modern. 
            Chef kami meracik setiap hidangan dengan rempah pilihan terbaik dari seluruh penjuru Indonesia.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-medium flex items-center gap-2 shadow-2xl shadow-black/40 transition-colors"
            >
              Reservasi Sekarang <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Lihat Menu
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
