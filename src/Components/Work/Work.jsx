import React, { useState, useEffect } from "react";
import "./Work.css";

function Work() {
  const [activeWork, setActiveWork] = useState("work1");

  const media = [
    { type: "image", src: "/project-medias/wonderland-pic.png" },
    { type: "video", src: "/project-medias/wonderland-video.mp4" },
    { type: "image", src: "/project-medias/wonderland-pic2.png" },
  ];

  const mediaWork2 = [
    { type: "image", src: "/project-medias/innolinkk-pic.png" },
    { type: "video", src: "/project-medias/innolinkk-video.mp4" },
    { type: "image", src: "/project-medias/innolinkk-pic2.png" },
  ];

  const mediaWork3 = [
    { type: "image", src: "/project-medias/apex-pic.png" },
    { type: "video", src: "/project-medias/apex-video.mp4" },
    { type: "image", src: "/project-medias/apex-pic1.png" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexWork2, setCurrentIndexWork2] = useState(0);
  const [currentIndexWork3, setCurrentIndexWork3] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
    setCurrentIndexWork2(0);
    setCurrentIndexWork3(0);
  }, [activeWork]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length);
    }, 12000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, [media.length]);

  const baseBtn =
    "px-6 py-2 h-16 font-semibold border-2 border-black transition-all duration-200 flex-1"; // flex-1 makes equal width

  const activeBtn = "bg-white text-black translate-y-[2px] shadow-inner";

  const inactiveBtn =
    "bg-gray-200 text-black -translate-y-[2px] shadow-[0_4px_0px_rgba(0,0,0,0.6)] hover:-translate-y-[4px] hover:shadow-[0_6px_0px_rgba(0,0,0,0.6)]";

  const handleNext = () => {
    if (activeWork === "work1") setActiveWork("work2");
    else if (activeWork === "work2") setActiveWork("work3");
  };

  const handlePrev = () => {
    if (activeWork === "work3") setActiveWork("work2");
    else if (activeWork === "work2") setActiveWork("work1");
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Navbar */}
      <div className="mywork-navbar w-full h-16 bg-gray-300 flex items-center">
        <button
          onClick={() => setActiveWork("work1")}
          className={`${baseBtn} ${
            activeWork === "work1" ? activeBtn : inactiveBtn
          }`}
          style={{ fontFamily: "Kode Mono" }}
        >
          Wonderland Himalayas
        </button>
        <button
          onClick={() => setActiveWork("work2")}
          className={`${baseBtn} ${
            activeWork === "work2" ? activeBtn : inactiveBtn
          } font-`}
          style={{ fontFamily: "Kode Mono" }}
        >
          Innolinkk
        </button>
        <button
          onClick={() => setActiveWork("work3")}
          className={`${baseBtn} ${
            activeWork === "work3" ? activeBtn : inactiveBtn
          }`}
          style={{ fontFamily: "Kode Mono" }}
        >
          Apex Infotech Solutions
        </button>
      </div>

      {/* Work Details */}
      <div className="flex-1 p-6 bg-white overflow-auto">
        {activeWork === "work1" && (
          <div className="flex w-full h-full bg-gray-100 border-2 border-gray-500 shadow-[4px_4px_0px_black]">
            {/* Left Side - Details */}
            {/* Left Side - Details */}
            <div className="w-1/2 p-4 flex flex-col justify-between border-r-2 border-gray-400">
              {/* Retro Window Header */}
              <div className="bg-blue-600 text-white px-3 py-2 flex justify-between items-center shadow-inner">
                <span className="font-thin" style={{fontFamily:"Bungee Spice"}}>Wonderland Himalayas</span>
                {/* Next arrow only */}
                <button
                  onClick={handleNext}
                  className="bg-gray-200 text-black border border-black px-2 hover:bg-gray-300"
                >
                  ➡
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="mt-4 text-left font-mono text-black flex-1 overflow-y-auto pr-2 space-y-6">
                {/* Main Overview */}
                <div className="xp-subwindow">
                  <h2 className="xp-heading">Wonderland Himalayas</h2>
                  <p className="mb-4">
                    A full-stack web project for a Himachal-based travel
                    company. Built with{" "}
                    <span className="font-semibold">React + Vite</span> on the
                    frontend and{" "}
                    <span className="font-semibold">Express + MongoDB</span> on
                    the backend.
                  </p>
                  <ul className="list-disc list-inside mb-4 text-sm">
                    <li>Responsive travel landing page with trek details</li>
                    <li>Animations and interactive sections</li>
                    <li>Optimized for SEO + Google indexing</li>
                    <li>Integrated booking & inquiry forms</li>
                  </ul>
                </div>

                {/* Travel Packages */}
                <div className="xp-subwindow packages-style">
                  <h2 className="xp-heading">🗺️ Travel Packages</h2>
                  <p className="text-sm">
                    Showcases detailed itineraries and destinations for Himachal
                    treks and adventure packages.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Package-wise trekking details</li>
                    <li>Day-to-day itinerary breakdowns</li>
                    <li>Gallery & highlights for each trip</li>
                    <li>Integrated Google Maps for routes</li>
                  </ul>
                </div>

                {/* Booking System */}
                <div className="xp-subwindow booking-style">
                  <h2 className="xp-heading">📅 Booking System</h2>
                  <p className="text-sm">
                    Online booking and inquiry forms connected to the backend
                    with{" "}
                    <span className="font-semibold">
                      form validation & email notifications
                    </span>
                    .
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Custom form validations</li>
                    <li>Dynamic trek & package selection</li>
                    <li>Automated email confirmations</li>
                  </ul>
                </div>

                {/* Admin Dashboard */}
                <div className="xp-subwindow admin-style">
                  <h2 className="xp-heading">🖥 Admin Dashboard</h2>
                  <p className="text-sm">
                    A MERN-based admin panel for managing content and bookings.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Manage treks, packages, and inquiries</li>
                    <li>JWT authentication + user roles</li>
                    <li>View booking analytics</li>
                  </ul>
                </div>

                {/* SEO & Performance */}
                <div className="xp-subwindow seo-style">
                  <h2 className="xp-heading">⚙ SEO + Performance</h2>
                  <p className="text-sm">
                    Optimized for{" "}
                    <span className="font-semibold">Google ranking</span> with
                    meta tags, sitemap, structured data, and accessibility.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>SEO-friendly meta tags & sitemap</li>
                    <li>Lazy-loaded images for faster performance</li>
                    <li>Accessible navigation (WCAG standards)</li>
                  </ul>
                </div>
              </div>

              {/* Retro Buttons - Fixed at Bottom */}
              <div className="flex space-x-2 mt-4">
                <a
                  href="https://wonderlandhimalayas.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm"
                >
                  🔗 Visit Site
                </a>
                <a
                  href="https://github.com/yourrepo"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm"
                >
                  💻 Source Code
                </a>
              </div>
            </div>

            {/* Right Side - Image/Video */}
            <div className="w-1/2 flex flex-col items-center justify-center bg-gray-300 relative overflow-hidden border-l-2 border-gray-400">
              <div className="w-full h-[300px] flex items-center justify-center">
                {media[currentIndex].type === "image" ? (
                  <img
                    src={media[currentIndex].src}
                    alt="Project Slide"
                    className="max-h-full max-w-full border-2 border-gray-400 shadow-lg"
                  />
                ) : (
                  <video
                    src={media[currentIndex].src}
                    controls
                    autoPlay
                    loop
                    muted
                    className="max-h-full max-w-full border-2 border-gray-400 shadow-lg"
                  />
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="absolute flex space-x-122">
                <button
                  onClick={() =>
                    setCurrentIndex(
                      (prev) => (prev - 1 + media.length) % media.length
                    )
                  }
                  className="px-3 py-1 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] text-xs hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                >
                  ⬅ Prev
                </button>
                <button
                  onClick={() =>
                    setCurrentIndex((prev) => (prev + 1) % media.length)
                  }
                  className="px-3 py-1 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] text-xs hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                >
                  Next ➡
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-8 flex space-x-1">
                {media.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 border border-gray-400 cursor-pointer ${
                      i === currentIndex ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeWork === "work2" && (
          <div className="flex w-full h-full bg-gray-100 border-2 border-gray-500 shadow-[4px_4px_0px_black]">
            {/* Left Side - Details */}
            <div className="w-1/2 p-4 flex flex-col justify-between border-r-2 border-gray-400">
              {/* Retro Window Header */}
              <div className="bg-blue-600 text-white px-3 py-2 flex justify-between items-center shadow-inner">
                <button
                  onClick={handlePrev}
                  className="bg-gray-200 text-black border border-black px-2 hover:bg-gray-300"
                >
                  ⬅
                </button>
                <span className="font-bold" style={{fontFamily:"Bungee Spice"}}>Innolinkk</span>
                <button
                  onClick={handleNext}
                  className="bg-gray-200 text-black border border-black px-2 hover:bg-gray-300"
                >
                  ➡
                </button>
              </div>

              {/* Scrollable Content */}
              {/* Scrollable Content */}
              <div className="mt-4 text-left font-mono text-black flex-1 overflow-y-auto pr-2 space-y-6">
                {/* Main Overview */}
                <div className="xp-subwindow">
                  <h2 className="xp-heading">Innolinkk</h2>
                  <p className="mb-4">
                    A startup idea submission and collaboration platform. Built
                    with <span className="font-semibold">MERN stack</span> and{" "}
                    <span className="font-semibold">JWT authentication</span>{" "}
                    for secure access.
                  </p>
                  <ul className="list-disc list-inside mb-4 text-sm">
                    <li>Multi-step idea submission form</li>
                    <li>Token-based authentication system</li>
                    <li>Frontend built with React + Vite</li>
                    <li>Backend API with Express + MongoDB</li>
                  </ul>
                </div>

                {/* Idea Submission System */}
                <div className="xp-subwindow form-style">
                  <h2 className="xp-heading">💡 Idea Submission</h2>
                  <p className="text-sm">
                    Users can submit startup ideas through a structured
                    multi-step form.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Founder details & startup info</li>
                    <li>Idea description, goals & market</li>
                    <li>Final review before submission</li>
                    <li>Data stored securely in MongoDB</li>
                  </ul>
                </div>

                {/* Engagement System */}
                <div className="xp-subwindow engagement-style">
                  <h2 className="xp-heading">📊 Engagement Features</h2>
                  <p className="text-sm">
                    Users can interact with posted ideas via likes and comments.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Persistent likes system</li>
                    <li>Full comment threads with replies</li>
                    <li>Visible only after login</li>
                  </ul>
                </div>

                {/* Dashboard */}
                <div className="xp-subwindow dashboard-style">
                  <h2 className="xp-heading">🖥 User Dashboard</h2>
                  <p className="text-sm">
                    A personalized dashboard to track submissions and
                    engagement.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>View submitted ideas</li>
                    <li>Track likes, comments, and views</li>
                    <li>Graph of most engaged idea</li>
                  </ul>
                </div>

                {/* Authentication & Security */}
                <div className="xp-subwindow auth-style">
                  <h2 className="xp-heading">🔐 Authentication & Security</h2>
                  <p className="text-sm">
                    The app uses robust authentication to ensure privacy and
                    data protection.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>JWT-based login & signup</li>
                    <li>Password encryption with bcrypt</li>
                    <li>Secure route protection in Express</li>
                    <li>Token-based user sessions</li>
                  </ul>
                </div>

                {/* Admin Panel */}
                <div className="xp-subwindow admin-style">
                  <h2 className="xp-heading">🛠 Admin Panel</h2>
                  <p className="text-sm">
                    A management system for moderators to maintain platform
                    integrity.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>View and manage all submitted ideas</li>
                    <li>Approve or delete inappropriate content</li>
                    <li>Monitor user activity & engagement stats</li>
                  </ul>
                </div>

                {/* Future Scope */}
                <div className="xp-subwindow future-style">
                  <h2 className="xp-heading">🌍 Future Scope</h2>
                  <p className="text-sm">
                    Planned enhancements to make InnoLinkk a complete founder’s
                    ecosystem.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>AI-based mentor matching system</li>
                    <li>Startup funding & investor module</li>
                    <li>Team collaboration & chat integration</li>
                    <li>Gamification for active contributors</li>
                  </ul>
                </div>
              </div>

              {/* Retro Buttons - Fixed at Bottom */}
              <div className="flex space-x-2 mt-4">
                <a
                  href="https://innolinkk.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm"
                >
                  🔗 Visit Site
                </a>
                <a
                  href="https://github.com/yourrepo"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm"
                >
                  💻 Source Code
                </a>
              </div>
            </div>

            {/* Right Side - Media Carousel */}
            <div className="w-1/2 flex flex-col items-center justify-center bg-gray-300 relative overflow-hidden border-l-2 border-gray-400">
              <div className="w-full h-[300px] flex items-center justify-center">
                {mediaWork2[currentIndexWork2].type === "image" ? (
                  <img
                    src={mediaWork2[currentIndexWork2].src}
                    alt="Innolinkk"
                    className="max-h-full w-full border-2 border-gray-400 shadow-lg"
                  />
                ) : (
                  <video
                    src={mediaWork2[currentIndexWork2].src}
                    controls
                    autoPlay
                    loop
                    muted
                    className="max-h-full w-full border-2 border-gray-400 shadow-lg"
                  />
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="absolute flex space-x-120">
                <button
                  onClick={() =>
                    setCurrentIndexWork2(
                      (prev) =>
                        (prev - 1 + mediaWork2.length) % mediaWork2.length
                    )
                  }
                  className="px-3 py-1 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] text-xs hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                >
                  ⬅ Prev
                </button>
                <button
                  onClick={() =>
                    setCurrentIndexWork2(
                      (prev) => (prev + 1) % mediaWork2.length
                    )
                  }
                  className="px-3 py-1 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] text-xs hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                >
                  Next ➡
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-8 flex space-x-1">
                {mediaWork2.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentIndexWork2(i)}
                    className={`w-2 h-2 border border-gray-400 cursor-pointer ${
                      i === currentIndexWork2 ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeWork === "work3" && (
          <div className="flex w-full h-full bg-gray-100 border-2 border-gray-500 shadow-[4px_4px_0px_black]">
            {/* Left Side - Details */}
            <div className="w-1/2 p-4 flex flex-col justify-around border-r-2 border-gray-400">
              {/* Retro Window Header */}
              <div className="bg-blue-600 text-white px-3 py-2 flex items-center shadow-inner">
                <button
                  onClick={handlePrev}
                  className="bg-gray-200 text-black border border-black px-2 hover:bg-gray-300"
                >
                  ⬅
                </button>
                <span className="font-bold pl-40" style={{fontFamily:"Bungee Spice"}}>Apex Infotech Solutions</span>
              </div>

              {/* Scrollable Content */}
              <div className="mt-4 text-left font-mono text-black flex-1 overflow-y-auto pr-2 space-y-6">
                {/* Main Overview */}
                <div className="xp-subwindow">
                  <h2 className="xp-heading">Apex Infotech Solutions</h2>
                  <p className="mb-4">
                    A full-service digital agency and web solutions provider.
                    Apex focuses on modern website design & development plus
                    performance marketing to help businesses grow online.
                  </p>
                  <ul className="list-disc list-inside mb-4 text-sm">
                    <li>Custom website & web-app development</li>
                    <li>Performance marketing: SEO, PPC & social ads</li>
                    <li>Content creation & conversion-focused UX</li>
                    <li>Hosting, maintenance & performance optimizations</li>
                  </ul>
                </div>

                {/* Services */}
                <div className="xp-subwindow services-style">
                  <h2 className="xp-heading">🛠 Core Services</h2>
                  <p className="text-sm">
                    End-to-end digital services covering strategy, build, and
                    growth.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Responsive website & e-commerce development</li>
                    <li>SEO audits & on-page / off-page SEO</li>
                    <li>
                      PPC campaigns (Google / Meta) and performance tracking
                    </li>
                    <li>
                      Social media strategy, content & community management
                    </li>
                  </ul>
                </div>

                {/* Portfolio / Case Studies */}
                <div className="xp-subwindow portfolio-style">
                  <h2 className="xp-heading">📁 Portfolio & Case Studies</h2>
                  <p className="text-sm">
                    Showcases projects across industries — with measurable
                    results and KPIs.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Design-led websites that improved conversions</li>
                    <li>SEO & ads campaigns that increased organic traffic</li>
                    <li>Client case studies with before/after metrics</li>
                  </ul>
                </div>

                {/* Client Dashboard / Reporting */}
                <div className="xp-subwindow dashboard-style">
                  <h2 className="xp-heading">
                    📊 Client Dashboard & Reporting
                  </h2>
                  <p className="text-sm">
                    Clients get consolidated reporting and simple tools to
                    monitor progress.
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Campaign performance dashboards</li>
                    <li>Monthly reports & actionable recommendations</li>
                    <li>Support & maintenance requests tracking</li>
                  </ul>
                </div>

                {/* Contact & Reach */}
                <div className="xp-subwindow contact-style">
                  <h2 className="xp-heading">☎ Contact & Reach</h2>
                  <p className="text-sm">
                    Live site:{" "}
                    <a
                      href="https://www.apexinfotechsolutions.com"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      www.apexinfotechsolutions.com
                    </a>
                  </p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Project enquiries, proposals & quotes</li>
                    <li>Ongoing support & retainer services</li>
                    <li>Client onboarding and strategy sessions</li>
                  </ul>
                </div>
              </div>

              {/* Retro Buttons - Fixed at Bottom */}
              <div className="flex space-x-2 mt-4">
                <a
                  href="https://apexinfotechsolutions.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm"
                >
                  🔗 Visit Site
                </a>
                <a
                  href="https://github.com/yourrepo"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-sm"
                >
                  💻 Source Code
                </a>
              </div>
            </div>

            {/* Right Side - Media Carousel */}
            <div className="w-1/2 flex flex-col items-center justify-center bg-gray-300 relative overflow-hidden border-l-2 border-gray-400">
              <div className="w-full h-[300px] flex items-center justify-center">
                {mediaWork3[currentIndexWork3].type === "image" ? (
                  <img
                    src={mediaWork3[currentIndexWork3].src}
                    alt="Apex Infotech Solutions"
                    className="max-h-full w-full border-2 border-gray-400 shadow-lg"
                  />
                ) : (
                  <video
                    src={mediaWork3[currentIndexWork3].src}
                    controls
                    autoPlay
                    loop
                    muted
                    className="max-h-full w-full border-2 border-gray-400 shadow-lg"
                  />
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="absolute flex space-x-120">
                <button
                  onClick={() =>
                    setCurrentIndexWork3(
                      (prev) =>
                        (prev - 1 + mediaWork3.length) % mediaWork3.length
                    )
                  }
                  className="px-3 py-1 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] text-xs hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                >
                  ⬅ Prev
                </button>
                <button
                  onClick={() =>
                    setCurrentIndexWork3(
                      (prev) => (prev + 1) % mediaWork3.length
                    )
                  }
                  className="px-3 py-1 bg-gray-200 border-2 border-gray-500 shadow-[2px_2px_0px_black] text-xs hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all"
                >
                  Next ➡
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-8 flex space-x-1">
                {mediaWork3.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setCurrentIndexWork3(i)}
                    className={`w-2 h-2 border border-gray-400 cursor-pointer ${
                      i === currentIndexWork3 ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Work;
