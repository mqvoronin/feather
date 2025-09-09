import assets from "../assets/assets";

const Pain = () => {
  return (
    <div>
      <div className="bg-[#F6CFCA] pt-14 pb-20 px-4">
        <div className="flex justify-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-snug max-w-4xl text-center">
            Ease the pain of moving from apartment to apartment.
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          <img
            src={assets.brands.brand1}
            alt="brand1"
            className="max-h-12 object-contain"
          />
          <img
            src={assets.brands.brand2}
            alt="brand2"
            className="max-h-12 object-contain"
          />
          <img
            src={assets.brands.brand3}
            alt="brand3"
            className="max-h-12 object-contain"
          />
          <img
            src={assets.brands.brand4}
            alt="brand4"
            className="max-h-12 object-contain"
          />
          <img
            src={assets.brands.brand5}
            alt="brand5"
            className="max-h-12 object-contain"
          />
        </div>
      </div>

      <div className="bg-back text-center pb-32 px-4">
        <div className="flex justify-center">
          <img
            src={assets.girl}
            alt="girl"
            className="pt-16 max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>
        <p className="pt-10 text-lg sm:text-2xl max-w-xl mx-auto">
          Feather is the stress-free way to furnish your home
        </p>
        <button className="mt-10 py-3 px-8 sm:py-4 sm:px-10 text-base sm:text-lg bg-primary rounded-4xl hover:scale-105 transition">
          Shop Furniture
        </button>
      </div>
    </div>
  );
};

export default Pain;
