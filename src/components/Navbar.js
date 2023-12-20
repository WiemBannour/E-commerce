import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "react-use-cart";
function Navbar({setToggle}) {

const { totalItems } = useCart();
  return (
    <div className="d-flex justify-content-between align-items-center p-3 shadow-sm">
      <img style={{width:150}} src={require("../assets/images/logo.png")} />
      <div>{totalItems}<FiShoppingCart size={30} onClick={()=>{setToggle(true)}}/></div>
    </div>
  );
}

export default Navbar;