import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useRef, useEffect } from "react";

const videos = [
  { id: 1, url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/compressed/SnapTik.Net_7585380746781674759.mp4" },
  { id: 2, url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/compressed/SnapTik.Net_7624380945071623442.mp4" },
  { id: 3, url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/compressed/SnapTik.Net_7628814583116975381.mp4" },
  { id: 4, url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/compressed/SnapTik.Net_7629350316609244437.mp4" },
  { id: 5, url: "https://raw.githubusercontent.com/QizzyCO/template1/main/iloveimg-compressed/compressed/SnapTik.Net_7630059546618236168.mp4" },
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
    <motion.div
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="relative w-full aspect-[9/16] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-black/40 border-2 md:border-4 border-white/10"
    >
      <video
        ref={videoRef}
        src={video.url}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
      />
    </motion.div>
  );
}
