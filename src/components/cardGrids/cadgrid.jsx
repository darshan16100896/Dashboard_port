import AnimatedIconButton from "@/components/animatedButton/animatedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import Headshot from "../../../public/images/headshot-image.webp";

import ProjectImage from "../../../public/images/portfolio-2.webp";
import Image from "next/image";
import StatsCard from "../stats";
import ServicesOffering from "../serviceOffering/page";
import RecentWorkCard from "../RecentWorkCard/page";
import ArticleCard from "../linkedInArticle/page";

export default function CardGrid() {
  return (
    <section
      className="w-full text-white py-12 sm:py-16 fade-in"
      id="next-section"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 sm:gap-6">
        {/* Profile Card (taller) */}
        <div
          className="col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 p-4 sm:p-6 rounded-2xl min-h-[120px] sm:min-h-[140px]  bg-[#f7f7f7]
  dark:bg-white/5 dark:hover:bg-white/10 
  backdrop-blur-md border border-white/10 shadow-lg 
  transition hover:scale-[1.01]"
        >
          <div className="flex flex-col sm:flex-col md:flex-row gap-6 md:gap-10 items-center">
            {/* IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-full md:h-auto rounded-xl overflow-hidden">
                <Image
                  src={Headshot}
                  alt="Darshan Makwana"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              {/* NAME */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase mb-3 sm:mb-4 font-heading text-gray-900 dark:text-[#F9FAFB] leading-tight">
                Darshan <br className="hidden sm:block" /> Makwana
              </h2>

              {/* TAGLINE */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 dark:text-[#C7D2FE]">
                Designing intuitive digital experiences that feel effortless.
              </p>

              {/* EXPERIENCE */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-[#C7D2FE]">
                6+ years crafting user-focused products for startups & growing
                brands.
              </p>

              {/* STATUS BADGE */}
              <div
                className="py-2 px-4 flex items-center justify-center md:justify-start bg-emerald-50
        dark:bg-[#031f1c] gap-2 border border-gray-300 dark:border-[#073d38] 
        rounded-md w-fit mx-auto md:mx-0 mt-4"
              >
                <div className="bg-emerald-400 dark:bg-[#2ec4b6] h-2 w-2 rounded-full animate-pulse"></div>

                <p className="text-xs sm:text-sm text-emerald-400 dark:text-[#2ec4b6]">
                  Available for freelance
                </p>
              </div>

              {/* SPECIALIZATION */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-[#C7D2FE] mt-4">
                Specializing in SaaS, Web Apps & Modern UI Systems
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE TOP SMALL */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 relative overflow-hidden rounded-2xl bg-[#f7f7f7] dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
          <RecentWorkCard
            title="Redesigned onboarding flow"
            description="Redesigned onboarding flow, driving a 28% increase in completion rate"
            link="https://minddeft.com"
          />
        </div>

        {/* BOX 1 */}

        <ArticleCard
          title="UI/UX Designer, Graphic Designer..."
          description="Let's break it down: In the world of digital design..."
          link="https://www.linkedin.com/posts/darshan-makwana-4a743514a_uidesign-uxdesign-graphicdesign-activity-7368707492282806275-WFN4?utm_source=share&utm_medium=member_desktop&rcm=ACoAACQD538BfbR4EKR77Cs1Oma0ubq9AtqjJ80"
        />

        {/* PROJECTS CARD */}
        <div
          className="
  group
  p-4 sm:p-5 md:p-6
  rounded-2xl
  bg-[#f7f7f7] dark:bg-white/3 dark:hover:bg-white/5
  backdrop-blur-md border border-white/10 
  shadow-lg
  flex flex-col justify-between
  hover:scale-[1.02] active:scale-[0.98] transition
"
        >
          {/* IMAGE */}
          <div className="flex justify-center items-center mb-4 sm:mb-6">
            <div className="w-full h-32 sm:h-40 md:h-48 relative">
              <Image
                src={ProjectImage}
                alt="Projects Icon"
                fill
                className="object-contain transition duration-300 group-hover:scale-105"
                quality={100}
              />
            </div>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="para-label">showcase</p>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                Projects
              </h3>
            </div>

            <AnimatedIconButton href="/portfolio" />
          </div>
        </div>

        {/* Articles card */}
        <div
          className="col-span-1 row-span-1
  p-4 sm:p-5 md:p-6
  rounded-2xl
  bg-[#f7f7f7] dark:bg-white/3 dark:hover:bg-white/5
  backdrop-blur-md border border-gray-300 dark:border-white/10
  shadow-lg
  flex flex-col justify-between
  hover:scale-[1.02] active:scale-[0.98] transition group"
        >
          <div className="flex justify-center mb-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
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
                <div className="relative flex items-center gap-4 rounded-xl bg-gray-950 px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 group-hover:bg-gray-950/50">
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
            </a>
          </div>

          <div
            className="
    flex items-center justify-between
    gap-3
  "
          >
            <div>
              <p className="para-label">UX Insights</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                LinkedIn
              </h3>
            </div>

            <AnimatedIconButton href="https://www.behance.net/darshanmakwana0896" />
          </div>
        </div>

        {/* Service Offering (wide card) */}
        <ServicesOffering />

        {/* Profile Links */}
        <div
          className="
  col-span-1 row-span-1
  p-4 sm:p-5 md:p-6
  rounded-2xl
  bg-[#f7f7f7] dark:bg-white/3 dark:hover:bg-white/5
  backdrop-blur-md border border-gray-300 dark:border-white/10
  shadow-lg
  flex flex-col justify-between
  hover:scale-[1.02] active:scale-[0.98] transition group
"
        >
          {/* TOP CONTENT */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <button className="group relative w-full max-w-[260px]">
              {/* Notification Badge */}
              <div className="absolute -right-2 -top-2 z-10">
                <div className="flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-gray-600 text-[6px] font-bold text-white">
                    new
                  </span>
                </div>
              </div>

              {/* Button Body */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-bl from-gray-900 via-gray-950 to-black p-[1px] shadow-xl group-hover:shadow-blue-400/30">
                <div
                  className="
          flex items-center gap-3 sm:gap-4
          rounded-xl bg-gray-950
          px-4 sm:px-6 py-2.5 sm:py-3
          transition-all duration-300
          group-hover:bg-gray-950/50
        "
                >
                  {/* Icon */}
                  <div
                    className="
            flex h-8 w-8 sm:h-10 sm:w-10
            items-center justify-center
            rounded-lg bg-gray-600
            transition-all duration-300
            group-hover:bg-[#1769FF] group-hover:scale-110
          "
                  >
                    <FontAwesomeIcon
                      icon={faBehance}
                      className="text-white h-4 w-4 sm:h-5 sm:w-5"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col items-start">
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Behance
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-medium text-gray-400 group-hover:text-[#1769FF]">
                      See My Projects
                    </span>
                  </div>

                  {/* Dots */}
                  <div className="ml-auto flex items-center gap-1">
                    <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-gray-500 group-hover:bg-[#1769FF] group-hover:scale-150 transition"></div>
                    <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-gray-400 group-hover:bg-[#1769FF]/50 group-hover:scale-150 transition delay-100"></div>
                    <div className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-gray-300 group-hover:bg-[#1769FF]/30 group-hover:scale-150 transition delay-200"></div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-600 via-gray-700 to-black opacity-20 transition-all duration-300 group-hover:from-[#1769FF] group-hover:via-blue-500 group-hover:to-blue-800 group-hover:opacity-40"></div>
              </div>
            </button>
          </div>

          {/* BOTTOM CONTENT */}
          <div
            className="
    flex items-center justify-between
    gap-3
  "
          >
            <div>
              <p className="para-label">Stay with me</p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Profile
              </h3>
            </div>

            <AnimatedIconButton href="https://www.behance.net/darshanmakwana0896" />
          </div>
        </div>

        {/* Stats */}
        <div className="bg-[#f7f7f7] shadow-lg col-span-1 sm:col-span-2 lg:col-span-2 p-6 rounded-2xl dark:bg-white/2 dark:hover:bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center hover:scale-[1.02] active:scale-[0.98] transition">
          <StatsCard />
        </div>

        {/* CTA */}
        <div className="relative overflow-hidden bg-[#f7f7f7] col-span-1 sm:col-span-2 lg:col-span-2 p-8 border rounded-2xl border-white/10 dark:bg-white/2 dark:hover:bg-white/5 shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 group">
          {/* 1. Premium Ambient Background Glow */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/10 blur-[80px] group-hover:bg-blue-600/20 transition-all duration-500" />

          <div className="relative z-10 flex flex-col justify-between h-full">
            {/* 2. Top Section: Added a premium icon or decorative element */}
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-blue-500"
                >
                  <path
                    d="M8 9h8m-8 4h6m4-9a3 3 0 013 3v7a3 3 0 01-3 3h-4l-4 4-4-4H5a3 3 0 01-3-3V7a3 3 0 013-3h14z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* 3. Bottom Section: Text and Action */}
            <div className="mt-12 flex items-end justify-between gap-4">
              <div>
                <p className="para-label">Available for Projects</p>
                <h3 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Let's Talk.
                </h3>
              </div>

              {/* Your existing button component */}
              <div className="mb-1">
                <AnimatedIconButton href="/contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
