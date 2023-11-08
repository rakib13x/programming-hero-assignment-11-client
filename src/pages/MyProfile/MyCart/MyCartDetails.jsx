import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import MyCartDetails from "./MyCartDetails";
import { useLoaderData } from "react-router-dom";

const MyCartDetails = () => {
  const loadedProducts = useLoaderData();
  console.log(loadedProducts);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(loadedProducts)) {
      setProducts(loadedProducts);
    }
  }, [loadedProducts]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Implement the delete logic here and update the products state
      }
    });
  };
  return <div>MyCartDetails</div>;
};

export default MyCartDetails;
