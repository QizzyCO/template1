import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useEffect } from "react";

const videos = [
  { 
    id: 1, 
    url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/video/Pesta%20kebun%20di%20tempat%20yang%20jarang%20di%20ketahui.mp4",
    link: "https://www.instagram.com/reel/DWvhYY9lbA9/?igsh=MTkyd3cwMXFmbDVpbg=="
  },
  { 
    id: 2, 
    url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/video/SnapTik.Net_7605945389048433938.mp4",
    link: "https://vt.tiktok.com/ZS9V2PyjK/"
  },
  { 
    id: 3, 
    url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/video/SnapTik.Net_7635557345413614855.mp4",
    link: "https://vt.tiktok.com/ZS9V2K1DP/"
  },
  { 
    id: 4, 
    url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/video/SnapTik.Net_7635984977737551122.mp4",
    link: "https://vt.tiktok.com/ZS9V2FJqY/"
  },
  { 
    id: 5, 
    url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/video/betapa%20indah%20bila%20kamu%20ada%20di%20sisiku%E2%80%A6%20apalagi%20ditemani%20suasana%20hijau%20dan%20hidangan%20hangat%20di%20jast.mp4",
    link: "https://www.instagram.com/reel/DXoWWYbkrmH/?igsh=MW40bnF6cHY1d3ZqNw=="
  },
];

export default function SocialVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const textXLeft = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const textXRight = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} id="reviews" className="py-24 md:py-32 bg-mint text-secondary overflow-hidden relative">
      {/* Background Floating Text */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col justify-center items-center pointer-events-none select-none opacity-[0.05] overflow-hidden z-0">
        <motion.h2 
          style={{ x: textXLeft }}
          className="text-[12rem] md:text-[18rem] font-serif whitespace-nowrap leading-none"
        >
          JASTY GARDEN JASTY GARDEN JASTY GARDEN
        </motion.h2>
        <motion.h2 
          style={{ x: textXRight }}
          className="text-[12rem] md:text-[18rem] font-serif whitespace-nowrap leading-none italic text-secondary"
        >
          KULINER SOLO KULINER SOLO KULINER SOLO
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary/60 font-semibold uppercase tracking-[0.3em] text-xs"
          >
            Momen Penuh Rasa
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-serif mt-4 leading-[0.9] text-secondary">
            Cerita Jasty <span className="italic">di Sosial Media</span>
          </h2>
        </div>

        {/* Video Grid Wrapper */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video, index }: { video: any; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.1 });

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <motion.a
      href={video.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ 
        opacity: 0, 
        scale: 0.9,
        y: 30
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        y: 0
      }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative w-full aspect-[9/16] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-black/40 border-2 md:border-4 border-white/10 block group cursor-pointer"
    >
      <video
        ref={videoRef}
        src={video.url}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform scale-75 group-hover:scale-100 transition-transform duration-500">
           <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
