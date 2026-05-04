import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, color: "#064e3b", label: "Kopi & Suasana", image: "https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_161738.jpg.jpeg" },
  { id: 2, color: "#14532d", label: "Detail Interior", image: "https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_161745.jpg.jpeg" },
  { id: 3, color: "#166534", label: "Area Outdoor", image: "https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_161924.jpg.jpeg" },
  { id: 4, color: "#15803d", label: "Sajian Spesial", image: "https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_162047.jpg.jpeg" },
  { id: 5, color: "#052e16", label: "Tanaman Hias", image: "https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/20260502_162347.jpg.jpeg" },
];

const ITEM_WIDTH = 400;
const GAP = 30;

export default function GallerySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Move from first item centered to last item centered
  const totalDistance = (items.length - 1) * (ITEM_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 1], [0, -totalDistance]);

  return (
    <div id="gallery-root">
      <section className="py-20 bg-mint text-center">
        <span className="text-secondary font-semibold uppercase tracking-[0.2em] text-sm">Galeri Visual</span>
        <h2 className="text-5xl md:text-6xl font-serif mt-4 text-white">Sudut <span className="italic">Favorit</span></h2>
      </section>

      <div ref={containerRef} className="scroll-container relative h-[300vh] bg-mint">
        <div className="sticky-wrapper sticky top-0 h-screen w-full flex items-center justify-start overflow-hidden z-10 px-[10vw]">
          <motion.div className="gallery flex gap-[40px] will-change-transform" style={{ x }}>
            {items.map((item) => (
              <div
                key={item.id}
                className="gallery-item flex-shrink-0 w-[300px] sm:w-[400px] h-[400px] sm:h-[500px] rounded-2xl relative overflow-hidden bg-cover bg-center shadow-xl shadow-black/10"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                <div 
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to bottom, transparent 40%, #000000aa)`,
                  }}
                />
                <div className="item-content absolute bottom-8 left-8 z-10">
                  <span className="item-number block text-sm font-mono mb-2" style={{ color: "white", opacity: 0.8 }}>
                    0{item.id}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">{item.label}</h2>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="py-20 bg-mint flex flex-col items-center justify-center">
        <Link to="/gallery">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm"
          >
            Selebihnya
          </motion.button>
        </Link>
      </section>

      <StyleSheet />
    </div>
  );
}

function StyleSheet() {
  return (
    <style>{`
        body {
            overflow-x: hidden;
        }

        #gallery-root {
            height: auto;
            overflow: visible;
        }

        @media (max-width: 600px) {
            .gallery {
                gap: 15px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .gallery {
                transform: none !important;
            }
            .scroll-container {
                height: auto;
            }
            .sticky-wrapper {
                position: relative;
                height: auto;
                width: 100%;
                overflow-x: auto;
                padding: 50px 0;
            }
        }
    `}</style>
  );
}
