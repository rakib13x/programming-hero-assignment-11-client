import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCardItems from "./FoodCardItems";
import "./FoodMenu.css";

const FoodMenu = () => {
  const loadedFoods = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSortChange = (direction) => {
    setSortDirection(direction);
    setCurrentPage(0); // Reset current page when changing the sort
  };

  useEffect(() => {
    if (Array.isArray(loadedFoods)) {
      setFoods(loadedFoods);
    }
  }, [loadedFoods]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/foodItems?page=${currentPage}&size=${itemsPerPage}&sortDirection=${sortDirection}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [currentPage, itemsPerPage, sortDirection]);

  useEffect(() => {
    // Use a copy of the foods array for filtering
    const foodsCopy = [...foods];

    const filtered = foodsCopy.filter((food) =>
      food.food.toLowerCase().includes(searchInput.toLowerCase())
    );

    setFilteredFoods(filtered);
  }, [foods, searchInput]);

  const numberOfPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const pages = Array.from({ length: numberOfPages }, (_, i) => i);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearch = () => {
    const filtered = foods.filter((food) =>
      food.food.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  return (
    <>
      <div className="bg-red-50 pt-20">
        <div className="max-w-md mx-auto">
          <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button onClick={handleSearch}></button>
          </div>
        </div>
        <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-20 md:px-6 py-9 px-4">
          <div className="flex flex-col justify-start items-start">
            <div>
              <p className="text-sm leading-none font-normal text-red-500">
                Shop by your choice
              </p>
            </div>
            <div className="mt-4 flex justify-between items-end w-full">
              <div className="flex flex-col sm:flex-row sm:space-x-4">
                <div>
                  <p className="text-3xl lg:text-4xl text-red-500 tracking-tight font-semibold lg:leading-9 leading-7">
                    All Foods
                  </p>
                </div>
                <div className="flex justify-start items-end mb-1 mt-2 sm:mt-0">
                  <span className="text-base leading-none font-normal text-gray-600">
                    {filteredFoods.length > 0
                      ? filteredFoods.length
                      : foods.length}
                  </span>
                </div>
              </div>
              <div>
                <select
                  className=" border-red-500 w-full max-w-xs text-red-500 h-12 rounded-md"
                  onChange={(e) => handleSortChange(e.target.value)}
                >
                  <option disabled selected className="">
                    Sort by price
                  </option>
                  <option value="asc" className="text-red-500">
                    Low to High
                  </option>
                  <option value="desc" className="text-red-500">
                    High to Low
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="mt-12 grid-cols-1 grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2   gap-y-12 lg:gap-x-8 lg:gap-y-8 md:gap-x-6 md:gap-y-10 justify-between">
              {filteredFoods.map((food, index) => (
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
            <button onClick={handlePrevPage} className="mr-5">
              Prev
            </button>
            {pages.map((page) => (
              <button
                onClick={() => setCurrentPage(page)}
                key={page}
                className={`join-item btn mr-5 ${
                  currentPage === page ? "selected" : ""
                }`}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNextPage}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodMenu;
