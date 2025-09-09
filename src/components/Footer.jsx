import assets from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#F3F0EC]">
      <div className="pt-20 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-12 max-w-7xl mx-auto">
        <div>
          <a className="text-lg uppercase cursor-pointer inline-block shadow-primary hover:shadow-2xs duration-300 transition">
            Furniture
          </a>
          <div className="gap-y-2 mt-6 flex flex-col">
            <a className="text-lg cursor-pointer hover:scale-103 duration-300">
              Packages
            </a>
            <a className="text-lg cursor-pointer hover:scale-103 duration-300">
              Living Room
            </a>
            <a className="text-lg cursor-pointer hover:scale-103 duration-300">
              Bedroom
            </a>
            <a className="text-lg cursor-pointer hover:scale-103 duration-300">
              Dining
            </a>
          </div>
        </div>

        <div>
          <a className="text-lg uppercase cursor-pointer inline-block shadow-primary hover:shadow-2xs duration-300 transition">
            About
          </a>
          <div className="gap-y-2 mt-6 flex flex-col">
            <a className="text-lg cursor-pointer hover:scale-103 duration-300">
              How it Works
            </a>
            <a className="text-lg cursor-pointer hover:scale-103 duration-300">
              About Feather
            </a>
            <a className="text-lg cursor-pointer hover:scale-103 duration-300">
              Feather Furniture
            </a>
            <a className="text-lg cursor-pointer hover:scale-103 duration-300">
              Reviews
            </a>
          </div>
        </div>

        <div>
          <a className="text-lg uppercase cursor-pointer inline-block shadow-primary hover:shadow-2xs duration-300 transition">
            Help
          </a>
          <div className="gap-y-2 mt-6 flex flex-col">
            <p className="text-lg cursor-pointer hover:scale-103 duration-300">
              FAQs
            </p>
            <p className="text-lg cursor-pointer hover:scale-103 duration-300">
              Contact us
            </p>
            <p className="text-lg cursor-pointer hover:scale-103 duration-300">
              Privacy Policy
            </p>
            <p className="text-lg cursor-pointer hover:scale-103 duration-300">
              Terms
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg uppercase mb-6">Feather on Social Media</h2>
          <div className="flex gap-4 mb-14">
            <img
              src={assets.social.facebook}
              alt=""
              className="cursor-pointer hover:bg-primary transition duration-500 rounded-3xl"
            />
            <img
              src={assets.social.inst}
              alt=""
              className="cursor-pointer hover:bg-primary transition duration-500 rounded-3xl"
            />
            <img
              src={assets.social.linkIN}
              alt=""
              className="cursor-pointer hover:bg-primary transition duration-500 rounded-3xl"
            />
            <img
              src={assets.social.pint}
              alt=""
              className="cursor-pointer hover:bg-primary transition duration-500 rounded-3xl"
            />
            <img
              src={assets.social.twitter}
              alt=""
              className="cursor-pointer hover:bg-primary transition duration-500 rounded-3xl"
            />
          </div>
          <a className="text-lg uppercase cursor-pointer inline-block shadow-primary hover:shadow-2xs duration-300 transition">
            Join our newsletter
          </a>
        </div>
      </div>

      <div className="pt-10 flex justify-center lg:justify-end lg:mr-20 pb-10">
        <img src={assets.door} alt="" />
      </div>
    </div>
  );
};

export default Footer;
