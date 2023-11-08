import { Link } from "react-router-dom";
import AddFoodItem from "./AddFoodItem/AddFoodItem";
import AddedFoodItem from "./AddedFoodItem/AddedFoodItem";

const MyProfile = () => {
  return (
    <div>
      <Link to="/myprofile/added-food-item">Added Food Item</Link>
      <Link to="/myprofile/add-food-item">add-food-item</Link>
      <Link to="/myprofile/ordered-food-item">ordered-food-item</Link>
    </div>
  );
};

export default MyProfile;
