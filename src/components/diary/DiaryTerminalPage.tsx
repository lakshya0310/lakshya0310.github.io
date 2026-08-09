import { useEffect, useState } from "react";
import parchment from "../../assets/textures/parchment.jpg";
import DiaryMessage from "./DiaryMessage";
import Terminal from "../terminal/Terminal";

type DiaryTerminalPageProps = {
  isActive: boolean;
};

export default function DiaryTerminalPage({
  isActive,
}: DiaryTerminalPageProps) {
  const [showPrompt, setShowPrompt] = useState(false);
  useEffect(() => {
  if (!isActive) {
    setShowPrompt(false);
    return;
  }

  const timer = setTimeout(() => {
    setShowPrompt(true);
  }, 5500);

  return () => clearTimeout(timer);
}, [isActive]);
  return (
    <div
      className="
        relative
        w-full
        h-full
        overflow-hidden
        px-16
        pt-16
      "
      style={{
        backgroundImage: `url(${parchment})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Warm parchment tint */}
      <div
        className="
          absolute
          inset-0
          bg-[#c9b27a]/20
          pointer-events-none
        "
      />

      {/* Aged page edges */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          shadow-[inset_0_0_60px_rgba(70,45,20,0.35)]
        "
      />

      {/* Page 2 writing */}
      <div
        className="
          relative
          z-10
          max-w-[520px]
        "
      >
        <DiaryMessage
          text="I know your name."
          isActive={isActive}
          delay={0.8}
        />

        {isActive && (
          <DiaryMessage
            text="What would you like to know?"
            isActive={true}
            delay={2.8}
          />
        )}
        <Terminal isActive={showPrompt} />
      </div>
    </div>
  );
}