import React, { useState } from "react";
import "./About.css"; // Import custom CSS for animations
import { FaUser, FaCode, FaBriefcase, FaLaptop, FaGlobe } from "react-icons/fa";
import PixelBlast from "../PixelBlast/PixelBlast";

export default function About() {
  const infoItems = [
    {
      label: "About Me",
      value: (
        <div>
          <p className="mb-3">
            Hello 👋 My name is{" "}
            <span className="font-bold text-[#0a4d9b]">Jaskaran Singh</span>.
            I’m a full-stack developer who loves retro design, especially the
            vibe of Windows XP.
          </p>
          <p className="mb-3">
            I have been working with web technologies for several years,
            building interactive and visually unique applications. My style
            blends modern functionality with nostalgic design.
          </p>
          <p>
            In this section, you’ll find details about my <b>skills</b>,{" "}
            <b>experience</b>,<b> projects</b>, and <b>contact information</b>.
            Click on the menu items on the left to explore more 🚀
          </p>
        </div>
      ),
      icon: <FaUser />,
    },
    {
      label: "Skills",
      value: (
        <div>
          <h4 className="text-xl mb-2">Technical Toolkit</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Frontend: React, Next.js, Vite, Tailwind CSS, GSAP animations
            </li>
            <li>Backend: Node.js, Express, MongoDB, JWT Authentication</li>
            <li>Tools: Git, Firebase, REST APIs, Postman</li>
            <li>UI: Retro/XP-inspired design, pixel-art UIs</li>
          </ul>
        </div>
      ),
      icon: <FaCode />,
    },
    {
      label: "Experience",
      value: (
        <div>
          <h4 className="text-xl mb-2">Professional Journey</h4>
          <p className="mb-3">
            Over the years, I’ve worked on several projects that range from
            startup idea platforms, dashboards, and blogs, to complete
            full-stack applications.
          </p>
          <p>
            I focus on building products that not only work but also feel
            delightful to use. My goal is to merge functionality with unique
            designs.
          </p>
        </div>
      ),
      icon: <FaBriefcase />,
    },
    {
      label: "Projects",
      value: (
        <div>
          <h4 className="text-xl mb-2">Highlighted Projects</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              🚀 InnoLink Web Application – Startup idea submission & review
              platform
            </li>
            <li>
              📰 Blog Platform – Featured slider, search filters, and animated
              articles
            </li>
            <li>
              📊 Dashboards – Interactive graphs for likes, comments, and
              engagement
            </li>
            <li>🎨 Retro Portfolio – XP-inspired UI with 3D models</li>
          </ul>
        </div>
      ),
      icon: <FaLaptop />,
    },
    {
      label: "Contact",
      value: (
        <div>
          <h4 className="text-xl mb-2">Get in Touch</h4>
          <p>
            I’m always open to collaboration, new projects, or just chatting
            about retro UI design. Drop me a mail at <b>retro.dev@email.com</b>.
          </p>
        </div>
      ),
      icon: <FaGlobe />,
    },
  ];

  const [active, setActive] = useState(null);
  const defaultContent = infoItems[0]; // About Me

  return (
    <div className="w-full h-100% font-mono flex flex-col">
      {/* Image Section with PixelBlast background */}
      <div className="relative w-full h-80 flex justify-center items-center overflow-hidden">
        {/* PixelBlast background */}
        <PixelBlast
          // variant="circle"
          pixelSize={2}
          color="#B19EEF"
          patternScale={5}
          patternDensity={1.6}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.6}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid
          liquidStrength={0.12}
          liquidRadius={1.3}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0}
          transparent
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "40vh",
            pointerEvents: "auto", // allow interaction
          }}
        />

        {/* Old computer image on top */}
        <img
          src="/icons/window.jpg"
          alt="Old Computer"
          className="relative w-64 h-auto z-10"
        />
      </div>

      {/* Info Section */}
      <div className="flex w-full h-[45vh] bg-[#e0e8f0] border-4 border-[#0a4d9b] shadow-xl">
        {/* Left Retro Sidebar (fixed in height, doesn't scroll) */}
        <div className="w-64 bg-gradient-to-b from-[#3a6ad9] to-[#1c4db3] text-white flex flex-col p-4 font-mono sticky top-0 h-full">
          <h2 className="text-xl font-bold mb-4 border-b border-white pb-2">
            💾 Info Menu
          </h2>
          {infoItems.slice(1).map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(item)}
              className={`flex items-center gap-3 px-3 py-2 mb-2 text-left transition-all duration-150 
        ${
          active === item
            ? "bg-[#0a4d9b] border border-[#082f6b] text-white shadow-[inset_2px_2px_2px_rgba(0,0,0,0.6),inset_-2px_-2px_2px_rgba(255,255,255,0.6)]" // pressed in
            : "bg-[#2c5fc0] border border-[#163c87] text-white shadow-[2px_2px_2px_rgba(0,0,0,0.6),-2px_-2px_2px_rgba(255,255,255,0.6)] hover:bg-[#366de0]" // raised
        }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="font-bold">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Right Side Content (scrollable only) */}
        <div className="flex-1 p-6 font-mono relative overflow-hidden">
          <div className="bg-white border-4 border-[#3a6ad9] shadow-lg rounded-md h-full w-full p-6 animate-slideInXP overflow-y-auto">
            <h3 className="text-2xl font-bold text-[#0a4d9b] mb-4 flex items-center gap-2">
              {(active || defaultContent).icon}{" "}
              {(active || defaultContent).label}
            </h3>
            <div className="text-gray-800 text-lg leading-relaxed" style={{fontFamily:"Kode Mono"}}>
              {(active || defaultContent).value}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-4 text-sm text-gray-700 border-t-2 border-gray-300 pt-2">
        This info panel scrolls independently while keeping the retro XP look.
      </div>
    </div>
  );
}
