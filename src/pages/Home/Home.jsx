import FeaturedProducts from "../../Components/FeaturedProducts";
import Offer from "../../Components/Offer";
import Slider from "../../Components/Slider";
import Reviews from "../Reviews/Reviews";
import Footer from "../Shared/Footer/Footer";
import TopSellingFoodList from "../TopSellingFood/TopSellingFoodList";

const Home = () => {
  return (
    <div>
      <Slider />
      <TopSellingFoodList />
      <Offer />
      <Reviews />
    </div>
  );
};

export default Home;
