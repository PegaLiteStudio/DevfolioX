import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import portfolioData from "@/lib/portfolio-data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 mt-10 md:mt-0"
          >
            <h3 className="text-primary text-xl md:text-2xl font-medium mb-2">
              Hello, I'm
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              {portfolioData.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground font-bold mb-6">
              {portfolioData.title}
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              {portfolioData.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="#projects">
                  View Projects <span className="ml-2">→</span>
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex items-center mt-10 space-x-6">
              {portfolioData.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-purple-600 opacity-75 blur"></div>
              <img
                src={portfolioData.profileImage}
                alt={`${portfolioData.name}, ${portfolioData.title}`}
                className="relative w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-secondary"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
