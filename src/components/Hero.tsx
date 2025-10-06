const Hero = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-between lg:pt-48  lg:px-4 relative bg-radial-[at_50%_20%] from-[#FA9672] via-[#FAE6DC] to-white"
      id="#"
    >
      <div className="max-w-4xl px-8 ">
        <p className="lg:text-4xl text-xl text-[#3F3F3F] font-medium mb-6 ">
          Hi! Meet your trusted{" "}
          <span className="font-bold text-black">Software Engineer</span>,{" "}
          <br />
          crafting strong brands for SaaS and Web3.
        </p>
        <p className="lg:text-[155px] text-6xl cursor-pointer font-clash font-bold leading-none hover:scale-103 transition-transform duration-300 ">
          Macaulay <br /> Temitope
        </p>
      </div>
      {/* <div>
        <section className="bg-black mr-16 p-4 w-80 h-80 rounded-3xl"></section>
      </div> */}
    </div>
  );
};

export default Hero;
