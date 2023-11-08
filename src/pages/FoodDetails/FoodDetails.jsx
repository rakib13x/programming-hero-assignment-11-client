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
      <div className="px-4 py-12">
        {foodDetail && (
          <>
            <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white lg:px-10 md:px-6 px-4 py-10 relative">
              <div className="lg:flex items-center gap-8 w-full">
                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/87jkzx53.png"
                    alt=""
                  />
                </div>
                <div className="lg:mt-0 md:mt-8 mt-6">
                  <div className="md:flex justify-between items-center lg:max-w-[515px] w-full">
                    <p className="text-4xl font-semibold leading-9 text-gray-800">
                      {foodDetail.name}
                    </p>
                    <p className="w-14 h-6 text-2xl font-semibold leading-normal text-gray-800 md:mt-0 mt-4">
                      ${foodDetail.price}
                    </p>
                  </div>
                  <div className="md:flex items-center justify-between mt-4">
                    <p className="text-base leading-none text-gray-600">
                      {foodDetail.description}
                    </p>
                  </div>
                  <p className="mt-8 text-base leading-normal text-gray-600 lg:max-w-[515px] w-full">
                    {foodDetail.details}
                  </p>
                  <p className="text-base font-medium leading-none text-gray-600 mt-8">
                    Quantity
                  </p>
                  <div className="flex items-center justify-center w-20 h-10 p-3 space-x-3 border border-gray-300 mt-4">
                    <button
                      className="outline-none"
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
                          fill="#1F2937"
                        />
                      </svg>
                    </button>
                    <p className="text-base text-gray-800 quantity1">
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
                          fill="#1F2937"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="lg:flex mt-8 gap-4">
                    <Link to={`/purchase/${foodDetail._id}`}>
                      <button className="text-base font-medium leading-none text-white bg-gray-800 hover-bg-gray-700 transition duration-300 lg:max-w-[200px] w-full py-4">
                        Purchase
                      </button>
                    </Link>
                    <button className="text-base font-medium leading-none text-gray-800 flex items-center justify-center gap-3 border border-gray-600 lg-max-w-[189px] w-full py-4 lg-mt-0 md-mt-6 mt-4">
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.99994 14C7.80306 14 7.60931 13.9406 7.43744 13.825C6.26244 13.0281 4.55619 11.7937 3.33119 10.3C2.08119 8.77813 1.48119 7.2125 1.49994 5.51875C1.51869 3.57813 3.07806 2 4.97181 2C6.47494 2 7.47181 2.92188 7.99994 3.59375C8.52806 2.92188 9.52494 2 11.0281 2C12.9218 2 14.4781 3.57813 14.4999 5.51875C14.5156 7.2125 13.9187 8.77813 12.6687 10.3C11.4437 11.7937 9.73744 13.0281 8.56244 13.825C8.39056 13.9437 8.19681 14 7.99994 14ZM4.97181 3C3.62494 3 2.51556 4.13438 2.49994 5.53125C2.46556 8.8 5.26244 11.1438 7.99994 13C10.7374 11.1406 13.5343 8.8 13.4999 5.53125C13.4843 4.1375 12.3781 3 11.0281 3C9.34056 3 8.45306 4.70625 8.44681 4.725C8.36244 4.89375 8.19056 5 7.99994 5C7.80931 5 7.63744 4.89375 7.55306 4.72188C7.54369 4.70625 6.65619 3 4.97181 3Z"
                          fill="#6B7280"
                        />
                      </svg>
                      Wishlist
                    </button>
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
