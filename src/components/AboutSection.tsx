import { motion } from "framer-motion";
import portfolioData from "@/lib/portfolio-data";
import ExperienceItem from "./ExperienceItem";

export default function AboutSection() {
  return (
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full md:w-2/5"
            >
              <div className="relative">
                <div className="absolute inset-0 -right-6 -bottom-6 border-2 border-primary rounded-xl"></div>
                <img
                    src={portfolioData.workspaceImage}
                    alt="Modern coding workspace"
                    className="rounded-xl w-full relative z-10"
                />
              </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full md:w-3/5"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                <span className="text-gradient mr-3">About Me</span>
                <div className="h-px bg-primary flex-grow max-w-xs ml-4"></div>
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                {portfolioData.longBio}
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-8">Work Experience</h3>
              <div className="relative border-l-2 border-primary ml-2">
                {portfolioData.experience.map((exp, index) => (
                    <ExperienceItem
                        key={index}
                        experience={exp}
                        delay={index * 0.1}
                        isLast={index === portfolioData.experience.length - 1}
                    />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
}
