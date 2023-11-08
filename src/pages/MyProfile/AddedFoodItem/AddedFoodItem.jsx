import { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Productform from "../../Shared/ProductForm/ProductForm";
import { useLoaderData } from "react-router-dom";
import AddedFoodCard from "./AddedFoodCard";

const AddedFoodItem = () => {
  const loadedAddedFoods = useLoaderData();
  console.log(loadedAddedFoods);
  const [addedFoods, setAddedFoods] = useState([]);
  useEffect(() => {
    if (Array.isArray(loadedAddedFoods)) {
      setAddedFoods(loadedAddedFoods);
    }
  }, [loadedAddedFoods]);
  return (
    <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <div className="flex flex-col justify-start items-start">
        <div className>
          <p className="text-sm leading-none font-normal text-gray-600">
            Shop by your choice
          </p>
        </div>
        <div className="mt-4 flex justify-between items-end w-full">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div>
              <p className="text-3xl lg:text-4xl tracking-tight font-semibold lg:leading-9 leading-7 text-gray-800">
                Added Foods
              </p>
            </div>
            <div className="flex justify-start items-end mb-1 mt-2 sm:mt-0">
              <span className="text-base leading-none font-normal text-gray-600">
                ({addedFoods.length})
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-12 grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8 md:gap-x-6 md:gap-y-10 2xl:flex 2xl:flex-wrap justify-between">
          {addedFoods.map((addedFood, index) => (
            <AddedFoodCard
              key={`${addedFood._id}_${index}`}
              addedFood={addedFood}
              addedFoods={addedFoods}
              setAddedFoods={setAddedFoods}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddedFoodItem;
