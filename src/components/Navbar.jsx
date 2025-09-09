import assets from "../assets/assets";

const Navbar = () => {
  return (
    <div className="max-sm:flex-col max-sm:gap-1.5 flex items-center justify-around pt-[33px] text-[16px] bg-back   ">
      <a
        className="hover:scale-103 cursor-pointer transition"
        href="#furniture"
      >
        Furniture
      </a>
      <a className="hover:scale-103 cursor-pointer transition" href="#why">
        Why Feather
      </a>
      <a className="hover:scale-103 cursor-pointer transition" href="#buisness">
        Feather for Business
      </a>
      <a className="hover:scale-103 cursor-pointer transition" href="">
        <img
          src={assets.logo}
          alt=""
          className="mx-[10px] lg:mx-[120px] sm:mx-[20px]"
        />
      </a>
      <a className="max-md:hidden hover:scale-103 cursor-pointer transition">
        Check if We Deliver
      </a>
      <a className="max-md:hidden hover:scale-103 cursor-pointer transition">
        Search
      </a>
      <a className="max-md:hidden hover:scale-103 cursor-pointer transition">
        Account
      </a>
      <a className="hover:scale-103 max-sm:pt-2 cursor-pointer transition">
        <img src={assets.basket} alt="" />
      </a>
    </div>
  );
};

export default Navbar;
