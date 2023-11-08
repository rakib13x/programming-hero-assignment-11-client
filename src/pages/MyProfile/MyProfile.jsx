import { Link } from "react-router-dom";
import AddFoodItem from "./AddFoodItem/AddFoodItem";
import AddedFoodItem from "./AddedFoodItem/AddedFoodItem";

const MyProfile = () => {
  return (
    <div className="flex justify-center gap-10 pt-[300px] pb-[200px]">
      <Link to="/myprofile/added-food-item">
        <button className="btn bg-red-500 text-white">Added Food Item</button>
      </Link>
      <Link to="/myprofile/add-food-item">
        <button className="btn bg-red-500 text-white">Add Food Item</button>
      </Link>
      <Link to="/myprofile/ordered-food-item">
        <button className="btn bg-red-500 text-white">Ordered Item</button>
      </Link>
    </div>
  );
};

export default MyProfile;
