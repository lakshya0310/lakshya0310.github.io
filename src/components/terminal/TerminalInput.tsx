import { useEffect, useRef, useState } from "react";

type TerminalInputProps = {
  isActive: boolean;
  onSubmit: (command: string) => void;
};

export default function TerminalInput({
  isActive,
  onSubmit,
}: TerminalInputProps) {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [isActive]);

  if (!isActive) {
    return null;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const command = value.trim();

    if (!command) {
      return;
    }

    onSubmit(command);
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        mt-10
        flex
        items-center
        font-mono
        text-lg
        text-[#241a14]
      "
    >
      <span>&gt;&nbsp;</span>

      <input
        ref={inputRef}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="
          w-full
          bg-transparent
          border-none
          outline-none
          font-['IM_FELL_English']
          text-[#241a14]
          caret-[#241a14]
        "
        autoComplete="off"
        spellCheck={false}
        aria-label="Diary command"
      />
    </form>
  );
}