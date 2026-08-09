import { motion } from "framer-motion";
import FrontCover from "./FrontCover";
import PageBlock from "./PageBlock";
import useMouseTilt from "../../hooks/useMouseTilt";
import {useState} from "react";
import DiaryInside from "./DiaryInside";
import BackCover from "./BackCover";

export default function Diary() {
const [isOpen, setIsOpen] = useState(false);

  const {
    rotation,
    handleMove,
    handleLeave,
  } = useMouseTilt();
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 120,
        scale: 0.92,
      }}
      animate={{
  opacity: 1,
  y: 0,
  scale: 1,

  rotateX: rotation.rotateX,
  rotateY: rotation.rotateY,
}}
      transition={{
        duration: 1.4,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
   transformStyle: "preserve-3d",
}}
      className="
        relative
        w-[500px]
        h-[690px]

        rounded-[6px]

        border
        border-[#2d2018]

        shadow-[0_60px_120px_rgba(0,0,0,0.75)]

        transition-all
        duration-500

        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-[0_50px_120px_rgba(0,0,0,0.8)]
      "
    >
      {/* Diary ambient glow */}
<motion.div
  className="
    absolute
    -inset-8
    rounded-[20px]
    bg-[#d6b477]/10
    blur-[35px]
    pointer-events-none
    -z-20
  "
  animate={{
    opacity: [0.25, 0.4, 0.25],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
      <div
  className="
    absolute
    inset-0
    rounded-[6px]
    bg-black/40
  "
/>
<BackCover />



<DiaryInside
  isOpen={isOpen}
/>

<div
  className="
    absolute
    inset-0
    rounded-[6px]
    bg-black/40
    pointer-events-none
  "
/>
<motion.div
  initial={{
    opacity: 0,
  }}
  animate={{
    opacity: isOpen ? 1 : 0,
  }}
  transition={{
    delay: isOpen ? 0.45 : 0,
    duration: 0.7,
  }}
  className="
    absolute
    inset-0
    pointer-events-none
  "
>
  <PageBlock />
</motion.div>

<FrontCover
  isOpen={isOpen}
  onClick={() => setIsOpen(true)}
/>

</motion.div>
  );
}