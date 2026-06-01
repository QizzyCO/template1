import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mila Santoso",
    role: "Kritikus Makanan",
    text: "Perhatian terhadap detail di setiap seduhan kopi sungguh luar biasa. Permata tersembunyi di tengah taman kota yang asri.",
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "Iris Wijaya",
    role: "Tamu Reguler",
    text: "Jasty Garden telah menjadi tempat favorit saya untuk mencari inspirasi. Suasananya setenang kopinya yang nikmat.",
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "James Wilson",
    role: "Pecinta Kopi",
    text: "Saya telah mengunjungi banyak kedai kopi di dunia, dan atmosfer serta kualitas biji kopi di sini sungguh jempolan dan unik.",
    image: "https://picsum.photos/seed/person3/100/100"
  },
  {
    name: "Budi Pratama",
    role: "Pecinta Tanaman",
    text: "Kombinasi sempurna antara kopi berkualitas dan taman yang asri. Sangat direkomendasikan untuk menenangkan pikiran.",
    image: "https://picsum.photos/seed/person4/100/100"
  },
  {
    name: "Siska Putri",
    role: "Digital Nomad",
    text: "Tempat terbaik untuk bekerja. Wi-Fi kencang, kopi mantap, dan pemandangan hijau yang bikin mata segar kembali.",
    image: "https://picsum.photos/seed/person5/100/100"
  }
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  
  // Auto-play interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const gap = 32;
    const cardWidth = Math.min(600, containerWidth * 0.8);
    
    // Calculate exact center offset
    const centerOffset = (containerWidth / 2) - (cardWidth / 2);
    const totalOffset = centerOffset - (index * (cardWidth + gap));
    
    x.set(totalOffset);
  }, [index, x]);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-mint overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-secondary/60 font-semibold uppercase tracking-[0.2em] text-sm"
        >
          Apa Kata Mereka
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-serif mt-4 text-secondary"
        >
          Cerita Dari <span className="italic">Meja Kami</span>
        </motion.h2>
      </div>

      <div className="relative h-[500px]" ref={containerRef}>
        {/* Removed potentially "black looking" gradients or updated to match BG */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-mint via-mint/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-mint via-mint/50 to-transparent z-10 pointer-events-none" />

        <div className="flex h-full items-center">
          <motion.div 
            className="flex gap-8 cursor-grab active:cursor-grabbing py-12"
            style={{ x: springX }}
            drag="x"
            dragConstraints={{ left: -3000, right: 3000 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -100) handleNext();
              else if (info.offset.x > 100) handlePrev();
            }}
          >
            {testimonials.map((t, i) => {
              const isActive = index === i;
              return (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: isActive ? 1.05 : 0.85,
                    opacity: isActive ? 1 : 0.3,
                    filter: isActive ? "blur(0px)" : "blur(8px)",
                    y: isActive ? 0 : 30
                  }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className="w-[80vw] md:w-[600px] flex-shrink-0 bg-white p-10 md:p-16 rounded-[40px] shadow-2xl shadow-secondary/10 text-left relative"
                >
                  <Quote className="absolute top-8 right-8 text-secondary opacity-5 w-24 h-24" />
                  
                  <div className="flex gap-1 text-secondary mb-6">
                    {[...Array(5)].map((_, starIdx) => <span key={starIdx}>★</span>)}
                  </div>
                  
                  <p className="text-xl md:text-2xl text-secondary font-serif italic mb-12 leading-relaxed">
                    "{t.text}"
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-secondary/10" 
                      referrerPolicy="no-referrer" 
                    />
                    <div>
                      <h4 className="text-xl font-serif font-bold text-secondary">{t.name}</h4>
                      <p className="text-xs text-secondary/50 uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex gap-3 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === i ? "bg-secondary w-12" : "bg-secondary/20 hover:bg-secondary/40 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
