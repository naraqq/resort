import Navigation from "./components/Navigation";
import About from "./components/About";
import AboutCamp from "./components/AboutCamp";
import Carousel from "./components/Carousel";
import CarouselFood from "./components/CarouselFood";
import CarouselServices from "./components/CarouselService";
import Booking from "./components/Booking";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="h-screen relative transition-all duration-500 bg-[#191619]">
      <Navigation />
      <Welcome />
      <About />
      <AboutCamp />
      <Carousel />
      <CarouselFood />
      <CarouselServices />
      <Booking />
      <Contact />
    </main>
  );
}
