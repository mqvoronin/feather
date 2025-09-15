import { useEffect, useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["furniture", "why", "buisness"];
      let current = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActive(current);
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="pt-[33px]  bg-back py-4 px-4 sm:px-8 sticky top-0 z-50 shadow-sm">
        <div className="  flex  max-w-screen-xl mx-auto max-sm:flex-col max-sm:gap-1.5  items-center justify-between px-4 sm:px-8 text-[16px]   ">
          <div className=" hidden lg:flex items-center justify-start flex-1 gap-8 ">
            <a
              onClick={() => setActive("furniture")}
              className={`hover:scale-103 cursor-pointer transition ${
                active === "furniture" ? "text-primary font-semibold" : ""
              }`}
              href="#furniture"
            >
              Furniture
            </a>
            <a
              onClick={() => setActive("why")}
              className={`hover:scale-103 cursor-pointer transition whitespace-nowrap ${
                active === "why" ? "text-primary font-semibold" : ""
              }`}
              href="#why"
            >
              Why Feather
            </a>
            <a
              onClick={() => setActive("buisness")}
              className={`hover:scale-103 cursor-pointer transition whitespace-nowrap ${
                active === "buisness" ? "text-primary font-semibold" : ""
              }`}
              href="#buisness"
            >
              Feather for Business
            </a>
          </div>
          <a className=" hover:scale-103 cursor-pointer transition" href="">
            <img
              src={assets.logo}
              alt="Logo"
              className="mx-[10px]  sm:mx-[20px] min-w-[120px] h-auto shrink-0"
            />
          </a>
          <div className=" hidden lg:flex items-center justify-end flex-1 gap-8">
            <a className=" hover:scale-103 cursor-pointer transition whitespace-nowrap">
              Check if We Deliver
            </a>
            <a className=" hover:scale-103 cursor-pointer transition">Search</a>
            <a className="hover:scale-103 cursor-pointer transition">Account</a>
            <a className="hover:scale-103 max-sm:pt-2  max-md:mt-6 cursor-pointer transition max-lg:ml-2">
              <img
                src={assets.basket}
                alt=""
                className="shrink-0 min-w-[24px] w-6 h-6 object-contain"
              />
            </a>
          </div>

          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-black transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>

        <div
          className={`lg:hidden flex flex-col items-center gap-4 text-[16px] 
    overflow-hidden transform origin-top transition-all duration-300 ease-in-out
    ${
      isOpen
        ? "opacity-100 scale-y-100 max-h-96"
        : "opacity-0 scale-y-0 max-h-0"
    }`}
        >
          <a
            href="#furniture"
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Furniture
          </a>
          <a
            href="#why"
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Why Feather
          </a>
          <a
            href="#buisness"
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Feather for Business
          </a>
          <a
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Check if We Deliver
          </a>
          <a
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Search
          </a>
          <a
            className="hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            Account
          </a>
          <a onClick={() => setIsOpen(false)}>
            <img src={assets.basket} alt="Basket" />
          </a>
        </div>
      </nav>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center 
          transition-opacity duration-300 ease-in-out hover:scale-110"
        >
          <img src={assets.arrow} alt="arrow up" className="w-8 h-8 " />
        </button>
      )}
    </>
  );
};

export default Navbar;
