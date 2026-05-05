import { motion } from "motion/react";
import { Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const TikTokIcon = ({ size }: { size: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const socialIcons = [
    { Icon: Instagram, href: "https://instagram.com/jastygarden" },
    { Icon: MessageCircle, href: "https://wa.me/628976777669" },
    { Icon: TikTokIcon, href: "https://tiktok.com/@jastygarden" }
  ];

  return (
    <footer className="bg-[#1a2e26] pt-24 pb-12 border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumpE2JaXz4f9oSOQ6klwWeWyuxv4ft1vt2w&s"
                  alt="Jasty Garden Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                Jasty Garden
              </span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Menyajikan kopi terbaik dalam suasana taman yang menenangkan sejak 2015. 
              Temukan kedamaian di setiap tetes kopi kami.
            </p>
            <div className="flex gap-4">
              {socialIcons.map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 hover:text-white transition-all btn-interaction"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8 text-white">Tautan Cepat</h4>
            <ul className="space-y-4">
              {["Beranda", "Menu Kami", "Reservasi"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8 text-white">Info Kontak</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="text-white/40 mt-1" size={20} />
                <span className="text-white/60">Jl. Adi Sumarmo No.33, <br/>Colomadu, Karanganyar, 57175</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="text-white/40" size={20} />
                <span className="text-white/60">0897 6777 669</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="text-white/40" size={20} />
                <span className="text-white/60">hello@jastygarden.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8 text-white">Buletin</h4>
            <p className="text-white/60 mb-6">Berlangganan untuk mendapatkan pembaruan terbaru dan penawaran spesial.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-white/50 outline-none text-white"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-secondary px-4 rounded-xl hover:bg-white/90 transition-all btn-interaction">
                Ikuti
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2026 Jasty Garden. Hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
