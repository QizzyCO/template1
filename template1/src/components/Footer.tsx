import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cream pt-24 pb-12 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">R</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-primary">
                Rasa Nusantara
              </span>
            </div>
            <p className="text-ink/60 leading-relaxed">
              Menyajikan pengalaman kuliner tak terlupakan sejak 2010. 
              Bergabunglah dengan kami dalam perjalanan rasa dan semangat.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all btn-interaction">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Tautan Cepat</h4>
            <ul className="space-y-4">
              {["Beranda", "Menu Kami", "Tentang Kami", "Reservasi"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-ink/60 hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Info Kontak</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-primary mt-1" size={20} />
                <span className="text-ink/60">Jl. Kuliner No. 123, <br/>Jakarta Selatan, 12345</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-primary" size={20} />
                <span className="text-ink/60">+62 (21) 123-4567</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-primary" size={20} />
                <span className="text-ink/60">halo@rasanusantara.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8">Buletin</h4>
            <p className="text-ink/60 mb-6">Berlangganan untuk mendapatkan pembaruan terbaru dan penawaran spesial.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-2 focus:ring-accent/20 outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-primary text-white px-4 rounded-xl hover:bg-accent transition-all btn-interaction">
                Ikuti
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-ink/40">
          <p>© 2026 Rasa Nusantara. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-accent transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
