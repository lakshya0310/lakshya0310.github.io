import { motion } from "framer-motion";
import InkWriter from "./InkWriter";

type DiaryMessageProps = {
  text: string;
  isActive: boolean;
  delay?: number;
  highlight?: boolean;
};

export default function DiaryMessage({
  text,
  isActive,
  delay = 0,
  highlight = false,
}: DiaryMessageProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 8,
      }}
      transition={{
        delay,
        duration: 0.4,
        ease: "easeOut",
      }}
      className={`
        mb-6
        ${highlight ? "text-3xl tracking-wider" : ""}
      `}
    >
      <InkWriter
        text={text}
        isActive={isActive}
        startDelay={delay}
        highlight={highlight}
      />
    </motion.div>
  );
}