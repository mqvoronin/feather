import assets from "../assets/assets";

const Shop = () => {
  return (
    <div className="bg-back pt-9 pb-[70px]">
      <h1 className=" max-md:text-3xl  md:text-5xl text-center">
        Shop by Room
      </h1>

      <div
        className="mt-11 grid gap-9 px-4
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                      justify-items-center"
      >
        <div className="border-2 border-[#E9672B] cursor-pointer rounded-sm hover:shadow-[8px_8px_0_0] shadow-[color:#cbc6f4] hover:scale-105 transition w-full max-w-[280px]">
          <img
            src={assets.byRoom.byRoom1}
            alt=""
            className="w-full"
            loading="lazy"
          />
          <p className="text-center text-lg px-4 py-4">Living Room</p>
        </div>

        <div className="border-2 border-[#225DCA] cursor-pointer rounded-sm hover:shadow-[8px_8px_0_0] shadow-[color:#e7cb43] hover:scale-105 transition w-full max-w-[280px]">
          <img
            src={assets.byRoom.byRoom2}
            alt=""
            className="w-full"
            loading="lazy"
          />
          <p className="text-center text-lg px-4 py-4">Bedroom</p>
        </div>

        <div className="border-2 border-[#242947] cursor-pointer rounded-sm hover:shadow-[8px_8px_0_0] shadow-[color:#a2d4c5] hover:scale-105 transition w-full max-w-[280px]">
          <img
            src={assets.byRoom.byRoom3}
            alt=""
            className="w-full"
            loading="lazy"
          />
          <p className="text-center text-lg px-4 py-4">Home Office</p>
        </div>

        <div className="border-2 border-[#DE4333] cursor-pointer rounded-sm hover:shadow-[8px_8px_0_0] shadow-[color:#af4920] hover:scale-105 transition w-full max-w-[280px]">
          <img
            src={assets.byRoom.byRoom4}
            alt=""
            className="w-full"
            loading="lazy"
          />
          <p className="text-center text-lg px-4 py-4">Dining Room</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
