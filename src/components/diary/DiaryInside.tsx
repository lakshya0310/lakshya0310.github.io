import { motion } from "framer-motion";
import DiaryPage from "./DiaryPage";

type DiaryInsideProps = {
  isOpen: boolean;
};

export default function DiaryInside({
  isOpen,
}: DiaryInsideProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        delay: 0.4,
        duration: 0.5,
      }}
      className="
        absolute
        inset-0
        rounded-[6px]
        overflow-hidden
        bg-[#efe5c8]
      "
    >
      <DiaryPage />
    </motion.div>
  );
}