import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Productform = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="food"
              placeholder="Food-name"
              className="input w-full h-12 rounded-xl border pl-2 "
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Image</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="input w-full h-12 rounded-xl border pl-2"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Category</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="category"
              placeholder="category"
              className="input w-full h-12 rounded-xl border pl-2"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">quantity</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="quantity"
              placeholder="quantity"
              className="input w-full h-12 rounded-xl border pl-2"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Price</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input w-full h-12 rounded-xl border pl-2"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input w-full h-12 rounded-xl border pl-2"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Author email</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              readOnly
              placeholder="email"
              className="input w-full h-12 rounded-xl border pl-2"
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Author name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              readOnly
              placeholder="name"
              className="input w-full h-12 rounded-xl border pl-2"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Food Origin</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="origin"
              placeholder="origin"
              className="input w-full h-12 rounded-xl border pl-2"
            />
          </label>
        </div>

        <div className="pt-8 flex justify-center">
          <input
            type="submit"
            value="submit"
            className="btn w-2/4 h-10 rounded-xl bg-red-500 border-none text-white hover:bg-gray-200 hover:text-black cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Productform;
