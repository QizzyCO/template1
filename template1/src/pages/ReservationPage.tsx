import { motion } from "motion/react";
import { Calendar, Users, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "2 Orang",
    message: ""
  });

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = "628123456789"; // Konsisten dengan tombol WhatsApp mengambang
    const text = `Halo Jasty Garden, saya ingin melakukan reservasi:
    
*Nama:* ${formData.name}
*Email:* ${formData.email}
*Tanggal:* ${formData.date}
*Jumlah Tamu:* ${formData.guests}
*Pesan:* ${formData.message || "-"}

Terima kasih!`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${waNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-mint pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs mb-12 transition-all backdrop-blur-sm border border-white/10"
        >
          <ArrowLeft size={18} /> Kembali ke Beranda
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-semibold uppercase tracking-[0.2em] text-sm">Reservasi</span>
            <h2 className="text-5xl md:text-7xl font-serif mt-4 mb-8 leading-tight text-white">
              Mulai <span className="italic text-accent">Perjalanan</span> Anda di Sini
            </h2>
            <p className="text-lg text-white/70 mb-12 leading-relaxed max-w-lg">
              Amankan spot favorit Anda di Jasty Garden. Apapun acaranya, kami siap menyambut Anda dengan 
              layanan terbaik dan suasana taman yang menenangkan.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-center p-6 bg-white/5 rounded-3xl shadow-xl shadow-black/5">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Clock className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-white">Jam Operasional</h4>
                  <p className="text-white/60">Senin - Minggu: 10:00 - 23:00</p>
                </div>
              </div>
              <div className="flex gap-6 items-center p-6 bg-white/5 rounded-3xl shadow-xl shadow-black/5">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Users className="text-accent" size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-white">Acara Privat</h4>
                  <p className="text-white/60">Tersedia untuk grup hingga 50 orang</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-cream rounded-[40px] p-8 md:p-12 text-white shadow-2xl relative"
          >
            <h3 className="text-3xl font-serif font-bold mb-8 text-white">Formulir Pemesanan</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Nama Lengkap</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Budi Santoso" 
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-primary transition-all outline-none" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Alamat Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="budi@email.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-primary transition-all outline-none" 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Tanggal</label>
                  <div className="relative">
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-primary transition-all outline-none appearance-none" 
                    />
                    <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none" size={20} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest opacity-60">Jumlah Tamu</label>
                  <select 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-primary transition-all outline-none appearance-none"
                  >
                    <option>2 Orang</option>
                    <option>4 Orang</option>
                    <option>6 Orang</option>
                    <option>10+ Orang (Acara Privat)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Pesan Spesial</label>
                <textarea 
                  name="message"
                  rows={3} 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ada permintaan khusus atau perayaan khusus?" 
                  className="w-full px-6 py-4 rounded-2xl bg-cream/50 border-2 border-transparent focus:border-primary transition-all outline-none resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 shadow-xl shadow-black/20 transition-all font-sans"
              >
                Kirim Permintaan Ke WhatsApp <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
