import AnimatedIconButton from "@/components/animatedButton/animatedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import PulseGrid from "../baclgroundripple/backgroundrippleeffect";
import {
  faCode,
  faLayerGroup,
  faPaintBrush,
  faPalette,
  faVial,
} from "@fortawesome/free-solid-svg-icons";

export default function CardGrid() {
  return (
    <section className="w-full text-white py-16" id="next-section">
      <div className="max-w-[1360px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {/* Profile Card (taller) */}
        <div className="col-span-2 row-span-2 p-6 rounded-2xl dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition flex flex-col justify-center">
          <div className="flex gap-9">
            <div className="w-1/2 h-120 rounded-lg bg-gradient-to-tr from-blue-500 to-purple-500"></div>
            <div className="w-1/2">
              <p className="text-[16px] text-gray-300">UI / UX Developer</p>
              <h2 className="text-6xl font-bold uppercase mb-4 font-heading">
                Darshan <br /> Makwana
              </h2>
              <p className="text-lg text-gray-300">
                A passionate UI/UX designer with 5+ years of experience,
                crafting seamless experiences.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE TOP SMALL */}
        <div className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition flex justify-center">
          <PulseGrid />
          {/* Card Content */}
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-gray-600 dark:text-white/60 font-regular uppercase">
                Articles
              </p>
              <h3 className="text-3xl font-bold">LinkedIn</h3>
            </div>
            <AnimatedIconButton href="https://google.com" />
          </div>
        </div>

        {/* Two stacked boxes */}
        <div className=" p-6 rounded-2xl dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition flex flex-col justify-center row-span-1">
          <h3 className="text-lg font-semibold mb-2">Box 1</h3>
        </div>
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition flex flex-col justify-center row-span-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[14px] text-white/60 font-regular uppercase">
                showcase
              </p>
              <h3 className="text-3xl font-bold">Projects</h3>
            </div>
            <AnimatedIconButton href="/portfolio" />
          </div>
        </div>

        {/* Articles card */}
        <div className="col-span-1 row-span-1 p-6 rounded-2xl dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg relative hover:scale-[1.02] transition">
          <div className="flex justify-center mb-6">
            <button className="group relative">
              {/* Notification Badge */}
              <div className="absolute -right-2 -top-2 z-10">
                <div className="flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-[6px] font-bold text-white">
                    3
                  </span>
                </div>
              </div>

              {/* Button Body */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-bl from-gray-900 via-gray-950 to-black p-[1px] shadow-2xl shadow-gray-500/20 group-hover:shadow-blue-500/20">
                <div className="relative flex items-center gap-4 rounded-xl bg-gray-950 px-6 py-3 transition-all duration-300 group-hover:bg-gray-950/50">
                  {/* LinkedIn Icon */}
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600 transition-all duration-300 group-hover:bg-[#0A66C2] group-hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                    >
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.762 0 5-2.24 5-5v-14c0-2.76-2.238-5-5-5zm-11.5 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13 12.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.867 0-2.155 1.459-2.155 2.965v5.698h-3v-11h2.881v1.507h.041c.401-.759 1.381-1.557 2.845-1.557 3.043 0 3.603 2.004 3.603 4.611v6.439z" />
                    </svg>
                    <div className="absolute inset-0 rounded-lg blur-sm transition-all duration-300 group-hover:blur-md"></div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-white">
                      LinkedIn
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#0A66C2]">
                      Check New Articles
                    </span>
                  </div>

                  {/* Pulsing dots */}
                  <div className="ml-auto flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-500 transition-all duration-300 group-hover:bg-[#0A66C2] group-hover:scale-150"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-400 transition-all duration-300 group-hover:bg-[#0A66C2]/50 group-hover:scale-150 group-hover:delay-100"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-all duration-300 group-hover:bg-[#0A66C2]/30 group-hover:scale-150 group-hover:delay-200"></div>
                  </div>
                </div>

                {/* Overlay for hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-600 via-gray-700 to-black opacity-20 transition-all duration-300 group-hover:from-[#0A66C2] group-hover:via-blue-600 group-hover:to-blue-800 group-hover:opacity-40"></div>
              </div>
            </button>
          </div>

          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-gray-600 dark:text-white/60 font-regular uppercase">
                Articles
              </p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                LinkedIn
              </h3>
            </div>
            <AnimatedIconButton href="https://www.linkedin.com/in/darshan-makwana-4a743514a/" />
          </div>
        </div>

        {/* Service Offering (wide card) */}
        <div
          className="col-span-2 row-span-1 p-6 rounded-2xl 
  bg-white/70 dark:bg-white/2 dark:hover:bg-white/5 
  backdrop-blur-md border border-gray-300 dark:border-white/10 
  shadow-lg relative transform transition-transform duration-300 ease-out hover:scale-[1.02]"
        >
          {/* Service Icons Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-20">
            {/* UI/UX Design Excellence */}
            <div className="relative flex flex-col items-center text-center group">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-xl 
        bg-white/10 dark:bg-white/20 
        border border-white/20 shadow-md cursor-pointer 
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
        group-hover:bg-[#006fee]"
              >
                <FontAwesomeIcon
                  icon={faPaintBrush}
                  className="text-gray-800 dark:text-white text-2xl 
          transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
          group-hover:scale-110"
                />
              </div>

              {/* Tooltip */}
              <span
                className="absolute -top-10 px-2 py-1 text-xs rounded-md shadow-md opacity-0 scale-75
        group-hover:opacity-100 group-hover:scale-100 group-hover:-top-10
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        bg-[#006fee] text-white"
              >
                UI/UX Design
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#006fee] rotate-45 -translate-x-1/2"></span>
              </span>
            </div>

            {/* Interactive Prototyping */}
            <div className="relative flex flex-col items-center text-center group">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-xl 
        bg-white/10 dark:bg-white/20 
        border border-white/20 shadow-md cursor-pointer 
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
        group-hover:bg-[#ff9800]"
              >
                <FontAwesomeIcon
                  icon={faVial}
                  className="text-gray-800 dark:text-white text-2xl 
          transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
          group-hover:scale-110"
                />
              </div>
              <span
                className="absolute -top-10 px-2 py-1 text-xs rounded-md shadow-md opacity-0 scale-75
        group-hover:opacity-100 group-hover:scale-100 group-hover:-top-10
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        bg-[#ff9800] text-white"
              >
                Prototyping
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#ff9800] rotate-45 -translate-x-1/2"></span>
              </span>
            </div>

            {/* Responsive Front-End */}
            <div className="relative flex flex-col items-center text-center group">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-xl 
        bg-white/10 dark:bg-white/20 
        border border-white/20 shadow-md cursor-pointer 
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
        group-hover:bg-[#4cafef]"
              >
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-gray-800 dark:text-white text-2xl 
          transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
          group-hover:scale-110"
                />
              </div>
              <span
                className="absolute -top-10 px-2 py-1 text-xs rounded-md shadow-md opacity-0 scale-75
        group-hover:opacity-100 group-hover:scale-100 group-hover:-top-10
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        bg-[#4cafef] text-white"
              >
                Front-End
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#4cafef] rotate-45 -translate-x-1/2"></span>
              </span>
            </div>

            {/* Visual Branding */}
            <div className="relative flex flex-col items-center text-center group">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-xl 
        bg-white/10 dark:bg-white/20 
        border border-white/20 shadow-md cursor-pointer 
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
        group-hover:bg-[#e4405f]"
              >
                <FontAwesomeIcon
                  icon={faPalette}
                  className="text-gray-800 dark:text-white text-2xl 
          transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
          group-hover:scale-110"
                />
              </div>
              <span
                className="absolute -top-10 px-2 py-1 text-xs rounded-md shadow-md opacity-0 scale-75
        group-hover:opacity-100 group-hover:scale-100 group-hover:-top-10
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        bg-[#e4405f] text-white"
              >
                Branding
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#e4405f] rotate-45 -translate-x-1/2"></span>
              </span>
            </div>

            {/* Design Systems */}
            <div className="relative flex flex-col items-center text-center group">
              <div
                className="w-16 h-16 flex items-center justify-center rounded-xl 
        bg-white/10 dark:bg-white/20 
        border border-white/20 shadow-md cursor-pointer 
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
        group-hover:bg-[#9c27b0]"
              >
                <FontAwesomeIcon
                  icon={faLayerGroup}
                  className="text-gray-800 dark:text-white text-2xl 
          transition-transform duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] 
          group-hover:scale-110"
                />
              </div>
              <span
                className="absolute -top-10 px-2 py-1 text-xs rounded-md shadow-md opacity-0 scale-75
        group-hover:opacity-100 group-hover:scale-100 group-hover:-top-10
        transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
        bg-[#9c27b0] text-white"
              >
                Wireframe
                <span className="absolute left-1/2 -bottom-1 w-2 h-2 bg-[#9c27b0] rotate-45 -translate-x-1/2"></span>
              </span>
            </div>
          </div>

          {/* Title + Button */}
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-gray-600 dark:text-white/60 uppercase tracking-wide">
                Specializing
              </p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Service Offering
              </h3>
            </div>
            <AnimatedIconButton href="https://google.com" />
          </div>
        </div>

        {/* Profile Links */}
        <div className="col-span-1 row-span-1 p-6 rounded-2xl bg-white/70 dark:bg-white/3 dark:hover:bg-white/5 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-lg relative hover:scale-[1.02] transition">
          <div className="flex justify-center mb-6">
            <button className="group relative">
              {/* Notification Badge */}
              <div className="absolute -right-2 -top-2 z-10">
                <div className="flex h-5 w-5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-gray-600 text-[6px] font-bold text-white">
                    new
                  </span>
                </div>
              </div>

              {/* Button Body */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-bl from-gray-900 via-gray-950 to-black p-[1px] shadow-2xl shadow-gray-500/20 group-hover:shadow-blue-400/30">
                <div className="relative flex items-center gap-4 rounded-xl bg-gray-950 px-6 py-3 transition-all duration-300 group-hover:bg-gray-950/50">
                  {/* Behance Icon */}
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-600 transition-all duration-300 group-hover:bg-[#1769FF] group-hover:scale-110">
                    <FontAwesomeIcon
                      icon={faBehance}
                      className="text-white h-5 w-5"
                    />
                    <div className="absolute inset-0 rounded-lg blur-sm transition-all duration-300 group-hover:blur-md"></div>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold text-white">
                      Behance
                    </span>
                    <span className="text-[10px] font-medium text-gray-400 group-hover:text-[#1769FF]">
                      See My Projects
                    </span>
                  </div>

                  {/* Pulsing dots */}
                  <div className="ml-auto flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-500 transition-all duration-300 group-hover:bg-[#1769FF] group-hover:scale-150"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-400 transition-all duration-300 group-hover:bg-[#1769FF]/50 group-hover:scale-150 group-hover:delay-100"></div>
                    <div className="h-1.5 w-1.5 rounded-full bg-gray-300 transition-all duration-300 group-hover:bg-[#1769FF]/30 group-hover:scale-150 group-hover:delay-200"></div>
                  </div>
                </div>

                {/* Overlay for hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-600 via-gray-700 to-black opacity-20 transition-all duration-300 group-hover:from-[#1769FF] group-hover:via-blue-500 group-hover:to-blue-800 group-hover:opacity-40"></div>
              </div>
            </button>
          </div>

          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-gray-600 dark:text-white/60 font-regular uppercase">
                Stay with me
              </p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Profile
              </h3>
            </div>
            <AnimatedIconButton href="https://www.behance.net/darshanmakwana0896" />
          </div>
        </div>

        {/* Stats */}
        <div className="col-span-2 p-6 rounded-2xl dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg flex flex-col items-center justify-center hover:scale-[1.02] transition">
          <h3 className="text-3xl font-bold">07</h3>
          <p className="text-gray-400 text-sm">Years Experience</p>
        </div>

        {/* CTA */}
        <div className="col-span-2 p-8 rounded-2xl dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:scale-[1.02] transition">
          <div></div>
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-gray-600 dark:text-white/60 font-regular uppercase">
                Contact Me
              </p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Let's Talk
              </h3>
            </div>
            <AnimatedIconButton href="https://google.com" />
          </div>
        </div>
      </div>
    </section>
  );
}
