import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const FoodPurchasePage = () => {
  const foodPurchase = useLoaderData();
  const { _id, category, Origin, image } = foodPurchase;
  console.log(foodPurchase.food);
  const { user } = useContext(AuthContext);
  console.log(user);

  const handlePurchase = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const food = form.food.value;
    const quantity = form.quantity.value;

    const purchasing = {
      date,
      name,
      email,
      price,
      food,
      quantity,
      image,
    };
    console.log(purchasing);

    fetch("http://localhost:3000/mycart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(purchasing),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("service book successfully");
        }
      });
  };

  return (
    <div>
      <form className="card-body " onSubmit={handlePurchase}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              defaultValue={foodPurchase?.userName}
              readOnly
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              placeholder="password"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={"$" + foodPurchase.price}
              readOnly
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <input
              type="text"
              name="food"
              defaultValue={foodPurchase?.food}
              readOnly
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-red-500 btn-block text-white"
            type="submit"
            value="confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default FoodPurchasePage;
