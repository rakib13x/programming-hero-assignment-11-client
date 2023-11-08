import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCardItems from "./FoodCardItems";
import "./FoodMenu.css";
const FoodMenu = () => {
  const loadedFoods = useLoaderData();
  console.log(loadedFoods.result);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // const pages = [...Array(numberOfPages).keys()];

  // console.log(loadedFoods);

  useEffect(() => {
    if (Array.isArray(loadedFoods)) {
      setFoods(loadedFoods);
    }
  }, [loadedFoods]);
  // const itemsPerPage = 9;
  useEffect(() => {
    fetch(
      `http://localhost:3000/foodItems?page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [currentPage]);
  const numberOfPages = Math.ceil(loadedFoods.length / itemsPerPage);
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  console.log(pages);

  return (
    <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <div className="flex flex-col justify-start items-start">
        <div>
          <p className="text-sm leading-none font-normal text-gray-600">
            Shop by your choice
          </p>
        </div>
        <div className="mt-4 flex justify-between items-end w-full">
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <div>
              <p className="text-3xl lg:text-4xl tracking-tight font-semibold lg:leading-9 leading-7 text-gray-800">
                All Foods
              </p>
            </div>
            <div className="flex justify-start items-end mb-1 mt-2 sm:mt-0">
              <span className="text-base leading-none font-normal text-gray-600">
                {foods.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-12 grid-cols-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8 md:gap-x-6 md:gap-y-10 2xl:flex 2xl:flex-wrap justify-between">
          {foods.map((food, index) => (
            <FoodCardItems
              key={`${food._id}_${index}`}
              food={food}
              foods={foods}
              setFoods={setFoods}
            />
          ))}
        </div>
      </div>
      <div>
        <button onClick={handlePrevPage}>prev</button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className={`join-item btn ${
              currentPage === page ? "selected" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNextPage}>next</button>
      </div>
    </div>
  );
};

export default FoodMenu;
