import React from "react";
import { useCart } from "react-use-cart";

function Cart({ setToggle }) {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  

  return (
    <div
      className="position-fixed w-100 h-100"
      style={{  zIndex: 99, backgroundColor: "rgba(128, 128, 128, 0.435)" }}
    >
      <div className="bg-light h-100" style={{ width: 300}}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>Cart ({totalUniqueItems})</h1>
          <span className="btn btn-light" onClick={() => setToggle(false)}>
            X
          </span>
        </div>
        {isEmpty? <p>Your cart is empty</p>:
        items.map((item) => (
          <li key={item.id} className="d-flex gap-1">
            <img src={item.image} width={150} />
            <div>
              <h5>{item.title}</h5>
              <div className="d-flex align-items-center">
                {" "}
                <button
                  className="btn btn-secondary"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <p className=" text-center m-0" style={{ width: 30 }}>
                  {item.quantity}
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  &times;
                </button>{" "}
              </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}
export default Cart;
