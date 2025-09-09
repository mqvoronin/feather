import Bestsellers from "./components/Bestsellers";
import Floyd from "./components/Floyd";
import Footer from "./components/Footer";
import Furniture from "./components/Furniture";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pain from "./components/Pain";
import Shop from "./components/Shop";

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Shop />
      <Furniture />
      <Bestsellers />
      <Floyd />
      <Pain />
      <Footer />
    </div>
  );
};

export default App;
