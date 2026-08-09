import { motion } from "framer-motion";
import DiaryPage from "./DiaryPage";
import DiaryTerminalPage from "./DiaryTerminalPage";
import { useEffect, useState } from "react";

type DiaryInsideProps = {
  isOpen: boolean;
};

export default function DiaryInside({
  isOpen,
}: DiaryInsideProps) {
  const [pageTurned, setPageTurned] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setPageTurned(false);
      return;
    }

    const timer = setTimeout(() => {
      setPageTurned(true);
    }, 17000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      className="
        absolute
        inset-[12px]
        rounded-[3px]
      "
      style={{
        perspective: "1800px",
      }}
    >
      {/* Page 2 — underneath */}
      <motion.div
        className="
          absolute
          inset-0
          rounded-[3px]
          overflow-hidden
          bg-[#d8c18a]
        "
        style={{
          transformStyle: "preserve-3d",
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          delay: 0.45,
          duration: 0.5,
        }}
      >
        <DiaryTerminalPage isActive={pageTurned}/>
      </motion.div>

      {/* Page 1 — turns away */}
      <motion.div
        className="
          absolute
          inset-0
          rounded-[3px]
          overflow-hidden
        "
        animate={{
          rotateY: pageTurned ? -180 : 0,
        }}
        transition={{
          duration: 1.8,
          ease: [0.65, 0, 0.35, 1],
        }}
        style={{
          transformOrigin: "left center",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          boxShadow: `
            inset 0 0 30px rgba(60, 40, 20, 0.25),
            0 0 10px rgba(0, 0, 0, 0.15)
          `,
        }}
      >
        <DiaryPage isOpen={isOpen} />
      </motion.div>
    </div>
  );
}