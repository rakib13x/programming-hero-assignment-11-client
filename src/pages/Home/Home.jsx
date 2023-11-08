import FeaturedProducts from "../../Components/FeaturedProducts";
import Offer from "../../Components/Offer";
import Slider from "../../Components/Slider";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts />
      <Offer />
    </div>
  );
};

export default Home;
