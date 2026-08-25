import { motion } from "framer-motion";
import Diary from "../diary/Diary";
import Candle from "./Candle";
import maraudersMap from "../../assets/textures/marauders-map.jpg";
import DustParticles from "./DustParticles";
import Candlelight from "./Candlelight";
import Snitch from "./Snitch";

export default function DeskScene() {
  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
      "
    >
      {/* Marauder's Map */}
      <motion.div
        className="
          absolute
          inset-[-3%]
          pointer-events-none
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(45, 32, 20, 0.18),
              rgba(45, 32, 20, 0.18)
            ),
            url(${maraudersMap})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          scale: [1, 1.025, 1],
          x: [0, -8, 0],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Living ink — upper left */}
      <motion.div
        className="
          absolute
          w-[420px]
          h-[300px]
          rounded-full
          pointer-events-none
          blur-[80px]
          bg-[#513522]/20
        "
        style={{
          top: "5%",
          left: "5%",
        }}
        animate={{
          x: [0, 80, 30, -20, 0],
          y: [0, 30, 70, 20, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
          opacity: [0.15, 0.25, 0.12, 0.22, 0.15],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Living ink — upper right */}
      <motion.div
        className="
          absolute
          w-[350px]
          h-[280px]
          rounded-full
          pointer-events-none
          blur-[90px]
          bg-[#4a3020]/20
        "
        style={{
          top: "10%",
          right: "5%",
        }}
        animate={{
          x: [0, -60, -20, 50, 0],
          y: [0, 60, 20, -30, 0],
          scale: [1, 0.85, 1.15, 0.95, 1],
          opacity: [0.12, 0.22, 0.14, 0.25, 0.12],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Living ink — lower left */}
      <motion.div
        className="
          absolute
          w-[500px]
          h-[320px]
          rounded-full
          pointer-events-none
          blur-[100px]
          bg-[#60432d]/20
        "
        style={{
          bottom: "2%",
          left: "2%",
        }}
        animate={{
          x: [0, 100, 40, -40, 0],
          y: [0, -40, -80, -20, 0],
          scale: [1, 1.1, 0.9, 1.15, 1],
          opacity: [0.1, 0.2, 0.12, 0.18, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Living ink — lower right */}
      <motion.div
        className="
          absolute
          w-[380px]
          h-[300px]
          rounded-full
          pointer-events-none
          blur-[90px]
          bg-[#4b3424]/20
        "
        style={{
          bottom: "5%",
          right: "3%",
        }}
        animate={{
          x: [0, -80, -30, 50, 0],
          y: [0, -50, 30, 70, 0],
          scale: [1, 0.9, 1.2, 0.95, 1],
          opacity: [0.12, 0.2, 0.1, 0.22, 0.12],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Very subtle overall ink breathing */}
      <motion.div
        className="
          absolute
          inset-0
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(75, 48, 30, 0.08), transparent 55%)",
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark atmospheric overlay */}
      <div
        className="
          absolute
          inset-0
          bg-black/20
          pointer-events-none
        "
      />

      {/* Central glow */}
      <motion.div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_45%)]
        "
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Warm map edge fade */}
<div
  className="
    absolute
    inset-0
    pointer-events-none
    bg-[radial-gradient(circle_at_center,transparent_55%,rgba(91,65,38,0.22)_100%)]
  "
/>
      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle,transparent_45%,rgba(0,0,0,0.65)_100%)]
        "
      />
      {/* Dust */}
<DustParticles />

{/* Candlelight */}
<Candlelight />

<Candle position="left-[8%] bottom-[10%]" />
{/* Second candle */}
<Candle position="right-[8%] bottom-[14%]" />
{/* Flying Snitches */}
<Snitch
  position="top-[12%] left-[12%]"
  delay={0}
  scale={0.9}
/>

<Snitch
  position="top-[14%] right-[12%]"
  delay={2.2}
  scale={0.9}
/>

{/* Diary */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          items-center
          justify-center
        "
        style={{
          perspective: "1800px",
        }}
      >
        <Diary />
      </div>
    </div>
  );
}