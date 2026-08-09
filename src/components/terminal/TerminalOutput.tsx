import { motion } from "framer-motion";

type TerminalOutputProps = {
  lines: string[];
};

export default function TerminalOutput({
  lines,
}: TerminalOutputProps) {
  return (
    <>
      {lines.map((line, index) => {
        const isLink =
          line.trim().startsWith("http://") ||
          line.trim().startsWith("https://");

        return (
          <motion.div
            key={`${line}-${index}`}
            initial={{
              opacity: 0,
              filter: "blur(4px)",
              y: 4,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              delay: index * 0.18,
              duration: 0.45,
              ease: "easeOut",
            }}
            className="
              font-['IM_FELL_English']
              text-[#241a14]
            "
          >
            {line ? (
              isLink ? (
                <a
                  href={line.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    underline
                    opacity-80
                    hover:opacity-100
                    transition-opacity
                    cursor-pointer
                  "
                >
                  {line}
                </a>
              ) : (
                line
              )
            ) : (
              "\u00A0"
            )}
          </motion.div>
        );
      })}
    </>
  );
}