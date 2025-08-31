import AnimatedIconButton from "@/components/animatedButton/animatedButton";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CardGrid from "@/components/cardGrids/cadgrid";
export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="w-full lg:max-w-[1360px] items-center text-center mx-auto px-4 py-70">
          <div
            className="px-6 py-3 rounded-lg inline-block mb-4 
        bg-blue/5 
        backdrop-blur-md 
        border border-blue/20 
        shadow-lg fade-in"
          >
            <h5 className="text-xl font-semibold text-[#006fee]">
              UI / UX Developer
            </h5>
          </div>

          <h1 className="text-9xl font-heading uppercase font-bold fade-in">
            portfolio
          </h1>

          {/* Mouse Scroll Indicator */}
          <a href="#next-section" className="mt-12 inline-block cursor-pointer">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative">
              <span className="w-1 h-2 bg-gray-400 rounded-full absolute top-2 animate-bounce"></span>
            </div>
          </a>
        </div>
      </div>

      {/* Card Grid Section */}
      <CardGrid />
    </>
  );
}
