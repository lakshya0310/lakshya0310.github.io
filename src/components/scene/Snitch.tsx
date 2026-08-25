import { motion } from "framer-motion";

type SnitchProps = {
  position: string;
  delay?: number;
  scale?: number;
};

export default function Snitch({
  position,
  delay = 0,
  scale = 1,
}: SnitchProps) {
  // Ultra-fast wing beat to mimic a hummingbird/snitch blur
  const wingTransition = {
    duration: 0.04,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "linear",
  };

  return (
    <motion.div
      className={`absolute ${position} z-[4] pointer-events-none flex items-center justify-center`}
      style={{ scale }}
      animate={{
        y: [0, -12, 4, -5, 0],
        x: [0, 6, -4, 8, 0],
        rotate: [-3, 4, -2, 3, -3],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Left Wing */}
      <motion.div
        className="absolute right-[50%] top-[30%] w-24 h-6 origin-[right_center] z-0"
        style={{
          borderRadius: "100% 0% 100% 0%",
          background: "linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 100%)",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          rotateZ: [-45, 45],
          rotateX: [0, 60], // Adds a 3D twisting motion to the flap
        }}
        transition={wingTransition}
      >
        {/* Feather Texture lines */}
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: "inherit",
            backgroundImage: "repeating-linear-gradient(90deg, transparent 0px, transparent 4px, rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.5) 5px)"
          }}
        />
      </motion.div>

      {/* Right Wing */}
      <motion.div
        className="absolute left-[50%] top-[30%] w-24 h-6 origin-[left_center] z-0"
        style={{
          borderRadius: "0% 100% 0% 100%",
          background: "linear-gradient(-90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 100%)",
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          rotateZ: [45, -45],
          rotateX: [0, 60],
        }}
        transition={wingTransition}
      >
        {/* Feather Texture lines */}
        <div 
          className="absolute inset-0"
          style={{
            borderRadius: "inherit",
            backgroundImage: "repeating-linear-gradient(-90deg, transparent 0px, transparent 4px, rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.5) 5px)"
          }}
        />
      </motion.div>

      {/* Body - Metallic Sphere */}
      <div
        className="relative w-12 h-12 rounded-full z-10 flex items-center justify-center overflow-hidden"
        style={{
          // Realistic 3D gold gradient with a bright specular highlight
          background: "radial-gradient(circle at 35% 35%, #fff5c2 0%, #d4af37 30%, #a87b1e 75%, #4a3406 100%)",
          // Outer glow + intense inner shadows for spherical depth
          boxShadow: "0 0 25px rgba(212, 175, 55, 0.7), inset -4px -4px 10px rgba(0, 0, 0, 0.5), inset 4px 4px 10px rgba(255, 255, 255, 0.8)",
        }}
      >
        {/* --- Engraved Grooves / Details --- */}
        
        {/* Equator Ring */}
        <div className="absolute w-[140%] h-[35%] rounded-full border-t-[1.5px] border-b-[1.5px] border-[#6b4c10] opacity-50 rotate-12 mix-blend-multiply" />
        
        {/* Vertical/Curved Ring */}
        <div className="absolute w-[40%] h-[140%] rounded-full border-l-[1.5px] border-r-[1.5px] border-[#6b4c10] opacity-50 -rotate-12 mix-blend-multiply" />
        
        {/* Swirl/Circle Detailing (Top Right) */}
        <div className="absolute w-5 h-5 rounded-full border-[1.5px] border-[#6b4c10] opacity-40 top-1 right-2 mix-blend-multiply" />
        
        {/* Swirl/Circle Detailing (Bottom Left) */}
        <div className="absolute w-4 h-4 rounded-full border-[1.5px] border-[#6b4c10] opacity-40 bottom-1 left-2 mix-blend-multiply" />
        
        {/* Wing Attachment Nodes */}
        <div className="absolute w-2 h-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#8b6508] shadow-inner left-[-2px] top-[30%]" />
        <div className="absolute w-2 h-4 rounded-full bg-gradient-to-l from-[#d4af37] to-[#8b6508] shadow-inner right-[-2px] top-[30%]" />
      </div>
    </motion.div>
  );
}