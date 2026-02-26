import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-[32px] overflow-hidden aspect-[3/4]">
                <img src="https://picsum.photos/seed/about1/600/800" alt="Interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="rounded-[32px] overflow-hidden aspect-square">
                <img src="https://picsum.photos/seed/about2/600/600" alt="Plating" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[32px] overflow-hidden aspect-square">
                <img src="https://picsum.photos/seed/about3/600/600" alt="Chef at work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="rounded-[32px] overflow-hidden aspect-[3/4]">
                <img src="https://picsum.photos/seed/about4/600/800" alt="Fresh ingredients" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          
          {/* Experience Badge */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-secondary rounded-full flex flex-col items-center justify-center text-white text-center border-8 border-cream"
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
          <span className="text-primary font-semibold uppercase tracking-[0.2em] text-sm">Tentang Kami</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-4 mb-8 leading-tight">
            Membuat Hari Anda Lebih Baik Dengan <span className="italic">Layanan Luar Biasa</span> dan Kepedulian.
          </h2>
          <p className="text-lg text-ink/70 mb-10 leading-relaxed">
            Masuklah dan nikmati tempat di mana bahan-bahan lokal, kreativitas kuliner, 
            dan semangat tulus mengubah setiap hidangan menjadi perjalanan yang tak terlupakan. 
            Kami percaya bahwa bersantap bukan hanya tentang makanan, tetapi tentang menciptakan kenangan.
          </p>

          <div className="space-y-6 mb-10">
            {[
              "Keahlian Kuliner - Tim kami terdiri dari ahli kuliner yang berdedikasi.",
              "Tradisi Kuliner Autentik - Menjaga esensi dari resep-resep klasik Nusantara.",
              "Katering Terbaik - Kami membawa pengalaman Rasa Nusantara ke acara Anda."
            ].map((item, i) => (
              <motion.div 
                key={i} 
                whileHover={{ x: 10 }}
                className="flex gap-4 items-start cursor-default"
              >
                <div className="mt-1 text-accent">
                  <CheckCircle2 size={24} />
                </div>
                <p className="font-medium text-ink/80">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all shadow-xl shadow-primary/20"
          >
            Baca Kisah Kami
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
