import React from "react";
import { Link } from "react-router-dom";

const CartIcon = () => {
  return (
    <Link to="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <img src="/cart.png" alt="" fill="true" />{" "}
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
