import { motion } from "motion/react";
import { Home, Utensils, Calendar, Camera, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/#home", icon: Home },
    { name: "Menu", href: "/#menu", icon: Utensils },
    { name: "Galeri", href: "/gallery", icon: Camera, isRoute: true },
    { name: "Reservasi", href: "/reservation", icon: Calendar, isRoute: true },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Navbar (Top) */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] hidden md:block transition-all duration-500 ${
          isScrolled ? "py-4 bg-[#2d4a3e]/80 backdrop-blur-xl shadow-lg border-b border-white/10" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
               <img 
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumpE2JaXz4f9oSOQ6klwWeWyuxv4ft1vt2w&s"
                 alt="Logo"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             <span className="text-xl font-serif font-bold text-white tracking-tight">Jasty Garden</span>
          </Link>

          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-white/80 hover:text-white font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-110"
                >
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/80 hover:text-white font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-110"
                >
                  {link.name}
                </a>
              )
            ))}

            <motion.a
              href="https://wa.me/628976777669"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-[#25D366] text-white rounded-full font-bold text-[10px] uppercase tracking-widest shadow-lg shadow-emerald/20 flex items-center gap-2"
            >
              <Phone size={14} /> WhatsApp
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Bottom Floating Dock) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] w-fit px-2 md:hidden">
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="bg-white rounded-full px-4 py-3 shadow-2xl border border-white/20 flex items-center justify-center gap-2"
        >
          <div className="flex items-center gap-1 no-scrollbar">
            {navLinks.map((link) => {
              const Icon = link.icon;
              
              const content = (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap text-[#2d4a3e] hover:bg-[#2d4a3e]/10"
                  onClick={() => !link.isRoute && handleNavClick(link.href)}
                >
                  <Icon size={20} />
                </motion.div>
              );

              return link.isRoute ? (
                <Link key={link.name} to={link.href}>
                  {content}
                </Link>
              ) : (
                <a key={link.name} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}>
                  {content}
                </a>
              );
            })}

            {/* WhatsApp Icon for Mobile */}
            <motion.a
              href="https://wa.me/628976777669"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg ml-2"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </motion.a>
          </div>
        </motion.nav>
      </div>
    </>
  );
}
