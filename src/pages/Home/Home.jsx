import FeaturedProducts from "../../Components/FeaturedProducts";
import Offer from "../../Components/Offer";
import Slider from "../../Components/Slider";
import Reviews from "../Reviews/Reviews";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts />
      <Offer />
      <Reviews />
    </div>
  );
};

export default Home;
