import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
    const navigate = useNavigate();

  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    totalAmount,
    totalQty,
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop:"80px" }}>Cart is Empty 🛒</h2>;
  }

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin:"auto", backgroundColor:"white", boxShadow:"0 0 10px black",marginTop:"72px"}}>
      <h2 style={{fontSize:"30px"}}>My Cart</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            borderBottom: "1px solid #ddd",
            padding: "15px 0",
            fontSize:"25px"
          }}
        >
          <img src={item.image} width="150" />

          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>₹ {item.price}</p>

            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <h3>₹ {item.price * item.qty}</h3>

          <button
            onClick={() => removeFromCart(item.id)}
            style={{ color: "red" }}
          >
            Remove
          </button>
        </div>
      ))}

      <div style={{ textAlign: "right", marginTop: "30px", lineHeight:"30px"}}>
        <h3>Total Items: {totalQty}</h3>
        <h2>Total Amount: ₹ {totalAmount}</h2>

        <button  
          onClick={() => navigate("/Checkout")}

          style={{
            padding: "12px 30px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
