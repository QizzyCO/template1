import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const baseUrl = "https://raw.githubusercontent.com/QizzyCO/template1/refs/heads/main/iloveimg-compressed/";
const workItems = [
  { id: 1, title: "Kopi Pilihan", image: `${baseUrl}20260502_162302.jpg.jpeg` },
  { id: 2, title: "Suasana Taman", image: `${baseUrl}20260502_162316.jpg.jpeg` },
  { id: 3, title: "Rasa Otentik", image: `${baseUrl}20260502_162324.jpg.jpeg` },
  { id: 4, title: "Momen Hangat", image: `${baseUrl}20260502_162407.jpg.jpeg` },
  { id: 5, title: "Kelezatan Seni", image: `${baseUrl}20260502_162441.jpg.jpeg` },
];

export default function WorkItemsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".work-item").forEach((item) => {
        const img = item.querySelector(".work-item-img");
        const nameH1 = item.querySelector(".work-item-name h1");

        if (!nameH1 || !img) return;

        // Manual text splitting since SplitText is a paid plugin not available in this environment
        const text = nameH1.textContent || "";
        nameH1.textContent = "";
        const chars: HTMLElement[] = [];
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.transform = "translateY(125%)";
          nameH1.appendChild(span);
          chars.push(span);
        });

        // Optimization: Use a single timeline for characters instead of multiple ScrollTriggers per char
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top center", // Start when item reaches middle of screen
            end: "center top",   // End when center reaches top
            scrub: 1,
            // markers: false
          }
        });

        tl.fromTo(
          chars,
          { y: "125%" },
          { 
            y: "0%", 
            stagger: 0.05, 
            ease: "power2.out",
            force3D: true 
          }
        );

        // Clip path animations with performance optimizations
        ScrollTrigger.create({
          trigger: item,
          start: "top bottom",
          end: "top top",
          scrub: 0.5,
          animation: gsap.fromTo(
            img,
            {
              clipPath: "polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
              ease: "none",
              force3D: true
            }
          ),
        });

        ScrollTrigger.create({
          trigger: item,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 0.5,
          animation: gsap.fromTo(
            img,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            },
            {
              clipPath: "polygon(0% 0%, 100% 0%, 75% 60%, 25% 75%)",
              ease: "none",
              force3D: true
            }
          ),
        });
      });

      // Refresh ScrollTrigger after a short delay to ensure layout is settled
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="work-items-wrapper hidden md:block overflow-hidden bg-[#fcfcfc]">
        <style>{`
            @import url("https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap");
            
            .work-items-wrapper {
                font-family: "UnifrakturMaguntia", cursive;
                color: #141414;
            }

            .work-items-wrapper h1 {
                text-align: center;
                font-size: 8rem;
                font-weight: 550;
                line-height: 1;
            }

            .work-items-wrapper .hero,
            .work-items-wrapper .outro {
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 2rem;
            }

            .work-items-wrapper .work-item {
                position: relative;
                width: 100vw;
                height: 150vh;
                overflow: hidden;
            }

            .work-items-wrapper .work-item-img {
                position: absolute;
                width: 100%;
                height: 100%;
                clip-path: polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%);
                will-change: clip-path;
            }

            .work-items-wrapper .work-item-name {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;
                z-index: 10;
                pointer-events: none;
            }

            .work-items-wrapper .work-item-name h1 {
                color: #fff;
                white-space: nowrap;
            }

            @media (max-width: 1000px) {
                .work-items-wrapper h1,
                .work-items-wrapper .work-item-name h1 {
                    font-size: 3.5rem;
                }
            }
        `}</style>

      <section className="hero">
         <h1>Kisah Perjalanan Kami</h1>
      </section>

      {workItems.map((item) => (
        <section key={item.id} className="work-item">
            <div className="work-item-img">
                <img src={item.image} alt={item.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="work-item-name">
                <h1>{item.title}</h1>
            </div>
        </section>
      ))}

      <section className="outro">
         <h1>Sampai Jumpa di Jasty Garden</h1>
      </section>
    </div>
  );
}
