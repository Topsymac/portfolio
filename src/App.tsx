import "./App.css";
import Chat from "./components/Chat";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Work from "./components/Work";
import { useEffect, useState } from "react";
import { FcBusinesswoman } from "react-icons/fc";

function App() {
  const [activeSection, setActiveSection] = useState("#");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
          window.history.replaceState(null, "", `#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const links = [
    { label: "Work", href: "#work" },
    { label: "Story", href: "#story" },
    { label: "Chat", href: "#chat" },
  ];

  return (
    <div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center relative ">
        <ul className="bg-black flex items-center justify-center gap-6 mt-4 text-[#8B8B8B] text-lg rounded-full w-fit fixed top-0 z-[999] p-2 pl-4">
          <a href="#"><FcBusinesswoman size={30} /></a>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-all duration-300 relative pb-1 ${
                  activeSection === link.href
                    ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:rounded-full"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="bg-[#FF8A5738] px-3 rounded-full text-[#FF8159] cursor-pointer">
            Start Project
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-[1000]">
        <button
          className="text-white bg-black p-2 rounded"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full bg-black p-2 z-[999]">
          <div className="bg-black text-white m-2 p-4 rounded space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg ${
                  activeSection === link.href ? "text-[#FF8159]" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#start"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-[#FF8A5738] text-[#FF8159] px-3 py-2 rounded-full"
            >
              Start Project
            </a>
          </div>
        </div>
      )}

      <section id="">
        <Hero />
      </section>
      <div className="bg-radial-[at_50%_10%] from-[#f8eae2] via-[#ffffff] to-white py-8"></div>
      <section id="work">
        <Work />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="chat">
        <Chat />
      </section>
    </div>
  );
}

export default App;
