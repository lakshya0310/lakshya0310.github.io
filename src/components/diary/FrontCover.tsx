import leather from "../../assets/textures/leather.jpg";
import DiarySpine from "./DiarySpine";
import { motion } from "framer-motion";

type FrontCoverProps = {
  onClick: () => void;
  isOpen: boolean;
};

export default function FrontCover({
  isOpen,
  onClick,
}: FrontCoverProps) {
  return (
    <motion.div
      onClick={() => {
    if (!isOpen) {
        onClick();
    }
}}
      animate={{
        rotateY: isOpen ? -178 : 0,
      }}
      transition={{
        duration: 1.5,
        ease: [0.25,1,0.5,1],
      }}
      className="
        absolute
        inset-0
        rounded-[6px]
        overflow-hidden
        cursor-pointer
      "
      style={{
        backgroundImage: `url(${leather})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        transformOrigin: "left center",
        transformStyle: "preserve-3d",

        backfaceVisibility: "hidden",
      }}
    >
      {/* Leather highlight */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white/5
          via-transparent
          to-black/20
        "
      />

      <DiarySpine />
    </motion.div>
  );
}