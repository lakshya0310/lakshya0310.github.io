import { useEffect, useState } from "react";
import parchment from "../../assets/textures/parchment.jpg";
import DiaryMessage from "./DiaryMessage";
import { DIARY_INTRO } from "../../data/diary";


type DiaryPageProps = {
  isOpen: boolean;
};
export default function DiaryPage({
  isOpen,
}: DiaryPageProps) {
  const [messageIndex, setMessageIndex] = useState(0);

useEffect(() => {
  if (!isOpen) {
    setMessageIndex(0);
    return;
  }

  const timers = [
    setTimeout(() => {
      setMessageIndex(1);
    }, 4500),

    setTimeout(() => {
      setMessageIndex(2);
    }, 7500),
    setTimeout(() => {
    setMessageIndex(3);
  }, 9500),
  setTimeout(() => {
  setMessageIndex(4);
}, 11500),
  ];

  return () => {
    timers.forEach(clearTimeout);
  };
}, [isOpen]);

  return (
    <div
      className="
        relative
        w-full
        h-full
        overflow-hidden
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
      {/* Aged edge effect */}
      <div
        className="
          absolute
          inset-0
          shadow-[inset_0_0_60px_rgba(70,45,20,0.35)]
          pointer-events-none
        "
      />
      <div
  className="
    absolute
    inset-0
    px-16
    pt-24
    max-w-[650px]
  "
>
  <DiaryMessage
  text={DIARY_INTRO.messages.first}
  isActive={isOpen && messageIndex >= 0}
  delay={0.8}
/>
{messageIndex >= 1 && (
  <DiaryMessage
    text={DIARY_INTRO.messages.second}
    isActive={true}
    delay={0}
  />
)}
{messageIndex >= 2 && (
  <DiaryMessage
    text={DIARY_INTRO.messages.third}
    isActive={true}
    delay={0}
  />
)}
{messageIndex >= 3 && (
  <DiaryMessage
    text={DIARY_INTRO.messages.fourth}
    isActive={true}
    delay={0}
  />
)}
{messageIndex >= 4 && (
  <DiaryMessage
    text={DIARY_INTRO.owner}
    isActive={true}
    delay={0}
    highlight
  />
)}
</div>
    </div>
  );
}