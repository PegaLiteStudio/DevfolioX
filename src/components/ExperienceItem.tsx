import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import type { Experience } from "@/lib/portfolio-data";

interface ExperienceItemProps {
  experience: Experience;
  delay?: number;
}

export default function ExperienceItem({ experience, delay = 0 }: ExperienceItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="border-l-2 border-primary pl-6 relative"
    >
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
      <h4 className="text-lg font-medium">{experience.title}</h4>
      <p className="text-primary mb-1">{experience.company}</p>
      <p className="text-sm text-muted-foreground mb-2">{experience.period}</p>
      <p className="text-muted-foreground">{experience.description}</p>
    </motion.div>
  );
}
