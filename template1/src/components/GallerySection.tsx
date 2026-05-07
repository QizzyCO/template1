import { useState } from "react";
import { Plus } from "lucide-react";

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

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div id="gallery" className="bg-[#164e32] py-24 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-white/60 font-semibold uppercase tracking-[0.3em] text-sm">
            Galeri Visual
          </span>
          <h2 className="text-5xl md:text-7xl font-serif mt-4 text-white">
            Sudut <span className="italic">Favorit</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(encodeURI(`${baseUrl}${img}`))}
              className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-xl bg-black/20 mb-6 break-inside-avoid transform-gpu aspect-[4/3]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-8 h-8 border-2 border-white/10 border-t-white/30 rounded-full animate-spin" />
              </div>
              <img 
                src={encodeURI(`${baseUrl}${img}`)} 
                alt={`Suasana tamanasri dan area makan Jasty Garden Solo - Image ${index + 1}`}
                className="w-full h-full object-cover block transform transition-all duration-1000 group-hover:scale-105 relative z-10 opacity-0"
                loading={index < 8 ? "eager" : "lazy"}
                fetchPriority={index < 4 ? "high" : "auto"}
                decoding="async"
                onLoad={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.classList.remove('opacity-0');
                  target.classList.add('opacity-100');
                  target.parentElement?.querySelector('.animate-spin')?.parentElement?.classList.add('hidden');
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                <Plus className="text-white scale-50 group-hover:scale-100 transition-transform" size={48} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox - Simple implementation to reduce weight */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300"
            alt="Gallery view"
          />
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Plus size={48} className="rotate-45" />
          </button>
        </div>
      )}
    </div>
  );
}

