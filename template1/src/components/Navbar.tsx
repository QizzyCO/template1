import { motion } from "motion/react";
import { Search, ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Chef", href: "#chef" },
    { name: "Reservation", href: "#reservation" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 glass shadow-lg" : "py-6 glass shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-serif text-xl font-bold">R</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-tight text-primary">
            Rasa Nusantara
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "Beranda", href: "#home" },
            { name: "Menu", href: "#menu" },
            { name: "Tentang", href: "#about" },
            { name: "Reservasi", href: "#reservation" },
          ].map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, color: "var(--color-accent)" }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium transition-colors uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <button
            className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors btn-interaction"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Pesan Meja
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-cream border-t border-black/5 px-6 py-8 flex flex-col gap-6"
        >
          {[
            { name: "Beranda", href: "#home" },
            { name: "Menu", href: "#menu" },
            { name: "Tentang", href: "#about" },
            { name: "Reservasi", href: "#reservation" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-serif font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary text-white px-6 py-3 rounded-full text-lg font-medium btn-interaction"
          >
            Pesan Meja
          </button>
        </motion.div>
      )}
    </nav>
  );
}
