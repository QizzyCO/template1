import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import ScrollFloat from "./ui/ScrollFloat";

export default function About() {
  return (
    <section id="about" className="py-24 bg-mint overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollFloat
            containerClassName="inline-block"
            textClassName="text-6xl md:text-8xl font-serif text-white tracking-tight"
            animationDuration={1}
            stagger={0.05}
          >
            Tentang Kami
          </ScrollFloat>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-[32px] overflow-hidden aspect-[3/4]">
                <img src="https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_161914.jpg.jpeg" alt="Interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="rounded-[32px] overflow-hidden aspect-square">
                <img src="https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_162024.jpg.jpeg" alt="Plating" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[32px] overflow-hidden aspect-square">
                <img src="https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_162316.jpg.jpeg" alt="Chef at work" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
              </div>
              <div className="rounded-[32px] overflow-hidden aspect-[3/4]">
                <img src="https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_162431.jpg.jpeg" alt="Fresh ingredients" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            </div>
          </div>
          
          {/* Experience Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary rounded-full flex flex-col items-center justify-center text-white text-center border-8 border-mint"
          >
            <span className="text-3xl font-bold font-serif">15+</span>
            <span className="text-[10px] uppercase tracking-widest font-bold">Tahun<br/>Dedikasi</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-serif mt-4 mb-8 leading-tight text-white">
            Membuat Hari Anda Lebih Baik Dengan <span className="italic">Layanan Luar Biasa</span> dan Kepedulian.
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            Masuklah dan nikmati suasana taman yang tenang di mana biji kopi pilihan, 
            kreativitas barista, dan semangat tulus mengubah setiap cangkir menjadi perjalanan yang tak terlupakan. 
            Kami percaya bahwa kedai kopi bukan hanya tentang minuman, tetapi tentang menciptakan ruang untuk koneksi.
          </p>

          <div className="space-y-6 mb-10">
            {[
              "Keahlian Barista - Tim kami terdiri dari barista bersertifikat yang berdedikasi.",
              "Biji Kopi Pilihan - Menggunakan biji kopi lokal terbaik dari petani Indonesia.",
              "Suasana Taman Asri - Ruang hijau yang menenangkan untuk bekerja atau bersantai."
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start cursor-default"
              >
                <div className="mt-1 text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <p className="font-medium text-white/80">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all shadow-xl shadow-black/20"
          >
            Baca Kisah Kami
          </motion.button>
        </motion.div>
      </div>
    </div>
  </section>
);
}
