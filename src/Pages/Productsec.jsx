import React from "react";
import "./ProductDetail.jsx"
import { useNavigate } from "react-router-dom";
const Productsec = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="productcard" onClick={() => navigate(`/product/${product.id}`)} style={{display:"flex", width:"90vw", boxShadow:"0 0 10px black", margin:"10px", gap:"10px"}}>
  
     <div style={{width:"350px"}} > <img src={product.image} alt={product.name} /></div>
     <div > <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
      <p>₹ {product.description}</p>
  <p>High quality product with premium material.</p>

        <button onClick={() => addToCart(products)} style={{padding:"15px", margin:"10px", borderRadius:"20px", backgroundColor:"crimson", color:"white", fontSize:"18px"}}>
          Add to Cart
        </button>
</div>
      {/* <div className="btngroup">
        <button className="addcart" onClick={() => addToCart(product)}>Add to Cart</button>
        <button className="buynow">Buy Now</button>
      </div> */}
    </div>
  );
};

export default ProductCard;

