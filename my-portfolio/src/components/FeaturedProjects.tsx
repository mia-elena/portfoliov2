import { Project } from "../types";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface FeaturedProjectsProps {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <div className="relative">
      {/* Featured Project (Larger) */}
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectCard
            project={projects[0]}
            variant="grid"
            className="max-w-4xl mx-auto"
          />
        </motion.div>
      </div>

      {/* Secondary Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.slice(1).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard
              project={project}
              variant="grid"
              className="h-full"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 