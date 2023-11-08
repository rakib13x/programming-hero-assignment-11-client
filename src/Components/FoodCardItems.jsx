import "pure-react-carousel/dist/react-carousel.es.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FoodDetails from "../pages/FoodDetails/FoodDetails";

const FoodCardItems = ({ food }) => {
  // console.log(food);
  const { _id, image, category, price, quantity, description } = food;
  // console.log(food);

  let arr = [
    " text-white",
    " text-white",
    " text-black",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
  ];

  const [stars, setStars] = useState(arr);

  const setStarsValue = (val) => {
    const newArr = [...stars];
    if (newArr[val] === " text-white") {
      newArr[val] = " text-black";
    } else {
      newArr[val] = " text-white";
    }
    setStars(newArr);
  };
  return (
    <div>
      <div className="flex justify-center flex-col">
        <div className="relative group flex justify-center items-center">
          <img
            src="https://i.ibb.co/RvYb6Y8/pexels-ray-piedra-1464625-1.png"
            alt="shoes-1"
          />
          <div>
            <Link to={`/food-details/${food._id}`}>
              <button className="opacity-0 group-hover:opacity-100 py-4 w-10/12 sm:w-11/12 md:w-10/12 xl:w-11/12 flex justify-center items-center bg-white absolute bottom-6 inset-x-6 sm:inset-x-3 md:inset-x-6 lg:inset-x-5 xl:inset-x-4 items-center shadow">
                <p className="text-base text-center font-medium leading-4 text-gray-800 flex flex-shrink-0">
                  Buy
                </p>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-6 flex justify-between w-full">
          <div>
            <p className="text-2xl font-semibold leading-6 text-gray-800">
              Running Sport Shoes
            </p>
          </div>
          <div className="focus:text-black">
            <svg
              id="heart"
              onClick={() => setStarsValue(0)}
              className={`cursor-pointer fill-current ${stars[0]}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17.75L5.82802 20.995L7.00702 14.122L2.00702 9.25495L8.90702 8.25495L11.993 2.00195L15.079 8.25495L21.979 9.25495L16.979 14.122L18.158 20.995L12 17.75Z"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-base leading-none text-gray-800">Sports</p>
        </div>
        <div className="mt-6 flex justify-between w-full">
          <div>
            <p className="text-2xl font-semibold leading-normal text-gray-600">
              $89
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardItems;
