import AnimatedIconButton from "@/components/animatedButton/animatedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import PulseGrid from "../baclgroundripple/backgroundrippleeffect";

export default function CardGrid() {
  return (
    <section className="w-full text-white py-16" id="next-section">
      <div className="max-w-[1360px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {/* Profile Card (taller) */}
        <div className="col-span-2 row-span-2 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition flex flex-col justify-center">
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
        <div className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition flex justify-center">
          <PulseGrid />
          {/* Card Content */}
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-white/60 font-regular uppercase">
                Articles
              </p>
              <h3 className="text-3xl font-bold">LinkedIn</h3>
            </div>
            <AnimatedIconButton href="https://google.com" />
          </div>
        </div>

        {/* Two stacked boxes */}
        <div className=" p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg hover:scale-[1.02] transition flex flex-col justify-center row-span-1">
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
            <AnimatedIconButton href="https://google.com" />
          </div>
        </div>

        {/* Articles card */}
        <div className="col-span-1 row-span-1 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg relative hover:scale-[1.02] transition">
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-white/60 font-regular uppercase">
                Articles
              </p>
              <h3 className="text-3xl font-bold">LinkedIn</h3>
            </div>
            <AnimatedIconButton href="https://google.com" />
          </div>
        </div>

        {/* Service Offering (wide card) */}
        <div className="col-span-2 row-span-1 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg relative transform transition-transform duration-300 ease-out hover:scale-[1.02]">
          {/* Service Icons Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-20">
            {/* UI/UX Design Excellence */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 shadow-md">
                <i className="fas fa-paint-brush text-[#006fee] text-2xl"></i>
              </div>
              <p className="mt-2 text-sm text-white">UI/UX Design</p>
            </div>

            {/* Interactive Prototyping */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 shadow-md">
                <i className="fas fa-vial text-[#006fee] text-2xl"></i>
              </div>
            </div>

            {/* Responsive Front-End */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 shadow-md">
                <i className="fas fa-code text-[#006fee] text-2xl"></i>
              </div>
              <p className="mt-2 text-sm text-white">Front-End</p>
            </div>

            {/* Visual Branding */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 shadow-md">
                <i className="fas fa-palette text-[#006fee] text-2xl"></i>
              </div>
              <p className="mt-2 text-sm text-white">Branding</p>
            </div>

            {/* Design Systems */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white/10 border border-white/20 shadow-md">
                <i className="fas fa-layer-group text-[#006fee] text-2xl"></i>
              </div>
              <p className="mt-2 text-sm text-white">Design Systems</p>
            </div>
          </div>

          {/* Title + Button */}
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-white/60 uppercase tracking-wide">
                Specializing
              </p>
              <h3 className="text-3xl font-bold text-white">
                Service Offering
              </h3>
            </div>
            <AnimatedIconButton href="https://google.com" />
          </div>
        </div>

        {/* Profile Links */}
        <div className="col-span-1 row-span-1 p-6 rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-lg relative hover:scale-[1.02] transition">
          <div className="absolute bottom-8 left-6 right-6 flex justify-between items-center">
            <div className="w-1/2">
              <p className="text-[14px] text-gray-600 dark:text-white/60 font-regular uppercase">
                Stay with me
              </p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Profile
              </h3>
            </div>
            <AnimatedIconButton href="https://google.com" />
          </div>
        </div>

        {/* Stats */}
        <div className="col-span-2 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg flex flex-col items-center justify-center hover:scale-[1.02] transition">
          <h3 className="text-3xl font-bold">07</h3>
          <p className="text-gray-400 text-sm">Years Experience</p>
        </div>

        {/* CTA */}
        <div className="col-span-2 p-8 rounded-2xl bg-gradient-to-r from-[#006fee]/30 to-[#b249f8]/30 backdrop-blur-lg border border-white/10 shadow-xl text-center hover:scale-[1.02] transition">
          <h2 className="text-3xl font-bold">
            Let's work <span className="text-blue-400">together.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
