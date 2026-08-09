import { motion } from "framer-motion";

type TerminalPromptProps = {
  isActive: boolean;
};

export default function TerminalPrompt({
  isActive,
}: TerminalPromptProps) {
  if (!isActive) {
    return null;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        mt-10
        font-mono
        text-lg
        text-[#241a14]
      "
    >
      <span>&gt; </span>

      <motion.span
        animate={{
          opacity: [1, 0, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        _
      </motion.span>
    </motion.div>
  );
}