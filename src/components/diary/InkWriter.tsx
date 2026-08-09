import { motion } from "framer-motion";

type InkWriterProps = {
  text: string;
  isActive: boolean;
  startDelay?: number;
  highlight?: boolean;
};

export default function InkWriter({
  text,
  isActive,
  startDelay = 0,
  highlight = false,
}: InkWriterProps) {
  const words = text.split(" ");

  return (
    <div
      className={`
        font-['IM_FELL_English']
        leading-[1.65]
        text-[#241a14]
        max-w-[520px]

        ${highlight ? "text-2xl tracking-wider" : "text-xl"}
      `}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{
            opacity: 0,
            filter: "blur(5px)",
            scale: 1.04,
          }}
          animate={{
            opacity: isActive ? 1 : 0,
            filter: isActive ? "blur(0px)" : "blur(5px)",
            scale: isActive ? 1 : 1.04,
          }}
          transition={{
            delay: isActive
              ? startDelay + index * 0.16
              : 0,
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </div>
  );
}