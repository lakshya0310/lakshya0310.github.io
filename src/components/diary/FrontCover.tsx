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
  rotateY: isOpen ? -165 : 0,
  boxShadow: isOpen
    ? "20px 10px 35px rgba(0,0,0,0.45)"
    : "0px 0px 0px rgba(0,0,0,0)",
}}
transition={{
  rotateY: {
    duration: 1.4,
    ease: [0.22, 0.61, 0.36, 1],
  },
  boxShadow: {
    duration: 0.8,
  },
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
      {/* Dark leather overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/40
          pointer-events-none
        "
      />

      {/* Leather highlight */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-white/5
          via-transparent
          to-black/20
          pointer-events-none
        "
      />
      {/* Subtle leather sheen */}
<motion.div
  className="
    absolute
    inset-y-0
    -left-[60%]
    w-[35%]

    bg-gradient-to-r
    from-transparent
    via-white/[0.07]
    to-transparent

    skew-x-[-15deg]
    pointer-events-none
  "
  animate={{
    x: ["0%", "420%"],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    repeatDelay: 10,
    ease: "easeInOut",
  }}
/>
      <DiarySpine />
      {/* Brass corner protectors */}
<div
  className="
    absolute
    top-0
    left-0
    w-12
    h-12
    border-t-[5px]
    border-l-[5px]
    border-[#9a7338]
    rounded-tl-[6px]
    opacity-90
  "
/>

<div
  className="
    absolute
    top-0
    right-0
    w-12
    h-12
    border-t-[5px]
    border-r-[5px]
    border-[#9a7338]
    rounded-tr-[6px]
    opacity-90
  "
/>

<div
  className="
    absolute
    bottom-0
    left-0
    w-12
    h-12
    border-b-[5px]
    border-l-[5px]
    border-[#9a7338]
    rounded-bl-[6px]
    opacity-90
  "
/>

<div
  className="
    absolute
    bottom-0
    right-0
    w-12
    h-12
    border-b-[5px]
    border-r-[5px]
    border-[#9a7338]
    rounded-br-[6px]
    opacity-90
  "
/>
{/* Center brass seal */}
<div
  className="
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2

    w-20
    h-20

    rounded-full

    bg-gradient-to-br
    from-[#c49a52]
    via-[#8b642f]
    to-[#5c401e]

    border-[3px]
    border-[#d0a85e]

    shadow-[inset_2px_2px_5px_rgba(255,255,255,0.25),inset_-3px_-3px_6px_rgba(0,0,0,0.45),0_5px_12px_rgba(0,0,0,0.45)]

    flex
    items-center
    justify-center

    opacity-95
  "
>
  <div
  className="
    absolute
    top-2
    left-3
    w-8
    h-3
    rounded-full
    bg-white/15
    blur-[2px]
    pointer-events-none
  "
/>
  <div
    className="
      w-14
      h-14
      rounded-full
      border-2
      border-[#5c401e]/70

      flex
      items-center
      justify-center
    "
  >
    <div
  className="
    w-8
    h-8
    rounded-full
    border
    border-[#4a321b]/60

    flex
    items-center
    justify-center

    shadow-[inset_1px_1px_2px_rgba(255,255,255,0.15)]
  "
>
  <span
    className="
      font-['IM_FELL_English']
      text-xl
      text-[#4a321b]
      opacity-75
    "
  >
    R
  </span>
</div>
  </div>
</div>
    </motion.div>

  );
}