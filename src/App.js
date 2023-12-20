import "./App.css";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import nodeImage from "./assets/images/products/node.png";
import { dummy } from "./constants/dummyData";
import Navbar from "./components/Navbar";
import { CartProvider } from "react-use-cart";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [toggle,setToggle]=useState(false)

  return (
    <CartProvider>
      {toggle && <Cart setToggle={setToggle} /> }
      <div className="App">
        <Navbar setToggle={setToggle} />
        <center><h1>Ecomerce website </h1></center>
        <div className="d-flex flex-wrap gap-5 justify-content-center mt-5">
          {dummy.map((elem, i) => (
            <Card key={i} product={elem} />
          ))}
        </div>
      </div>
    </CartProvider>
  );
}

export default App;