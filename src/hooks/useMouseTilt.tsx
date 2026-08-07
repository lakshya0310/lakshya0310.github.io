import { useState } from "react";

export default function useMouseTilt() {
  const [rotation, setRotation] = useState({
    rotateX: 0,
    rotateY: 0,
  });

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>,
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;

    const rotateX = -((y / rect.height) - 0.5) * 8;

    setRotation({
      rotateX,
      rotateY,
    });
  }

  function handleLeave() {
    setRotation({
      rotateX: 0,
      rotateY: 0,
    });
  }

  return {
    rotation,
    handleMove,
    handleLeave,
  };
}