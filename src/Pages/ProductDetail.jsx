import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext.jsx";




import products from "./Productdata.js"; 

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "40px", display: "flex", gap: "40px", width:"100%", height:"400px" , backgroundColor:"gray", lineHeight:"37px",boxShadow:"0 10px 10px black", marginTop:"72px"}}>
      <img src={product.image} width="350" />

      <div>
        <h1>{product.name}</h1>
        <h2>₹ {product.price}</h2>
        <h2>₹ {product.description}</h2>
        <p>High quality product with premium material.</p>

        <button onClick={() => addToCart(product)} style={{padding:"15px", margin:"10px", borderRadius:"20px", backgroundColor:"crimson", color:"white", fontSize:"18px",border:"2px solid bisque",}}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;

