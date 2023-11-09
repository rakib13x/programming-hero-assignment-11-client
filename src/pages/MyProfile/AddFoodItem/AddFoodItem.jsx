import { useContext } from "react";
import Footer from "../../Shared/Footer/Footer";
import Productform from "../../Shared/ProductForm/ProductForm";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddFoodItem = () => {
  const { user } = useContext(AuthContext);
  const handleFoodItem = (event) => {
    event.preventDefault();
    const form = event.target;
    const food = form.food.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const description = form.description.value;
    const origin = form.origin.value;

    const newFood = {
      userName: user?.displayName,
      email: user?.email,
      food,
      image,
      category,
      quantity,
      price,
      description,
      origin,
    };
    console.log(newFood);

    fetch(
      "https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/foodItems",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newFood),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-red-50 p-24">
        <h2 className="text-6xl font-semibold text-red-500 text-center">
          Add a Food Item
        </h2>
        <form onSubmit={handleFoodItem}>
          <Productform />
        </form>
      </div>
    </>
  );
};

export default AddFoodItem;
