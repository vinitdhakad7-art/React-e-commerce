import React from "react";
import ProductCard from "../Pages/Productcard.jsx";
// import ProductDetail from "../Pages/ProductDetail.jsx";

const products = [
   {
    id: 3,
    name:"Women's Summer...",
    category: "women",
    price: 1599,
    description: "Lightweight summer dress with modern design.",
    image: "https://th.bing.com/th/id/OIP.CZ70xdhs1mnLOlm_bIW4vwHaIF?w=165&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 4,
    name: "Women's Handbag",
    category: "women",
    price: 2499,
    description: "Stylish handbag with spacious compartments.",
    image: "https://th.bing.com/th/id/OIP.73ClGYHGReevkne1_hVF7AHaHa?w=219&h=219&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3"},
  
 
];

const Shop = () => {
  return (
    <div className="shop">
      <h1 className="shop-title">🔥 Womens Products</h1>

<div className="product-grid" style={{width:"45vw",}}>

        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
