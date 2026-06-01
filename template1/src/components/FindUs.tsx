import { motion } from "motion/react";
import { Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram size={28} />,
    link: "https://instagram.com/jastygarden",
    className: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg shadow-pink-500/20"
  },
  {
    name: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.02c.01 3.82-2.02 7.61-5.66 9.19-3.3 1.47-7.54.87-10.37-1.51-3.13-2.61-3.79-7.41-1.43-10.75 1.5-2.14 4.09-3.36 6.74-3.32.14 1.82 1.1 3.51 2.61 4.54-1.28.16-2.42.81-3.12 1.89-.73 1.1-.73 2.44-.06 3.53.69 1.11 1.93 1.75 3.19 1.6 1.49-.12 2.67-1.35 2.66-2.83.05-3.11.01-6.23.03-9.35z"/>
      </svg>
    ),
    link: "https://tiktok.com/@jastygarden",
    className: "bg-[#000000] text-white shadow-lg shadow-black/20"
  },
];

export default function FindUs() {
  return (
    <section id="find-us" className="py-12 bg-white border-t border-secondary/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-10"
        >
          <span className="text-secondary/60 font-serif italic tracking-wide text-[21px] md:text-3xl lg:text-4xl transition-all duration-500">
            Ikuti Kami
          </span>
          
          <div className="flex items-center gap-10">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all border border-white/10 ${social.className}`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

