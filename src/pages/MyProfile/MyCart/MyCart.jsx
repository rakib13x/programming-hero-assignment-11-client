import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {
  const loader = useLoaderData();
  console.log(loader);
  const { user } = useContext(AuthContext);
  console.log(user);
  const [purchased, setPurchased] = useState([]);
  const url = `https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/mycart?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchased(data));
  }, [url]);

  console.log(purchased);

  const handleDelete = (id) => {
    if (!id) {
      console.log("ID is undefined or empty");
      return;
    }
    Swal.fire({
      title: "Confirm Deletion",
      text: "Are you sure you want to remove this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://food-order-nbdqgpucf-rakib13x-gmailcom.vercel.app/mycart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => {
            if (res.status === 404) {
              throw new Error("Item not found");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              // Item removed successfully
              Swal.fire(
                "Deleted!",
                "The item has been removed from your cart.",
                "success"
              );
              const remaining = purchased.filter(
                (purchase) => purchase._id !== id
              );
              setPurchased(remaining);
            } else {
              Swal.fire(
                "Error",
                "Failed to remove the item from your cart.",
                "error"
              );
            }
          })
          .catch((error) => {
            Swal.fire("Error", error.message, "error");
          });
      }
    });
  };

  return (
    <div>
      {purchased.length > 0 && (
        <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
          {/* USER EMAIL */}

          {/* PRODUCTS CONTAINER */}
          <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
            {purchased.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between mb-4"
              >
                <img
                  src={item.image}
                  alt={item.food}
                  width={100}
                  height={100}
                />
                <div>
                  <h1 className="uppercase text-xl font-bold">{item.food}</h1>
                  <span>{item.category}</span>
                  <div className="p-4">
                    <p>{user?.email}</p>
                  </div>
                </div>
                <h2 className="font-bold">${item.price}</h2>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete(item._id)}
                >
                  remove
                </button>
              </div>
            ))}
          </div>
          {/* PAYMENT CONTAINER */}
          <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
            {/* Calculate subtotal, service cost, and delivery cost here */}
            {/* Add the calculation logic here */}
            <div className="flex justify-between">
              <span>Subtotal ({purchased.length} items)</span>
              <span>$TOTAL_PRICE</span>{" "}
              {/* Replace TOTAL_PRICE with the actual subtotal */}
            </div>
            <div className="flex justify-between">
              <span>Service Cost</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Cost</span>
              <span className="text-green-500">FREE!</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between">
              <span>TOTAL (INCL. VAT)</span>
              <span className="font-bold">$TOTAL_AMOUNT</span>{" "}
              {/* Replace TOTAL_AMOUNT with the actual total */}
            </div>
            <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
              CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
