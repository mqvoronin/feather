import assets from "../assets/assets";

const Floyd = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-0.5 bg-back">
      <div className="lg:w-3/5 w-full">
        <img
          src={assets.floyd}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="bg-primary lg:w-2/5 w-full flex flex-col items-center text-center p-8 lg:p-16">
        <img
          src={assets.floydSvg}
          alt=""
          className="pt-4 lg:pt-16"
          loading="lazy"
        />
        <h2 className="text-2xl lg:text-4xl text-white pt-6 lg:pt-8 max-w-md">
          Floyd Furniture Meets Feather Flexibility
        </h2>
        <button className="text-base lg:text-lg mt-8 lg:mt-12 bg-white rounded-4xl px-6 lg:px-10 py-3 lg:py-4 hover:scale-103 transition">
          Explore Floyd Furniture
        </button>
      </div>
    </div>
  );
};

export default Floyd;
