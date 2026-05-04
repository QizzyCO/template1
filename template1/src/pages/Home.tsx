import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import GallerySection from "../components/GallerySection";
import SocialVideoSection from "../components/SocialVideoSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FindUs from "../components/FindUs";
import WorkItemsSection from "../components/WorkItemsSection";
import LocationSection from "../components/LocationSection";
import { motion } from "motion/react";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Hero />
      <About />
      <Menu />
      <GallerySection />
      <SocialVideoSection />
      <TestimonialsCarousel />
      <FindUs />
      <WorkItemsSection />
      <LocationSection />
    </motion.main>
  );
}
