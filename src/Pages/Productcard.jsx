import React from "react";
import "./ProductDetail.jsx"
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="productcard" onClick={() => navigate(`/product/${product.id}`)}>
  
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>

      {/* <div className="btngroup">
        <button className="addcart" onClick={() => addToCart(product)}>Add to Cart</button>
        <button className="buynow">Buy Now</button>
      </div> */}
    </div>
  );
};

export default ProductCard;
