import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Shop from "./Component/Shop/Shop";
import Mens from "./Component/Mens";
import Women from "./Component/Womens";
import Kids from "./Component/Kids";
import Cart from "./pages/Cart";
import ProductDetail from "./Pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import Success from "./pages/Success";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          {/* <Route path="/" element={<Layout />}></Route> */}
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<Mens/>} />
          <Route path="/womens" element={<Women/>} />
          <Route path="/kids" element={<Kids/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
       
        <Route path="/payment" element={<Payment />} />
<Route path="/OrderSuccess" element={<OrderSuccess />} />
        <Route path="/success" element={<Success />} />

            
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
