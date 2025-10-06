import TechStack from "./TechStack";
import profile1 from "../assets/profile1.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpeg";
import profile4 from "../assets/profile4.jpeg";
import profile5 from "../assets/profile5.jpeg";
import { useEffect, useState } from "react";

const Story = () => {
  const [isVisible, setIsVisible] = useState(false);
  const circleItems = [profile1, profile2, profile3, profile4, profile5];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="p-2 pt-16">
      <p className="text-left font-bold text-3xl lg:text-7xl md:pl-8 px-2">
        I don't hide in the dark <br />I build where light reaches everyone
      </p>

      {/* Bio and story of how i got into programming */}
      <div className="flex lg:flex-row flex-col gap-4 md:m-8 m-2 mt-16">
        <div className="bg-gray-100 lg:w-[40%] rounded-2xl p-4 text-xl md:text-2xl text-gray-500">
          <p className="mb-2">
            Growing up in Nigeria, my journey into technology started with
            curiosity wanting to understand how ideas become real things.
          </p>
          <p className="mb-2">
            From small design experiments to writing my first lines of code, I
            found joy in crafting experiences people could feel and use. What
            began as creative play soon became purpose: using technology to make
            life simpler, fairer, and smarter for everyday Africans.
          </p>
          <p className="mb-2">
            Along the way, I've built products for startups like{" "}
            <b className="text-black">Flitaa</b>,
            <b className="text-black"> Roqqu</b> and{" "}
            <b className="text-black"> Accendis</b>, turning ideas into living
            interfaces. Each project taught me balance between design and logic,
            clarity and creativity.
          </p>
          <p className="mb-2">
            My mission: to build digital tools that empower learning, business,
            and everyday life for the common man, not just the connected few.
          </p>
          <p className="text-[#FF8159] text-center my-8 rotate-0 italic tracking-wide animate-fade-in text-shadow-sm text-shadow-[#FF8159] animate-pulse">
            A brighter story, still being written.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-8 lg:w-[60%] flex relative overflow-hidden">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-126 md:h-126">
              {/* Center circle */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-[#FF8159] to-[#ff4d1a] rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-2xl transition-all duration-1000 ${
                  isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <div className="text-center">
                  <div className="text-5xl mb-1">👩🏼‍💻</div>
                  <div className="text-sm">Me</div>
                </div>
              </div>

              {/* Orbiting items */}
              {circleItems.map((item, index) => {
                const angle = (index * 360) / circleItems.length - 45;
                const delay = index * 100;
                const orbitRadius = window.innerWidth < 768 ? 100 : 200;

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: isVisible
                        ? `rotate(${angle}deg)translateX(${orbitRadius}px) translateY(0px)`
                        : "rotate(0deg) translateX(0) translateY(0)",
                      transition: `all 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                    }}
                  >
                    <div
                      className="w-20 h-20 md:w-48 md:h-48 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden border-4 border-white"
                      style={{
                        transform: `rotate(-${angle}deg)`,
                        animation: isVisible
                          ? `pulse 3s ease-in-out infinite ${delay * 2}ms`
                          : "none",
                          // animationDelay: `${delay}ms`,
                      }}
                    >
                      <img
                        src={item}
                        alt={`Profile ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* tech stack */}
      <TechStack />
    </div>
  );
};

export default Story;