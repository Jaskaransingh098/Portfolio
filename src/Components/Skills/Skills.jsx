import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJquery,
  SiSass,
  SiJson,
  SiFrontendmentor,
  SiApollographql,
} from "react-icons/si";
import "./Skills.css";
import GlitchText from "../TextGlitch/GlitchText";
import Particles from "../Particles/Particles";

export default function Skills() {
  const skills = [
    {
      name: "AI",
      icon: <SiApollographql className="text-purple-500 text-5xl" />,
      link: "https://openai.com/",
    },
    {
      name: "Back-end",
      icon: <FaNodeJs className="text-green-600 text-5xl" />,
      link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600 text-5xl" />,
      link: "https://getbootstrap.com/",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500 text-5xl" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Database",
      icon: <FaDatabase className="text-gray-700 text-5xl" />,
      link: "https://www.oracle.com/database/what-is-database-management/",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-black text-5xl" />,
      link: "https://expressjs.com/",
    },
    {
      name: "Front-end",
      icon: <SiFrontendmentor className="text-pink-500 text-5xl" />,
      link: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer",
    },
    {
      name: "React",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
      link: "https://react.dev/",
    },
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600 text-5xl" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "jQuery",
      icon: <SiJquery className="text-blue-400 text-5xl" />,
      link: "https://jquery.com/",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-5xl" />,
      link: "https://www.mongodb.com/",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-700 text-5xl" />,
      link: "https://www.mysql.com/",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-5xl" />,
      link: "https://nodejs.org/",
    },
    {
      name: "SASS",
      icon: <SiSass className="text-pink-400 text-5xl" />,
      link: "https://sass-lang.com/",
    },
    {
      name: "Project",
      icon: <FaBriefcase className="text-gray-800 text-5xl" />,
      link: "https://asana.com/resources/project-coordination",
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-blue-700 text-5xl" />,
      link: "https://www.w3schools.com/sql/",
    },
    {
      name: "UI Dev",
      icon: <FaReact className="text-cyan-400 text-5xl" />,
      link: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/UI",
    },
    {
      name: "Web design",
      icon: <FaCss3Alt className="text-blue-400 text-5xl" />,
      link: "https://www.smashingmagazine.com/category/web-design",
    },
    {
      name: "Web dev",
      icon: <FaHtml5 className="text-orange-500 text-5xl" />,
      link: "https://developer.mozilla.org/en-US/docs/Learn",
    },
  ];

  // split into 2 rows
  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, half);
  const secondHalf = skills.slice(half);

  return (
    <div className="relative bg-gray-300 h-full w-full flex flex-col items-center font-mono overflow-hidden z-0">
      {/* Background Particles */}

      <div className="absolute inset-0 -z-10">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={400}
          particleSpread={10}
          speed={0.4}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Title */}
      <GlitchText
        text={"📁 My Skills"}
        className="text-7xl text-black-200 font-bold mb-10 mt-14"
        style={{ fontFamily: "Tagesschrift" }}
      />

      {/* Top carousel (left to right loop) */}
      <div className="relative w-full overflow-hidden mb-8">
        <div className="animate-scroll-left flex">
          {[...firstHalf, ...firstHalf].map((skill, i) => (
            <a
              key={i}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="folder-card flex flex-col items-center justify-center min-w-[200px] mx-6 p-6 bg-gray-100 rounded-2xl shadow-md hover:scale-105 transition"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-800">
                {skill.name}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom carousel (right to left loop) */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll-right flex">
          {[...secondHalf, ...secondHalf].map((skill, i) => (
            <a
              key={i}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="folder-card flex flex-col items-center justify-center min-w-[200px] mx-6 p-6 bg-gray-100 rounded-2xl shadow-md hover:scale-105 transition"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-semibold text-gray-800">
                {skill.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
