import { Box } from "@chakra-ui/react";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import ContentCategories from "./components/content-categories";
import Footer from "./components/footer";
import HeroSection from "./components/landing-page";
import Navbar from "./components/navbar";
import Subscribe from "./components/subscribe";

export default function Home() {
  return (
     <> 
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Subscribe />
      <ContentCategories />
      <Contact />
      <Footer />
    </>
  );
}
