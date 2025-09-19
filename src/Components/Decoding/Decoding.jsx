import React, { useEffect, useState } from "react";

const LETTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const DecodingText = ({ text, speed, className="", style }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < frame) {
              return letter; // already decoded
            }
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("")
      );

      frame++;
      if (frame > text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} style={style}>{displayedText}</span>
  );
};

export default DecodingText;
