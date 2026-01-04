import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";

const TechStack = () => {
  const tools = [
    { icon: <FaReact className="text-sky-400" />, name: "React" },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      name: "Next.js",
    },
    { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiFirebase className="text-yellow-500" />, name: "Firebase" },
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git / GitHub" },
    { icon: <TbBrandThreejs className="text-blue-500" />, name: "Three.js" },
  ];

  return (
    <section className="relative py-24 px-4 md:px-16  mt-40 overflow-hidden rounded-2xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#FF8159]/30 blur-[120px] rounded-full" />

      <div className="relative text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
          My Creative Toolkit
        </h2>
        <p className="max-w-2xl mx-auto text-gray-500 text-lg mb-12 leading-relaxed">
          Every idea needs the right tools to shine. These are the technologies
          I use to craft fast, accessible, and human-centered digital
          experiences from concept to deployment.
        </p>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-6xl md:text-7xl mb-3 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <p className="text-gray-600 text-lg font-medium group-hover:text-[#FF8159] transition-colors">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
