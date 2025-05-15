import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Helmet } from "react-helmet";
import portfolioData from "@/lib/portfolio-data";

export default function Home() {
  useEffect(() => {
    // Set page title
    document.title = "DevfolioX - Developer Portfolio";
  }, []);

  return (
    <>
      <Helmet>
        <title>DevfolioX - Developer Portfolio</title>
        <meta name="description" content={`${portfolioData.name} - ${portfolioData.title}. ${portfolioData.bio}`} />
        <meta property="og:title" content="DevfolioX - Developer Portfolio" />
        <meta property="og:description" content={`Professional portfolio of ${portfolioData.name}, ${portfolioData.title}`} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
