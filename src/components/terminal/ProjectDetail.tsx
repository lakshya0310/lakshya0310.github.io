import { motion } from "framer-motion";
import { projects } from "../../data/projects";

type ProjectDetailProps = {
  projectId: number;
  onBack: () => void;
};

export default function ProjectDetail({
  projectId,
  onBack,
}: ProjectDetailProps) {
  const project = projects.find(
    (item) => item.id === projectId
  );

  if (!project) {
    return null;
  }

  const categoryLabel = {
    software: "Software",
    hardware: "Hardware",
    robotics: "Robotics / AI",
  };

  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 10,
    filter: "blur(4px)",
  }}
  animate={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
  className="
    mt-6
    max-h-[420px]
    overflow-y-auto
    pr-2
    font-['IM_FELL_English']
    text-[#241a14]
  "
>
      {/* Project name */}
      <div className="text-2xl tracking-wide">
        {project.name}
      </div>

      {/* Decorative divider */}
      <div className="mt-2 text-lg opacity-60">
        {"═".repeat(Math.min(project.name.length, 32))}
      </div>

      {/* Category */}
      <div className="mt-6">
        <div className="text-xs font-mono uppercase tracking-widest opacity-60">
          Category
        </div>

        <div className="mt-1 text-lg">
          {categoryLabel[project.category]}
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <div className="text-xs font-mono uppercase tracking-widest opacity-60">
          The memory
        </div>

        <div
          className="
            mt-2
            text-lg
            leading-6
            max-w-[420px]
          "
        >
          {project.description}
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-6">
        <div className="text-xs font-mono uppercase tracking-widest opacity-60">
          Instruments &amp; Magic
        </div>

        <div
          className="
            mt-2
            font-mono
            text-sm
            leading-7
          "
        >
          {project.technologies.map((technology) => (
            <div key={technology}>
              ◈ {technology}
            </div>
          ))}
        </div>
      </div>

      {/* Back */}
      <button
        onClick={onBack}
        className="
          mt-8
          font-mono
          text-sm
          opacity-70
          hover:opacity-100
          hover:underline
          cursor-pointer
          transition-opacity
        "
      >
        ← return to memories
      </button>
    </motion.div>
  );
}