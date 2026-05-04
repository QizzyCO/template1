import { motion } from "motion/react";
import { Calendar, Users, Clock, ArrowRight } from "lucide-react";

export default function Reservation() {
  return (
    <section id="reservation" className="py-24 bg-mint text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm">Reservasi</span>
            <h2 className="text-5xl md:text-7xl font-serif mt-4 mb-8 leading-tight">
              Ingin <span className="italic text-accent">Memesan</span> Tempat?
            </h2>
            <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-lg">
              Amankan spot favorit Anda di Jasty Garden. Baik itu untuk bekerja, 
              kumpul komunitas, atau sekadar menikmati waktu sendiri dengan kopi pilihan.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Clock className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold">Jam Operasional</h4>
                  <p className="text-white/60">Senin - Minggu: 10:00 - 23:00</p>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Users className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold">Acara Privat</h4>
                  <p className="text-white/60">Tersedia untuk grup 10-50 orang</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-cream rounded-[40px] p-8 md:p-12 text-white shadow-2xl border border-white/5"
          >
            <h3 className="text-3xl font-serif font-bold mb-8">Pesan Pengalaman Anda</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Nama Lengkap</label>
                  <input type="text" placeholder="Budi Santoso" className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-transparent focus:border-white/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Alamat Email</label>
                  <input type="email" placeholder="budi@email.com" className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-transparent focus:border-white/20 outline-none transition-all" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Tanggal</label>
                  <div className="relative">
                    <input type="date" className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-transparent focus:border-white/20 outline-none transition-all appearance-none" />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none" size={20} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Jumlah Tamu</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-transparent focus:border-white/20 outline-none transition-all appearance-none">
                    <option className="bg-cream">2 Orang</option>
                    <option className="bg-cream">4 Orang</option>
                    <option className="bg-cream">6 Orang</option>
                    <option className="bg-cream">8+ Orang</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Permintaan Khusus</label>
                <textarea rows={3} placeholder="Ada kebutuhan diet khusus atau acara spesial?" className="w-full px-6 py-4 rounded-2xl bg-white/5 border-2 border-transparent focus:border-white/20 outline-none transition-all resize-none"></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-xl shadow-black/20 transition-colors"
              >
                Konfirmasi Reservasi <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
