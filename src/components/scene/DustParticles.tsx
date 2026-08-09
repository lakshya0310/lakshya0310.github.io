import { motion } from "framer-motion";

const particles = [
  { left: "8%", top: "18%", size: 2, delay: 0, duration: 9 },
  { left: "18%", top: "72%", size: 3, delay: 2, duration: 12 },
  { left: "27%", top: "35%", size: 2, delay: 4, duration: 10 },
  { left: "38%", top: "82%", size: 2, delay: 1, duration: 11 },
  { left: "52%", top: "15%", size: 3, delay: 5, duration: 13 },
  { left: "64%", top: "68%", size: 2, delay: 3, duration: 10 },
  { left: "73%", top: "28%", size: 2, delay: 6, duration: 12 },
  { left: "84%", top: "78%", size: 3, delay: 2, duration: 14 },
  { left: "92%", top: "42%", size: 2, delay: 7, duration: 11 },
  { left: "12%", top: "48%", size: 2, delay: 4, duration: 13 },
  { left: "45%", top: "55%", size: 2, delay: 8, duration: 12 },
  { left: "78%", top: "58%", size: 2, delay: 1, duration: 10 },
];

export default function DustParticles() {
  return (
    <div
      className="
        absolute
        inset-0
        overflow-hidden
        pointer-events-none
        z-[4]
      "
    >
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="
            absolute
            rounded-full
            bg-[#f1dfb5]
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: [0, 0.35, 0],
            y: [20, -50, -100],
            x: [0, 10, -5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}