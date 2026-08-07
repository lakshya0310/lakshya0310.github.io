import Diary from "../diary/Diary";

export default function DeskScene() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#090706]">
      {/* Ambient glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(90,60,30,0.18)_0%,rgba(20,15,12,0.6)_45%,#090706_100%)]
        "
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.75)_100%)]
          pointer-events-none
        "
      />

      {/* Diary */}
      <div
  className="relative z-10 flex h-full items-center justify-center"
  style={{
    perspective: "1800px",
  }}
>
  <Diary />
</div>
    </div>
  );
}