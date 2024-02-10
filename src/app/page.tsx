import { Box } from "@chakra-ui/react";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Services from "./components/services";
import Footer from "./components/footer";
import HeroSection from "./components/landing-page";
import Navbar from "./components/navbar";
import DiscoverMore from "./components/discover-more";
import WatchVideos from "./components/watch-videos";

export default function Home() {
  return (
     <> 
      <Navbar />
      <HeroSection />
      <AboutMe />
      <DiscoverMore />
      <Services />
      <WatchVideos />
      <Contact />
      <Footer />
    </>
  );
}
