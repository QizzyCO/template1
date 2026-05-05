import { motion, Variants } from "motion/react";

/**
 * ==============   Data   ================
 */
const findUsData: { title: string; subtitle: string; icon: string; bg: string; link: string }[] = [
  {
    title: "Instagram",
    subtitle: "@jastygarden",
    icon: "📸",
    bg: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
    link: "https://instagram.com/jastygarden"
  },
  {
    title: "WhatsApp",
    subtitle: "Chat Sekarang",
    icon: "💬",
    bg: "linear-gradient(45deg, #25D366 0%, #128C7E 100%)",
    link: "https://wa.me/628976777669"
  },
  {
    title: "TikTok",
    subtitle: "@jastygarden",
    icon: "🎵",
    bg: "linear-gradient(45deg, #000000 0%, #ee1d52 100%)",
    link: "https://tiktok.com/@jastygarden"
  },
];

/**
 * ==============   Animation   ================
 */
const cardVariants: Variants = {
  offscreen: {
    y: 400,
  },
  onscreen: {
    y: 120, // Lowered further to stay closer to the "hole"
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 1.2,
    },
  },
};

/**
 * ==============   Styles   ================
 */
const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  width: 340, 
  height: 500,
  margin: "0 10px", 
};

const splash: React.CSSProperties = {
  position: "absolute",
  bottom: 0,
  left: "50%",
  width: 500,
  height: 450,
  transform: "translateX(-50%) scale(0.7)", 
  transformOrigin: "bottom center",
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const cardStyle: React.CSSProperties = {
  width: 220,
  height: 320,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 24,
  background: "#ffffff",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.2)",
  transformOrigin: "center bottom",
  textAlign: "center",
  padding: "24px",
  textDecoration: "none",
};

interface CardProps {
  title: string;
  subtitle: string;
  icon: string;
  background: string;
  i: number;
  link: string;
}

function Card({ title, subtitle, icon, background, i, link }: CardProps) {
  return (
    <div className="flex flex-col items-center">
      {/* Desktop Version with Animation */}
      <motion.div
        className={`card-container-${i} w-[340px] h-[500px] hidden md:flex overflow-hidden justify-center items-center relative mx-[10px]`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.9, once: true }}
      >
        <div 
          style={{ background }} 
          className="absolute bottom-0 left-1/2 w-[500px] h-[450px] -translate-x-1/2 scale-[0.7] origin-bottom clip-path-hole"
        />
        <style>{`
          .clip-path-hole {
            clip-path: path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z");
          }
        `}</style>
        <motion.a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...cardStyle, background }} 
          variants={cardVariants} 
          className="card group border-4 border-white/20"
        >
          <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{icon}</div>
          <h4 className="text-xl font-serif font-bold text-white mb-2 tracking-tight">{title}</h4>
          <p className="text-white/80 font-medium uppercase tracking-[0.2em] text-[10px]">{subtitle}</p>
        </motion.a>
      </motion.div>

      {/* Mobile Version - Simple Box */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:hidden w-full max-w-[280px] p-8 rounded-3xl flex flex-col items-center justify-center text-center border-4 border-white/20 shadow-xl mb-6"
        style={{ background }}
      >
        <div className="text-5xl mb-4 transform scale-110">{icon}</div>
        <h4 className="text-xl font-serif font-bold text-white mb-1 tracking-tight">{title}</h4>
        <p className="text-white/80 font-medium uppercase tracking-[0.2em] text-[10px]">{subtitle}</p>
      </motion.a>
    </div>
  );
}

export default function FindUs() {
  return (
    <section id="find-us" className="py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary/60 font-semibold uppercase tracking-[0.3em] text-xs"
        >
          Hubungi Kami
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif mt-4 mb-12 text-secondary"
        >
          Sapa Kami di <span className="italic">Sosial Media</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-2">
          {findUsData.map((item, i) => (
            <Card 
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              background={item.bg}
              i={i}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

