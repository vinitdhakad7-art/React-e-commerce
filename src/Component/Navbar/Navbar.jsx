import React, { useState, useContext } from "react";
import "./Navbar.css";
import carticon from "../../assets/cart.jpg";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const [menu, setMenu] = useState("home");

  const totalQty = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <div className="navbar">
      <div className="navlogo" >
        <p>Shopping Store</p>
      </div>

      <ul className="navmenu">
        <li onClick={() =>{setMenu("home"); navigate("/")}}>
          Home {menu=== "home" && <hr />}
        </li>
        <li onClick={() =>{ setMenu("mens"); navigate("/mens")}} >
          Men {menu=== "mens" && <hr />}
        </li>
        <li onClick={() =>{setMenu("womens"); navigate("/womens")}}>
          Women {menu=== "womens" && <hr />}
        </li>
        <li onClick={() => {setMenu("kids"); navigate("/kids")}}>
          Kids {menu=== "kids" && <hr />}
        </li>
      </ul>

      <div className="logincart">
        <button>Login</button>

        <div
          style={{ position: "relative", cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        >
          <img src={carticon} alt="cart" height="40px" />

          {totalQty > 0 && (
            <div className="cartcount">
              {totalQty}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
