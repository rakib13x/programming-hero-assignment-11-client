import { useEffect, useState } from "react";
import TopSellingFoodCard from "./TopSellingFoodCard";

const TopSellingFoodList = () => {
  const [topSelling, setTopSelling] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/topSellingFoodItems`)
      .then((res) => res.json())
      .then((data) => setTopSelling(data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setTopSelling([]); // Set an empty array or handle the error accordingly
      });
  }, []);

  return (
    <div className="pt-[250px] lg:pt-[0px]">
      <div className="flex justify-center sm:pt-14 text-6xl font-bold text-red-500 pt-">
        Our Top Selling Food
      </div>
      <div className="flex justify-center items-center">
        <div className="mt-12 grid-cols-1 grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-y-12 lg:gap-x-8 lg:gap-y-8 md:gap-x-6 md:gap-y-10 justify-between">
          {topSelling && topSelling.length > 0 ? (
            topSelling.map((topFood, index) => (
              <TopSellingFoodCard
                key={`${topFood._id}_${index}`}
                topFood={topFood}
                topSelling={topSelling}
                setTopSelling={setTopSelling}
              />
            ))
          ) : (
            <p>No top selling food items available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopSellingFoodList;
