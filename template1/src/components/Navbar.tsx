import { motion, AnimatePresence } from "motion/react";
import { Home, Utensils, Calendar, Camera, Phone, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Beranda", href: "/#home", icon: Home },
    { name: "Galeri", href: "/#gallery", icon: Camera },
    { name: "Menu", href: "/#menu", icon: Utensils },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
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
          isScrolled ? "py-4 bg-white/90 backdrop-blur-xl shadow-lg border-b border-secondary/10" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary/20">
               <img 
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumpE2JaXz4f9oSOQ6klwWeWyuxv4ft1vt2w&s"
                 alt="Logo"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             <span className={`text-xl font-serif font-bold tracking-tight transition-colors duration-500 ${isScrolled ? "text-secondary" : "text-white"}`}>Jasty Garden</span>
          </Link>

          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-bold uppercase tracking-widest text-[10px] transition-all hover:scale-110 ${isScrolled ? "text-secondary/80 hover:text-secondary" : "text-white/80 hover:text-white"}`}
              >
                {link.name}
              </a>
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

      {/* Mobile Navbar (Top) */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] md:hidden transition-all duration-500 ${
          isScrolled || isMobileMenuOpen ? "bg-white shadow-lg border-b border-secondary/10" : "bg-transparent"
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
             <div className="w-8 h-8 rounded-full overflow-hidden border border-secondary/20">
               <img 
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumpE2JaXz4f9oSOQ6klwWeWyuxv4ft1vt2w&s"
                 alt="Logo"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
             </div>
             <span className={`text-lg font-serif font-bold tracking-tight ${(isScrolled || isMobileMenuOpen) ? "text-secondary" : "text-white"}`}>Jasty Garden</span>
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors ${(isScrolled || isMobileMenuOpen) ? "text-secondary bg-secondary/5" : "text-white bg-white/10"}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white overflow-hidden border-b border-secondary/10"
            >
              <div className="px-6 py-8 space-y-6">
                {navLinks.map((link) => {
                   const Icon = link.icon;
                   return (
                    <div key={link.name}>
                        <a 
                          href={link.href}
                          onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                          className="flex items-center gap-4 text-secondary font-bold uppercase tracking-widest text-sm"
                        >
                          <div className="w-10 h-10 rounded-xl bg-secondary/5 flex items-center justify-center">
                            <Icon size={20} />
                          </div>
                          {link.name}
                        </a>
                    </div>
                  );
                })}

                <motion.a
                  href="https://wa.me/628976777669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg shadow-emerald/20 mt-4"
                >
                  <Phone size={18} /> Hubungi WhatsApp
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
