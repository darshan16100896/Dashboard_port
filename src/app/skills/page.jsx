import GlassCard from "@/components/glasscard/page";
import { SkillCard } from "@/components/skillCard/page";

const skills = [
  { image: "/images/adobeps.webp", title: "Adobe Photoshop" },
  { image: "/images/adobeil.webp", title: "Adobe Illustrator" },
  { image: "/images/figma.webp", title: "Figma Design" },
  { image: "/images/xd.webp", title: "Adobe XD" },
  { image: "/images/sketch.webp", title: "Sketch" },
  { image: "/images/invision.webp", title: "InVision" },
  { image: "/zeplin.webp", title: "Zeplin" },
  { image: "/canva.webp", title: "Canva" },
];

export default function Skills() {
  return (
    <div className="w-full py-16 justify-center">
      <div className="w-full items-center text-center mx-auto px-4 py-8">
        <div className="py-10">
          <h1 className="text-9xl font-heading uppercase font-bold fade-in">
            Skills
          </h1>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 px-25">
            {skills.map((skill, index) => (
              <SkillCard key={index} image={skill.image} title={skill.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
