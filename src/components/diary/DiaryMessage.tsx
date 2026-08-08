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
      }}
      animate={{
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        delay,
        duration: 0.1,
      }}
      className={`
        mb-10
        ${highlight ? "text-3xl" : ""}
      `}
    >
      <InkWriter
        text={text}
        isActive={isActive}
        startDelay={delay}
      />
    </motion.div>
  );
}