import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Payment.css"

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [method, setMethod] = useState("");
  const [upiId, setUpiId] = useState("");

  const order = location.state?.order;

  if (!order) {
    return <h2>No order found</h2>;
  }

  const handleConfirmPayment = () => {
    if (!method) {
      alert("Please select a payment method");
      return;
    }

    if (method === "UPI" && !upiId) {
      alert("Please enter UPI ID");
      return;
    }

    navigate("/success", {
      state: {
        order: {
          ...order,
          paymentMethod: method,
          upiId: method === "UPI" ? upiId : null,
        },
      },
    });
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>

   
      <div className="payment-option">
         <label> Cash on Delivery
        <input
          type="radio"
          name="payment"
          value="Cash on Delivery"
          onChange={(e) => setMethod(e.target.value)}
        /></label>
       
      </div>

      
    <div className="payment-option">
        <label> Debit / Credit Card

        <input
          type="radio"
          name="payment"
          value="Card"
          onChange={(e) => setMethod(e.target.value)}
        /></label>
      </div>

      {method === "Card" && (
        <div style={{ marginTop: "10px" }}>
          <input placeholder="Card Number" />
          <input placeholder="Expiry Date" />
          <input placeholder="CVV" />
        </div>
      )}


      <div className="payment-option">
        <label> UPI (GPay/PhonePe/Paytm)

        <input
          type="radio"
          name="payment"
          value="UPI"
          onChange={(e) => setMethod(e.target.value)}
        /></label>
      </div>

      {method === "UPI" && (
        <div style={{ marginTop: "10px" }} >
          <input
            placeholder="example@upi"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
      )}

      <h3>Total Payable: ₹{order.totalAmount}</h3>
      <button onClick={handleConfirmPayment} className="pay-btn">
        Confirm Order
      </button>
    </div>
  );
};

export default Payment;
