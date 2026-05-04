import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus } from "lucide-react";
import { useState } from "react";

const baseUrl = "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/";
const images = [
  "20260502_154048.jpg.jpeg",
  "20260502_161632.jpg.jpeg",
  "20260502_161636.jpg.jpeg",
  "20260502_161701.jpg.jpeg",
  "20260502_161712.jpg.jpeg",
  "20260502_161738.jpg.jpeg",
  "20260502_161745.jpg.jpeg",
  "20260502_161914.jpg.jpeg",
  "20260502_161924.jpg.jpeg",
  "20260502_162024.jpg.jpeg",
  "20260502_162047.jpg.jpeg",
  "20260502_162203.jpg.jpeg",
  "20260502_162316.jpg.jpeg",
  "20260502_162347.jpg.jpeg",
  "20260502_162431.jpg.jpeg",
  "20260502_162707.jpg.jpeg",
  "20260502_161904.jpg.jpeg",
  "20260502_161944.jpg.jpeg",
  "20260502_162211.jpg.jpeg",
  "20260502_162253.jpg.jpeg",
  "20260502_162302.jpg.jpeg",
  "20260502_162306.jpg.jpeg",
  "20260502_162324.jpg.jpeg",
  "20260502_162407.jpg.jpeg",
  "20260502_162441.jpg.jpeg",
  "20260502_162506.jpg.jpeg",
  "20260502_162528.jpg.jpeg",
  "20260502_162615.jpg.jpeg",
  "p/20260503_170534.jpg.jpeg",
  "p/20260503_170543.jpg.jpeg",
  "p/20260503_170611.jpg.jpeg",
  "p/WhatsApp Image 2026-05-03 at 17.06.29.jpeg",
  "p/WhatsApp Image 2026-05-03 at 17.06.30 (1).jpeg",
  "p/WhatsApp Image 2026-05-03 at 17.06.30.jpeg"
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-mint pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Kembali ke Beranda</span>
        </Link>

        <div className="text-center mb-16">
          <span className="text-accent font-semibold uppercase tracking-[0.3em] text-sm">
            Arsip Visual
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mt-4 text-white">
            Galeri <span className="italic text-accent">Lengkap</span>
          </h1>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(encodeURI(`${baseUrl}${img}`))}
              className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-xl"
            >
              <img 
                src={encodeURI(`${baseUrl}${img}`)} 
                alt={`Jasty Garden ${index + 1}`}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Plus className="text-white scale-50 group-hover:scale-100 transition-transform" size={48} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
          />
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Plus size={48} className="rotate-45" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
