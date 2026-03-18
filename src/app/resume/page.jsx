import { Layout } from "lucide-react";

export default function Resume() {
  return (
    <div>
      <div className="max-w-6xl mx-auto mt-24 px-4 py-12 text-white">
        {/* Glass Container */}
        <div className="bg-black/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl fade-in">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-36 h-36 rounded-full border-4 border-white/30 object-cover"
            />

            <div>
              <h2 className="text-4xl font-bold font-heading uppercase">
                Senior UI/UX Developer
              </h2>
              <h3 className="text-2xl font-heading uppercase">
                Sr. UI/UX Developer
              </h3>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 my-8" />

          {/* About */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">About Me</h3>
            <p className="text-white/80 leading-relaxed">
              I am a Senior UI/UX Developer with extensive experience bridging
              design and development. I specialize in building design systems,
              conducting UX research, and delivering high-quality interfaces
              that balance aesthetics with usability and performance.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Skills & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {[
                "UI Design",
                "UX Research",
                "Design Systems",
                "Figma",
                "Tailwind CSS",
                "HTML / CSS / JavaScript",
                "React / Next.js",
                "Accessibility (WCAG)",
                "Prototyping",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>

            <div className="space-y-5">
              <div className="bg-white/10 border border-white/20 rounded-xl p-5">
                <h4 className="text-xl font-semibold">
                  Senior UI/UX Developer
                </h4>
                <p className="text-white/60">Tech Company • 2020 – Present</p>
                <ul className="list-disc list-inside mt-2 text-white/80 space-y-1">
                  <li>Led UX strategy for enterprise-scale products</li>
                  <li>Designed and maintained scalable design systems</li>
                  <li>Collaborated closely with product & engineering teams</li>
                </ul>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-xl p-5">
                <h4 className="text-xl font-semibold">UI/UX Designer</h4>
                <p className="text-white/60">Creative Studio • 2016 – 2020</p>
                <ul className="list-disc list-inside mt-2 text-white/80 space-y-1">
                  <li>Designed web & mobile interfaces</li>
                  <li>Conducted usability testing and research</li>
                  <li>Improved engagement and conversion rates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download Resume */}
          <div className="mt-12 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                         bg-white text-black font-semibold
                         hover:bg-gray-200 transition shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
