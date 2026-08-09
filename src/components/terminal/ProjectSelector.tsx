import { motion } from "framer-motion";
import { projects } from "../../data/projects";

type ProjectSelectorProps = {
  onSelect: (id: number) => void;
};

export default function ProjectSelector({
  onSelect,
}: ProjectSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="
        mt-5
        font-mono
        text-sm
        leading-7
        text-[#241a14]
      "
    >
      <div>
        The diary remembers eight creations...
      </div>

      <div className="mt-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => onSelect(project.id)}
            className="
              block
              text-left
              hover:underline
              cursor-pointer
            "
          >
            [{project.id}] {project.name}
          </button>
        ))}
      </div>

      <div className="mt-4">
  Which memory would you like to open?
</div>

<div className="mt-1 opacity-70">
  Enter a number, or choose one above.
</div>
    </motion.div>
  );
}