import { motion } from "framer-motion";

export default function Candlelight() {
  return (
    <>
      {/* Left candle glow */}
      <motion.div
        className="
          absolute
          pointer-events-none
          z-[5]
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#e6b86a]/10
          blur-[100px]
        "
        style={{
          left: "3%",
          bottom: "2%",
        }}
        animate={{
          scale: [1, 1.06, 0.96, 1.04, 1],
          opacity: [0.28, 0.42, 0.25, 0.38, 0.28],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right candle glow */}
      <motion.div
        className="
          absolute
          pointer-events-none
          z-[5]
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#e6b86a]/10
          blur-[100px]
        "
        style={{
          right: "3%",
          bottom: "6%",
        }}
        animate={{
          scale: [1, 0.97, 1.06, 0.95, 1],
          opacity: [0.25, 0.38, 0.28, 0.42, 0.25],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Very subtle warm light around the diary */}
      <motion.div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(ellipse_at_center,rgba(230,184,106,0.06),transparent_48%)]
        "
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}