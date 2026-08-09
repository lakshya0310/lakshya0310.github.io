import { motion } from "framer-motion";

type CandleProps = {
  position?: string;
};

export default function Candle({
  position = "left-[8%] bottom-[10%]",
}: CandleProps) {
  return (
    <div
      className={`
        absolute
        ${position}
        z-[6]
        pointer-events-none
        w-20
        flex
        flex-col
        items-center
      `}
    >
      {/* Flame glow */}
      <motion.div
        className="
          absolute
          top-[-58px]
          left-1/2
          -translate-x-1/2
          w-20
          h-20
          rounded-full
          bg-[#e8ad4d]/20
          blur-[25px]
        "
        animate={{
          scale: [1, 1.15, 0.9, 1.08, 1],
          opacity: [0.35, 0.55, 0.3, 0.5, 0.35],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Candle unit */}
      <div className="relative flex flex-col items-center">

        {/* Flame */}
        <motion.div
          className="
            absolute
            top-[-42px]
            left-1/2
            -translate-x-1/2
            w-5
            h-9
            rounded-[50%_50%_45%_45%]
            bg-[#f5c76b]
            blur-[1px]
            origin-bottom
            z-[3]
          "
          animate={{
            scaleX: [1, 0.85, 1.08, 0.92, 1],
            scaleY: [1, 1.12, 0.9, 1.08, 1],
            rotate: [-2, 3, -4, 2, -2],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Inner flame */}
        <motion.div
          className="
            absolute
            top-[-30px]
            left-1/2
            -translate-x-1/2
            w-2
            h-5
            rounded-full
            bg-[#fff0bd]
            z-[4]
          "
          animate={{
            scale: [1, 0.8, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Wick */}
        <div
          className="
            absolute
            top-[-5px]
            left-1/2
            -translate-x-1/2
            w-[2px]
            h-[5px]
            bg-[#241a14]
            z-[2]
          "
        />

        {/* Candle */}
        <div
          className="
            relative
            w-10
            h-28
            rounded-t-[4px]
            rounded-b-[6px]
            bg-[#d8c59b]
            shadow-[inset_4px_0_8px_rgba(0,0,0,0.25),inset_-4px_0_8px_rgba(255,255,255,0.15)]
          "
        >
          {/* Wax drip - left */}
          <div
            className="
              absolute
              top-0
              left-2
              w-2
              h-8
              rounded-b-full
              bg-[#c5ae80]
            "
          />

          {/* Wax drip - right */}
          <div
            className="
              absolute
              top-0
              right-2
              w-1.5
              h-5
              rounded-b-full
              bg-[#c5ae80]
            "
          />
        </div>

        {/* Brass holder */}
        <div
          className="
            w-20
            h-5
            rounded-full
            bg-[#8a6938]
            shadow-[0_5px_12px_rgba(0,0,0,0.5)]
          "
        />

        {/* Holder base */}
        <div
          className="
            w-12
            h-4
            -mt-1
            rounded-b-full
            bg-[#6d502c]
          "
        />
      </div>
    </div>
  );
}