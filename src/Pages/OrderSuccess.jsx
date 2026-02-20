import { useLocation } from "react-router-dom";
// console.log("SUCCESS STATE:", state);


const OrderSuccess = () => {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) return <h2>No Order Found</h2>;

  return (
    <div style={{ padding: "30px", margin:"72px"}}>
      <h1>🎉 Order Placed Successfully!</h1>

      <p><b>Order ID:</b> {order.orderId}</p>
      <p><b>Date:</b> {order.date}</p>

      <hr />

      <h3>Customer Details</h3>
      <p>Name: {order.customer.name}</p>
      <p>Phone: {order.customer.phone}</p>
      <p>Address: {order.customer.address}</p>

      <hr />

      <h3>Items</h3>
      {order.items.map((item) => (
        <p key={item.id}>
          {item.name} × {item.qty}
        </p>
      ))}

      <hr />

      <h3>Payment Method: {order.paymentMethod}</h3>
      <h2>Total Paid: ₹{order.totalAmount}</h2>

      <button onClick={() => window.print()}>
        🧾 Download Receipt
      </button>
    </div>
  );
};

export default OrderSuccess;
