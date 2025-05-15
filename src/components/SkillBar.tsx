import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { Skill } from "@/lib/portfolio-data";

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

export default function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      setWidth(skill.level);
    }
  }, [isInView, skill.level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className={cn(
        "bg-secondary p-5 rounded-xl border border-border hover:border-primary transition-all duration-300"
      )}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <skill.icon className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-medium">{skill.name}</h3>
        </div>
        <span className="text-sm text-primary font-code">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
        ></motion.div>
      </div>
    </motion.div>
  );
}
