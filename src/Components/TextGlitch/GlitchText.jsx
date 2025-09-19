import React, { useEffect, useState } from "react";
import "./GlitchText.css";

export default function GlitchText({ text, className = "", style }) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let timer;
    const glitchLoop = () => {
      setIsGlitching(true);
      setTimeout(() => {
        setIsGlitching(false);
        // Wait random 2–5 seconds before glitching again
        timer = setTimeout(glitchLoop, Math.random() * 3000 + 2000);
      }, 500); // glitch lasts 0.5s
    };

    glitchLoop();

    return () => clearTimeout(timer);
  }, []);

  return (
    <span
      className={`glitch ${isGlitching ? "active" : ""} ${className}`}
      style={style}
      data-text={text}
    >
      {text}
    </span>
  );
}
