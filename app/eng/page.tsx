
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Experience from "../components/Experience";
import RestaurantSection from "../components/RestaurantSection";
import Footer from "../components/Footer";

export const metadata = {
  title: "Oxygen Village — Atlas, Morocco",
  description: "A sanctuary where innovation, luxury and nature unite. Nestled at 1,500m altitude in the Atlas mountains, Morocco.",
};

export default function HomeEn() {
  return (
    <main>
      <HeroSection lang="en" />
      <AboutSection lang="en" />
      <Experience lang="en" />
      <RestaurantSection lang="en" />
      <Footer lang="en" />
    </main>
  );
}
