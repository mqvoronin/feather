import assets from "../assets/assets";

const Bestsellers = () => {
  return (
    <div className="bg-back pb-36 px-4">
      <h1 className="pt-28 text-4xl text-center">Shop our Bestsellers</h1>

      <div className="pt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        <button className="bg-white hover:-translate-y-3 duration-300 shadow-primary hover:shadow-lg rounded-xl">
          <img
            src={assets.bestsellers.best1}
            alt=""
            className="pt-10 px-8 mx-auto"
          />
          <h2 className="pt-8 text-center text-lg">Cooper Dining Table</h2>
          <p className="pt-2 pb-10 text-center">
            rent for <span className="text-primary">$15/mo</span>
            <br /> or buy for <span className="text-[#4F4F4F]">$359</span>{" "}
            <br /> $314
          </p>
        </button>

        <button className="bg-white hover:-translate-y-3 duration-300 shadow-primary hover:shadow-lg rounded-xl">
          <img
            src={assets.bestsellers.best2}
            alt=""
            className="pt-10 px-8 mx-auto"
          />
          <h2 className="pt-8 text-center text-lg">Croft Media Console</h2>
          <p className="pt-2 pb-10 text-center">
            rent for <span className="text-primary">$35/mo</span>
            <br /> or buy for <span className="text-[#4F4F4F]">$839</span>
            <br /> $739
          </p>
        </button>

        <button className="bg-white hover:-translate-y-3 duration-300 shadow-primary hover:shadow-lg rounded-xl">
          <img
            src={assets.bestsellers.best3}
            alt=""
            className="pt-10 px-8 mx-auto"
          />
          <h2 className="pt-8 text-center text-lg">Essex Dining Chair</h2>
          <p className="pt-2 pb-10 text-center">
            rent for <span className="text-primary">$18/mo</span>
            <br /> or buy for <span className="text-[#4F4F4F]">$429</span>
            <br /> $379
          </p>
        </button>

        <button className="bg-white hover:-translate-y-3 duration-300 shadow-primary hover:shadow-lg rounded-xl">
          <img
            src={assets.bestsellers.best4}
            alt=""
            className="pt-10 px-8 mx-auto"
          />
          <h2 className="pt-8 text-center text-lg">Ludlow Sofa</h2>
          <p className="pt-2 pb-10 text-center">
            rent for <span className="text-primary">$52/mo</span>
            <br /> or buy for <span className="text-[#4F4F4F]">$1249</span>
            <br /> $1099
          </p>
        </button>
      </div>

      <div className="flex justify-center pt-14">
        <button className="text-primary text-lg text-center hover:underline">
          Shop All Furniture
        </button>
      </div>
    </div>
  );
};

export default Bestsellers;
