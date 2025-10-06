import instagram from "../assets/instagram.avif";
import twitter from "../assets/twitter.avif";
import linkedin from "../assets/linkedin.avif";
import github from "../assets/github.png";
import email from "../assets/mail.webp";

const Chat = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background pulse animation */}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#fa9b78] via-[#fcbf49] to-[#ff6f61] animate-gradient-move opacity-20 blur-3xl"></div> */}

      <div className="flex flex-col items-center justify-center my-32 relative z-10">
        <p className="text-gray-600 text-center mb-16 -rotate-6 italic tracking-wide animate-fade-in">
          Tap this 'tiny' button to connect !
        </p>

        <a
          href="mailto:macaulaytemitope360@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative rotate-2 bg-gradient-to-r from-[#ff9966] via-[#fa9b78] to-[#ff5e62] text-white text-3xl lg:text-8xl font-extrabold rounded-full px-20 py-6 border-[6px] border-transparent hover:border-white shadow-xl hover:shadow-[0_0_35px_#fa9b78] transition-all duration-500 ease-out hover:scale-110 cursor-alias"
        >
          <span className="relative z-10">Connect</span>
          {/* Subtle background glow animation */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff9966] via-[#fa9b78] to-[#ff5e62] opacity-30 blur-xl animate-pulse"></span>
        </a>
      </div>

      <div className="lg:mx-24 mx-4 bg-white/70 backdrop-blur-md border border-gray-300 flex lg:flex-row flex-col items-center justify-center lg:justify-between p-6 rounded-3xl shadow-md transition-all duration-300 hover:shadow-lg">
        <a
          href="mailto:macaulaytemitope360@gmail.com"
          className="hover:underline flex items-center gap-2 lg:text-lg text-gray-700 transition-transform hover:scale-105"
        >
          <img src={email} alt="email" width={40} className="rounded-full" />
          macaulaytemitope360@gmail.com
        </a>

        <div className="flex items-center gap-5 mt-4 lg:mt-0">
          {[ 
            { href: "http://instagram.com/topsymac", img: instagram, alt: "instagram" },
            { href: "http://twitter.com/macaulaytopsy", img: twitter, alt: "twitter" },
            { href: "https://www.linkedin.com/in/macaulay-temitope-584001215", img: linkedin, alt: "linkedin" },
            { href: "https://github.com/Topsymac", img: github, alt: "github" },
          ].map(({ href, img, alt }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-125 hover:-rotate-3 duration-300"
            >
              <img
                src={img}
                alt={alt}
                width={40}
                className={`rounded-xl ${
                  alt === "github" ? "bg-white p-1" : ""
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
