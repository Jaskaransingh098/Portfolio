import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);

    const handleMouseEnter = (e) => {
      if (e.target.closest("a, button, img, .hover-target")) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest("a, button, img, .hover-target")) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: "120px",
        height: "120px",
        backgroundImage: isHovering
          ? "url('/hover.png')" // hover image
          : "url('/cursor3.png')", // normal image
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        pointerEvents: "none",
        transform: "translate(-20%, -20%)",
        zIndex: 9999,
      }}
    />
  );
}
