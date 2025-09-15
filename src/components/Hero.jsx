import assets from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex max-lg:flex-col max-lg:items-center max-lg:text-center lg:justify-between bg-back   ">
      <div className=" lg:ml-[95px] lg:mt-[125px] max-lg:mx-auto">
        <h1 className="sm:text-4xl  md:text-6xl lg:max-w-96 max-lg:mx-auto max-sm:pt-8 max-lg:pt-16">
          Curated and Convenient
        </h1>
        <p className="sm:text-xs md:text-[16px] lg:text-lg mt-5 sm:max-w-md md:mx-auto lg:max-w-[523px]">
          We've built our offerings on the principle that everyone deserves
          high-quality design without the high cost. We offer elevated rental
          inventory, to transform your space. Reuse and recycle - we make the
          decision as light as a “feather”
        </p>

        <a
          className="sm:text-xs md:text-[16px] lg:text-lg flex items-center justify-center bg-primary rounded-4xl 
        mt-14 px-8 py-4 max-lg:mx-auto max-w-40  max-h-14 cursor-pointer hover:scale-103 transition-all "
        >
          Get Started
        </a>
      </div>
      <div className="lg:items-end max-lg:mx-auto">
        <img src={assets.headerImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
