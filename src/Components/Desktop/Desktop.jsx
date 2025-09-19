import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import DecodingText from "../Decoding/Decoding";
import GlitchText from "../TextGlitch/GlitchText";
import About from "../About/About";
import Work from "../Work/Work";
import Skills from "../Skills/Skills";
import "./Desktop.css";
import { useState, useEffect } from "react";

const folders = [
  { id: 1, name: "About Me", icon: "/icons/about-me.png" },
  { id: 2, name: "My Work", icon: "/icons/my-work.png" },
  { id: 3, name: "Skills", icon: "/icons/skills.png" },
  // { id: 4, name: "Certificates", icon: "/icons/certificates.png" },
];

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [time, setTime] = useState(new Date());
  const [flashId, setFlashId] = useState(null);

  // update time every second
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleDoubleClick = (folder) => {
    setFlashId(folder.id);
    setActiveWindow(folder);
    setTimeout(() => setFlashId(null), 1000); // remove flash after 200ms
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* Monitor Frame */}
      <div
        className="relative w-[99%] h-[98%] rounded-2xl border-6 border-gray-800 
                  shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden bg-black"
      >
        {/* Screen (Your Desktop UI) */}
        <div
          className="h-full w-full bg-cover bg-center relative overflow-hidden"
          style={{
            backgroundImage: "url('/desktop.jpg')",
          }}
        >
          {/* Folders */}
          <div className="absolute top-8 left-4 flex flex-row space-x-25">
            {folders.map((folder) => (
              <motion.div
                key={folder.id}
                animate={
                  flashId === folder.id
                    ? { scale: 1, opacity: 0.5 }
                    : { scale: 1, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.4 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleDoubleClick(folder)}
              >
                <img
                  src={folder.icon}
                  alt={folder.name}
                  className="w-30 h-30 ml-5"
                />
                <DecodingText
                  text={folder.name}
                  speed={150}
                  className="text-black text-2xl pl-4 pt-4"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                />
              </motion.div>
            ))}
          </div>

          {/* Opened Window */}
          <AnimatePresence>
            {activeWindow && (
              <motion.div
                key={activeWindow.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute flex justify-center items-center inset-0"
              >
                <div className="w-[88%] h-[76%] bg-white shadow-xl border border-gray-500 flex flex-col">
                  {/* Window Header */}
                  <div className="bg-blue-600 text-white flex justify-between items-center px-3 py-2">
                    <span>{activeWindow.name}</span>
                    <button
                      className="hover:bg-red-600 px-2 rounded"
                      onClick={() => setActiveWindow(null)}
                    >
                      ✕
                    </button>
                  </div>

                  {/* Window Content */}
                  <div className="flex-1 overflow-auto">
                    {activeWindow.name === "About Me" && <About />}
                    {activeWindow.name === "My Work" && <Work />}
                    {activeWindow.name === "Skills" && <Skills />}
                    {activeWindow.name === "Certificates" && (
                      <p>Certificates will go here.</p>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Taskbar */}
          <div
            className="absolute bottom-0 left-0 w-full h-18 
                      bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 
                      flex items-center justify-between 
                      shadow-inner rounded-t-xl"
          >
            {/* Social icons */}
            <div className="flex pl-20.5 pt-2.5 w-130 space-x-24 rounded-tr-2xl rounded-br-2xl text-white text-4xl bg-green-600 h-18">
              <a
                href="https://github.com/Jaskaransingh098"
                target="_blank"
                rel="noreferrer"
                className=" transition transform duration-500 hover:-translate-y-11 hover:scale-310 hover:border-none hover:bg-transparent hover:cursor-[url('/hover.png'),_auto]"
              >
                <FaGithub className="w-14 h-14" />
              </a>
              <a
                href="https://www.linkedin.com/in/jaskaran-singh-0b0049194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="transition transform duration-500 hover:-translate-y-11 hover:scale-310 hover:border-none hover:bg-transparent"
              >
                <FaLinkedin className="w-14 h-14" />
              </a>
              <a
                href="https://www.instagram.com/_jaskarandosanjh?igsh=cmVyazI5dTh2amJw"
                target="_blank"
                rel="noreferrer"
                className=" transition transform duration-500 hover:-translate-y-11 hover:scale-310 hover:border-none hover:bg-transparent"
              >
                <FaInstagram className="w-14 h-14" />
              </a>
            </div>
            <div
              className="my-name text-white text-5xl font-thin text-left"
              style={{ fontFamily: "Tagesschrift" }}
            >
              <GlitchText
                text="Jaskaran"
                className="text-5xl text-white"
                style={{ fontFamily: "Tagesschrift" }}
              />
            </div>
            <div className="line-taskbar flex flex-col space-y-4">
              <div className="w-58 h-[4px] bg-white"></div>
              <div className="w-58 h-[3px] bg-white"></div>
              <div className="w-58 h-[1px] bg-white"></div>
            </div>
            <div className="my-mail flex flex-col">
              {/* <img src="/icons/mail.webp" alt="" className="h-6 w-6" /> */}
              {/* <h3 style={{fontFamily: "Tagesschrift"}} className="text-white glitch text-xl">jaskarandosanjh88@gmail.com</h3> */}
              <GlitchText
                text="jaskarandosanjh88@gmail.com"
                className="text-xl text-white"
                style={{ fontFamily: "Tagesschrift" }}
              />
            </div>

            {/* Time & Date */}
            <div
              className="text-white text-xl font-bold p-2 text-left bg-blue-500 h-fit w-50 rounded-2xl"
              style={{ fontFamily: "Kode Mono" }}
            >
              <div>
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </div>
              <div>{time.toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
