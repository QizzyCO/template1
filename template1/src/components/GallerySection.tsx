import { useState } from "react";
import { Plus } from "lucide-react";
import { GALLERY_BASE_URL as baseUrl, GALLERY_IMAGES as images } from "../constants";

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
              className="relative group cursor-pointer rounded-3xl overflow-hidden shadow-xl mb-6 break-inside-avoid transform-gpu"
            >
              <img 
                src={encodeURI(`${baseUrl}${img}`)} 
                alt={`Suasana tamanasri dan area makan Jasty Garden Solo - Image ${index + 1}`}
                className="w-full h-auto block transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                fetchPriority="auto"
                decoding="async"
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

