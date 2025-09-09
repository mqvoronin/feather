import assets from "../assets/assets";

const Furniture = () => {
  return (
    <div className="mt-32 pb-56" id="furniture">
      <div className="text-center mb-24 px-4">
        <h2 className="text-4xl">
          “Keeping Furniture in Homes and out of Landfills."
        </h2>
        <p className="text-2xl mt-4 max-w-4xl mx-auto">
          This isn’t just another rental company - We’re elevating the future of
          furniture by replacing the commitment of ownership with a culture of
          sharing in a way that’s curated, convenient, and sustainable.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10">
        <div className="pt-10 lg:pt-28 max-w-96 lg:ml-20 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl mb-5">
            Enjoy a fully furnished space in less than week
          </h2>
          <p className="text-lg mb-8">
            Feather furniture is available to be delivered and assembled in New
            York City, Los Angeles and San Francisco.
          </p>
          <button className="text-lg text-primary">Explore Furniture</button>
        </div>
        <img
          src={assets.enjoy}
          alt=""
          className="max-w-[616px] w-full lg:pt-8"
        />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 pt-16 mb-16">
        <img src={assets.garage} alt="" className="w-full max-w-lg" />
        <div className="pt-10 lg:pt-44 max-w-md lg:mr-24 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl mb-5">Garage Sale - 40% & Up</h2>
          <p className=" text-xs sm:text-lg mb-6">
            Our Garage Sale is open! Savings start at 40% on favorite retired
            pieces. Find dressers, sofas, decor, and more to make the year one
            to remember.
          </p>
          <p className="text-lg mb-8">
            Terms and conditions apply.{" "}
            <a className="underline cursor-pointer">View here.</a>
          </p>
          <button className="text-lg text-primary">Shop Now</button>
        </div>
      </div>

      <div
        className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 mb-16"
        id="buisness"
      >
        <div className="pt-10 lg:pt-16 lg:ml-20 max-w-md text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl mb-5">
            Furniture for business, made simple.
          </h2>
          <p className="text-xs sm:text-lg mb-8">
            Say goodbye to cost, complexity, and commitment of furniture.
            Feather makes it easy with affordable rental plans, white glove
            delivery and best-in-class account service.
          </p>
          <button className="text-lg text-primary">
            Visit Feather For Business
          </button>
        </div>
        <img src={assets.furniture} alt="" className="w-full max-w-lg" />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10">
        <img src={assets.furniture2} alt="" className="w-full max-w-lg" />
        <div
          className="pt-10 lg:pt-44 max-w-md lg:mr-24 text-center lg:text-left"
          id="why"
        >
          <h2 className="text-3xl lg:text-4xl mb-5">
            Never assemble furniture again.
          </h2>
          <p className="text-xs sm:text-lg mb-8">
            We move a lot. There are countless floor plans and roommates (oh,
            and your evolving tastes) between here and there. With Feather,
            furnish your space without breaking a sweat or reaching for a
            screwdriver.
          </p>
          <button className="text-lg text-primary">How Feather Works</button>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
