import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBugSlash,
  faCode,
  faPaintBrush,
  faSwatchbook,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faPaintBrush,
    label: "UI/UX Design",
    color: "#006fee",
  },
  {
    icon: faSwatchbook,
    label: "Design Systems",
    color: "#ff9800",
  },
  {
    icon: faCode,
    label: "Front-End UI Development",
    color: "#4cafef",
  },
  {
    icon: faBugSlash,
    label: "UI Performance & Optimization",
    color: "#e4405f",
  },
  {
    icon: faWandMagicSparkles,
    label: "UX Optimization",
    color: "#9c27b0",
  },
];

export default function ServicesOffering() {
  return (
    <div className="col-span-2 p-4 sm:p-6 rounded-2xl dark:bg-white/2 bg-[#f7f7f7] backdrop-blur-md border border-gray-300 dark:border-white/10 shadow-lg hover:scale-[1.02] transition">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 mb-16">
        {services.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center group"
          >
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl border border-white/20 shadow-md transition-all duration-300"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-lg sm:text-xl md:text-2xl text-gray-800 dark:text-white group-hover:scale-110 transition"
              />
            </div>

            {/* Tooltip */}
            <span
              className="absolute -top-9 px-2 py-1 text-xs rounded-md opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition text-white whitespace-nowrap"
              style={{ backgroundColor: item.color }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
        <div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60 uppercase">
            Specializing
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Service Offering
          </h3>
        </div>
      </div>
    </div>
  );
}
