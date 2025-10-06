import okutalogo from "../assets/okutalogo.svg";
import okutaSmall from "../assets/okutaSmall1.svg";
import okutaBig from "../assets/okutaBig2.svg";
import flitaaLogo from "../assets/flitaaLogo.png";
import flitaaDesktop from "../assets/flitaaDesktop.svg";
import flitaaPhone from "../assets/flitaaPhone.svg";
import roqquLogo from "../assets/roqqulogo2.svg";
import roqquDesktop from "../assets/Frame34.png";
import bluedotLogo from "../assets/bluedotblue.svg";
import bluedotlabsBig from "../assets/bluedotBig2.svg";
import bluedotlabsSmall from "../assets/bluedotlabs.svg";

// #FAE6DC
const Work = () => {
  return (
    <div className="py-32">
      <div className="relative flex flex-col items-center justify-center">
        <p className="font-medium lg:text-3xl">From 2022 till today</p>
        <h1 className="lg:text-8xl text-4xl font-bold uppercase">
          My latest work
        </h1>
      </div>
      {/* Works */}
      <div className="lg:px-12 px-4 flex flex-col gap-3">
        {/* flitaa */}
        <div className="group border border-gray-300 my-8 hover:shadow-lg rounded-3xl p-8 pb-0 lg:pr-0 bg-[#F5F5F5] hover:bg-radial-[at_50%_20%] from-[#fec5b0] via-[#f8f8f8] to-white ">
          <div className="flex md:flex-row flex-col-reverse md:items-center items-start md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={flitaaLogo} alt="flitaaLogo" width={36} />
              <p className="lg:text-4xl text-xl font-semibold uppercase">
                Flitaa
              </p>
            </div>
            <p className="text-[#FF8159] p-2 px-4  rounded-full bg-[#FF8A5738] mr-8 text-center">
              <a href="https://flitaa.com" target="_blank">
                View website
              </a>
            </p>
          </div>
          <p className="text-xl py-8 pr-4">
            Flitaa is a modern crypto wallet and exchange built for Africa
            enabling users to buy, sell, send, and receive digital currencies
            with ease. <br /> I worked on improving the user interface and
            dashboard experience, focusing on faster transactions, cleaner
            layouts, and responsive design across devices.
          </p>
          <div className="flex items-center lg:justify-end gap-4 transition-all duration-700 mt-12">
            <img
              src={flitaaPhone}
              alt=""
              className="transition-transform duration-700 group-hover:-rotate-3 group-hover:-translate-y-3 group-hover:-translate-x-3"
            />
            <img
              src={flitaaDesktop}
              alt=""
              className="rounded-br-3xl hidden lg:block transition-transform duration-700 group-hover:rotate-3 group-hover:-translate-y-6 group-hover:-translate-x-3.5"
            />
          </div>
        </div>
        {/* roqqu */}
        <div className="group border border-gray-300 my-8 hover:shadow-lg rounded-3xl p-8 pb-0 bg-[#F5F5F5] hover:bg-radial-[at_50%_20%] from-[#fec5b0] via-[#f8f8f8] to-white">
          <div className="flex md:flex-row flex-col-reverse md:items-center items-start md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={roqquLogo} alt="roqquLogo" width={36} />
              <p className="lg:text-4xl text-lg font-semibold uppercase">
                Roqqu
              </p>
            </div>
            <p className="text-[#FF8159] p-2 px-4  rounded-full bg-[#FF8A5738] text-center">
              <a href="https://roqqupay.com" target="_blank">
                View website
              </a>
            </p>
          </div>
          <p className="text-xl py-8 pr-4">
            Roqqu is one of Africa’s leading blockchain companies, powering
            crypto trading and cross-border payments. <br /> I contributed to
            the frontend revamp, refining design components and ensuring smooth
            user interactions through better animations, modular code, and
            responsive performance.
          </p>
          <div className="flex items-center justify-center gap-4 transition-all hover:scale-100 duration-700">
            <img
              src={roqquDesktop}
              alt=""
              className="transition-transform duration-500 group-hover:scale-98"
            />
          </div>
        </div>
        {/* okuta */}
        <div className="group border border-gray-300 my-8 hover:shadow-lg rounded-3xl p-8 pb-0 lg:pr-0 bg-[#F5F5F5] hover:bg-radial-[at_50%_20%] from-[#fec5b0] via-[#f8f8f8] to-white">
          <div className="flex md:flex-row flex-col-reverse md:items-center items-start md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={okutalogo} alt="okutalogo" width={36} />
              <p className="lg:text-4xl text-lg font-semibold uppercase">
                Okutahub
              </p>
            </div>
            <p className="text-[#FF8159] p-2 px-4  rounded-full bg-[#FF8A5738] mr-8 text-center">
              <a href="https://www.okutahub.com" target="_blank">
                View website
              </a>
            </p>
          </div>
          <p className="text-xl py-8 pr-4">
            OkutaHub is a digital platform revolutionizing how mineral resources
            are discovered, managed, and traded in Africa. <br /> I designed and
            developed the frontend architecture building an intuitive interface
            that helps miners, investors, and researchers access real-time data,
            insights, and community tools for the mineral economy.
          </p>
          <div className="flex  items-center lg:justify-end gap-4 transition-all duration-300  mt-12">
            <img
              src={okutaSmall}
              alt=""
              className="transition-transform duration-700 group-hover:-rotate-3 group-hover:-translate-y-3 group-hover:-translate-x-3"
            />
            <img
              src={okutaBig}
              alt=""
              className="rounded-br-3xl hidden lg:block transition-transform duration-700 group-hover:rotate-3 group-hover:-translate-y-6 group-hover:-translate-x-3.5"
            />
          </div>
        </div>
        {/* bluedot */}
        <div className="group border border-gray-300 my-8 hover:shadow-lg rounded-3xl p-8 pb-0 lg:pr-0 bg-[#F5F5F5] hover:bg-radial-[at_50%_20%] from-[#fec5b0] via-[#f8f8f8] to-white">
          <div className="flex md:flex-row flex-col-reverse md:items-center items-start md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img src={bluedotLogo} alt="bluedotLogo" width={32} />
              <p className="lg:text-4xl text-lg font-semibold uppercase">
                Bluedot labs
              </p>
            </div>
            <p className="text-[#FF8159] p-2 px-4  rounded-full bg-[#FF8A5738] mr-8 text-center">
              <a href="https://bluedotlabs.xyz/" target="_blank">
                View website
              </a>
            </p>
          </div>
          <p className="text-xl py-8 pr-8">
            Bluedot Labs is a digital innovation studio focused on building
            smart, scalable solutions for startups. <br /> I collaborated on
            client projects, handled frontend development using React and
            Tailwind, and contributed to building pixel-perfect, accessible, and
            modern UI systems.
          </p>
          <div className="flex items-center lg:justify-end gap-4 transition-all duration-300  mt-12">
            <img
              src={bluedotlabsSmall}
              alt=""
              className="transition-transform duration-700 group-hover:-rotate-3 group-hover:-translate-y-3 group-hover:-translate-x-3"
            />
            <img
              src={bluedotlabsBig}
              alt=""
              className="rounded-br-3xl hidden lg:block transition-transform duration-700 group-hover:rotate-3 group-hover:-translate-y-6 group-hover:-translate-x-3.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
