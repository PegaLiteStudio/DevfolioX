import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/portfolio-data";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-background/80 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end">
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <div className="flex space-x-3">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label={`View ${project.title} demo`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label={`View ${project.title} GitHub repository`}
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-1 rounded-full text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-background p-6">
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm">
          {project.shortDescription}
        </p>
      </div>
    </motion.div>
  );
}
