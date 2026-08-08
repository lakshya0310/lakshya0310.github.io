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
        delay: 0.45,
        duration: 0.6,
      }}
      className="
  absolute
  inset-[12px]
  rounded-[3px]
  overflow-hidden
  bg-[#e8dcc0]
"
style={{
  boxShadow: `
    inset 0 0 30px rgba(60, 40, 20, 0.25),
    0 0 10px rgba(0, 0, 0, 0.15)
  `,
}}
    >
      <DiaryPage isOpen={isOpen} />
    </motion.div>
  );
}