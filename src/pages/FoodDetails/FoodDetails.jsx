import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  console.log(food);
  const { id } = useParams();
  const [foodDetail, setFoodDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/foodItems/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched data in the state
        setFoodDetail(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const [quantity, setQuantity] = useState(1);

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="px-4 py-12 bg-red-50">
        {foodDetail && (
          <>
            <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-red-50 lg:px-10 md:px-6 px-4 py-10 relative">
              <div className="lg:flex items-center gap-8 w-full">
                <div>
                  <img src={food.image} alt="" />
                </div>
                <div className="lg:mt-0 md:mt-8 mt-6">
                  <div className="md:flex justify-between items-center lg:max-w-[515px] w-full">
                    <p className="text-4xl font-semibold leading-9 text-red-500">
                      {foodDetail.food}
                    </p>
                    <p className="w-14 h-6 text-2xl font-semibold leading-normal text-red-500 md:mt-0 mt-4">
                      ${foodDetail.price}
                    </p>
                  </div>
                  <div></div>

                  <div className="md:flex items-center justify-between mt-4">
                    <p className="text-base leading-none text-red-500">
                      {foodDetail.description}
                    </p>
                  </div>
                  <p className="mt-8 text-base leading-normal text-red-500 lg:max-w-[515px] w-full">
                    {foodDetail.details}
                  </p>
                  <p className="text-base font-medium leading-none text-red-500 mt-8">
                    Quantity
                  </p>
                  <div className="flex items-center justify-center w-20 h-10 p-3 space-x-3 border border-red-500 mt-4">
                    <button
                      className="outline-none border-red-500"
                      onClick={decrement}
                      aria-label="decrease quantity"
                    >
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.625 1.5L3.375 6L8.625 10.5L8.625 1.5Z"
                          fill="#FF0000"
                        />
                      </svg>
                    </button>
                    <p className="text-base text-red-500 quantity1">
                      {quantity}
                    </p>
                    <button
                      className="outline-none"
                      onClick={increment}
                      aria-label="increase quantity"
                    >
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.375 10.5L8.625 6L3.375 1.5L3.375 10.5Z"
                          fill="#FF0000"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="lg:flex mt-8 gap-4">
                    <Link to={`/purchase/${foodDetail._id}`}>
                      <button className="btn btn-block btn-error bg-red-500 text-white">
                        Purchase
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FoodDetails;
