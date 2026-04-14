
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Experience from "./components/Experience";
import RestaurantSection from "./components/RestaurantSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Experience />
      <RestaurantSection />
      <Footer />
    </main>
  );
}