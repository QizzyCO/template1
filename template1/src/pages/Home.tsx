import Hero from "../components/Hero";
import Menu from "../components/Menu";
import GallerySection from "../components/GallerySection";
import SocialVideoSection from "../components/SocialVideoSection";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import FindUs from "../components/FindUs";
import WorkItemsSection from "../components/WorkItemsSection";
import LocationSection from "../components/LocationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <GallerySection />
      <Menu />
      <SocialVideoSection />
      <TestimonialsCarousel />
      <FindUs />
      <WorkItemsSection />
      <LocationSection />
    </main>
  );
}
