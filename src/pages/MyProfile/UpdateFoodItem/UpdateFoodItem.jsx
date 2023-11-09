import { useLoaderData } from "react-router-dom";
import Productform from "../../Shared/ProductForm/ProductForm";
import Swal from "sweetalert2";

const UpdateFoodItem = () => {
  const food = useLoaderData();
  const {
    _id,
    userName,
    email,
    image,
    category,
    quantity,
    price,
    description,
    origin,
  } = food;
  console.log(food);
  const handleUpdateFood = (event) => {
    event.preventDefault();
    const form = event.target;
    const food = from.food.value;
    const image = form.image.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const description = form.description.value;
    const origin = form.origin.value;
    const updatedFood = {
      food,
      image,
      category,
      quantity,
      price,
      description,
      origin,
    };
    console.log(updatedFood);

    //send data to server
    fetch(
      `https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/foodItems/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedFood),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to update coffee",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <>
      <div className="bg-red-50 p-24">
        <h2 className="text-6xl font-semibold text-red-500 text-center">
          Update a Food Item
        </h2>
        <form onSubmit={handleUpdateFood}>
          <Productform />
        </form>
      </div>
    </>
  );
};

export default UpdateFoodItem;
