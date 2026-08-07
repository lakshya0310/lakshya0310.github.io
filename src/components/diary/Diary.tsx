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
      <div
  className="
    absolute
    inset-0
    rounded-[6px]
    bg-black/40
  "
/>
<BackCover />

<PageBlock />

<DiaryInside isOpen={isOpen} />

<div
  className="
    absolute
    inset-0
    rounded-[6px]
    bg-black/40
    pointer-events-none
  "
/>

<FrontCover
  isOpen={isOpen}
  onClick={() => setIsOpen(true)}
/>

</motion.div>
  );
}