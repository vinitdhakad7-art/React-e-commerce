import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Checkout.css"

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const handleSubmit = (e) => {
  e.preventDefault();

  const orderData = {
    customer: form,
    items: cartItems,
    totalAmount: totalAmount,
  };

  navigate("/payment", {
    state: { order: orderData }
  });
};


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  return (
    <div style={{ maxWidth: "600px", margin: "10px auto", padding: "30px", border:"2px solid grey", display:"flex", flexDirection:"column" ,backgroundColor:"black", color:"white", marginTop:"71px"}}>
      <h1>Checkout</h1>

      <form onSubmit={handleSubmit} style={{backgroundColor:"black" }}>
       
        <div style={{ flex: 1 }}>
          <h3>Shipping Details</h3>
          <input name="name" placeholder="Full Name" onChange={handleChange} required />
          <input name="address" placeholder="Address" onChange={handleChange} required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        </div>

        <div style={{textAlign:"center", margin:"10px"}}>
          <h1>Order Summary</h1>
          {cartItems.map((item) => (
            <p key={item.id}>
              {item.name} × {item.qty}
            </p>
          ))}
          <h3>Total: ₹ {totalAmount}</h3>

          <button type="submit">Proceed to Payment</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
