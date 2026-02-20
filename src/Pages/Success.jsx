import { useLocation } from "react-router-dom";
import "./Success.css"

const Success = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return <h2>No receipt found</h2>;
  }

  return (
    <div className="success-container">
      <h1>✅ Payment Successful</h1>

      <h3>Customer Details</h3>
      <p>Name: {order.customer.name}</p>
      <p>Phone: {order.customer.phone}</p>
      <p>Address: {order.customer.address}</p>

      <h3>Order Items</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} × {item.qty}
          </li>
        ))}
      </ul>

      <h2>Total Paid: ₹{order.totalAmount}</h2>
    </div>
  );
};

export default Success;
