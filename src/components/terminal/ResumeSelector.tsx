import { motion } from "framer-motion";

type ResumeSelectorProps = {
  onSelect: (type: "software" | "hardware") => void;
};

export default function ResumeSelector({
  onSelect,
}: ResumeSelectorProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        mt-5
        font-mono
        text-sm
        leading-7
        text-[#241a14]
      "
    >
      <div>
        The diary knows you seek his complete record...
      </div>

      <div className="mt-5">
        <button
          onClick={() => onSelect("software")}
          className="
            block
            text-left
            hover:underline
            cursor-pointer
          "
        >
          [1] Software / ML Resume
        </button>

        <button
          onClick={() => onSelect("hardware")}
          className="
            block
            text-left
            hover:underline
            cursor-pointer
          "
        >
          [2] Hardware / Electronics Resume
        </button>
      </div>

      <div className="mt-5 opacity-70">
        Enter 1 or 2, or choose a record above.
      </div>
    </motion.div>
  );
}