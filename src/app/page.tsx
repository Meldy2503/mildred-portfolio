import { Box } from "@chakra-ui/react";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import ContentCategories from "./components/content-categories";
import Footer from "./components/footer";
import HeroSection from "./components/landing-page";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <Box w="95%" maxW={'1200px'} m={' 1rem auto'}>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ContentCategories />
      <Contact />
      <Footer />
    </Box>
  );
}
