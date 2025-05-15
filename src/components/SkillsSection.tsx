import { motion } from "framer-motion";
import portfolioData from "@/lib/portfolio-data";
import SkillBar from "./SkillBar";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="absolute -right-64 -top-64 w-96 h-96 bg-primary rounded-full opacity-5"></div>
      <div className="absolute -left-64 -bottom-64 w-96 h-96 bg-primary rounded-full opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-gradient">Skills & Expertise</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {portfolioData.skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mt-12"
        >
          {portfolioData.additionalSkills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="px-4 py-2 bg-secondary rounded-full text-sm border border-border"
            >
              {skill}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
