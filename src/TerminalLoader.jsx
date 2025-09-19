import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWindows, FaFolder, FaFileAlt, FaImage } from "react-icons/fa";

export default function TerminalLoader({ onFinish }) {
  const [lines, setLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  const commands = [
    "Booting system...",
    "Checking dependencies...",
    "Installing modules...",
    "Configuring environment...",
    "Finalizing setup...",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setLines((prev) => [...prev, `$ ${commands[i]}`]);

        // fake progress bar
        let percent = 0;
        const progressInterval = setInterval(() => {
          percent += Math.floor(Math.random() * 15) + 5;
          if (percent >= 100) {
            percent = 100;
            clearInterval(progressInterval);
          }
          setProgress(percent);
        }, 300);

        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setExiting(true), 0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // floating icons
  const icons = [
    <FaWindows className="text-blue-400 text-5xl" />,
    <FaFolder className="text-yellow-400 text-4xl" />,
    <FaFileAlt className="text-gray-200 text-3xl" />,
    <FaImage className="text-green-400 text-4xl" />,
  ];

  // each icon will have position + velocity
  const [positions, setPositions] = useState(
    icons.map(() => ({
      x: Math.random() * window.innerWidth * 0.8,
      y: Math.random() * window.innerHeight * 0.8,
      dx: (Math.random() - 0.5) * 2.5,
      dy: (Math.random() - 0.5) * 2.5,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((p) => {
          let { x, y, dx, dy } = p;
          x += dx;
          y += dy;

          // bounce horizontally
          if (x < 0 || x > window.innerWidth - 50) dx *= -1;
          // bounce vertically
          if (y < 0 || y > window.innerHeight - 50) dy *= -1;

          return { x, y, dx, dy };
        })
      );
    }, 40); // 30ms ≈ 33fps

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
          exit={{ scale: 5, opacity: 0 }}
          transition={{ duration: 0.5 }}
          onAnimationComplete={() => onFinish()}
        >
          {/* Bouncing background icons */}
          {positions.map((pos, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                pointerEvents: "none",
                opacity: 0.8,
              }}
            >
              {icons[i]}
            </div>
          ))}

          {/* Retro computer frame */}
          <div className="bg-gray-900 border-8 border-gray-700 rounded-lg shadow-2xl w-[600px] h-[400px] flex flex-col relative z-10">
            <div className="bg-black flex-1 text-green-400 font-mono text-sm p-4 overflow-hidden">
              {lines.map((line, index) => (
                <div key={index} className="whitespace-pre">
                  {line}
                </div>
              ))}

              {progress > 0 && progress < 100 && (
                <div className="mt-2">
                  <div className="w-full bg-gray-700 h-2 rounded">
                    <div
                      className="bg-green-400 h-2 rounded"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs mt-1">{progress}%</p>
                </div>
              )}

              <div className="animate-pulse mt-1">▊</div>
            </div>

            <div className="bg-gray-800 h-6 flex items-center justify-center text-gray-400 text-xs tracking-widest">
              [ Terminal v1.0 ]
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
