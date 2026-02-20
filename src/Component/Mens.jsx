import React from "react";
import ProductCard from "../Pages/Productcard.jsx";
// import ProductDetail from "../Pages/ProductDetail.jsx";

const products = [
   {
    id: 1,
    name: "Men's Casual Shirt",
    category: "men",
    price: 1299,
    description: "Comfortable cotton casual shirt for daily wear.",
    image: "https://th.bing.com/th/id/OIP.NUs_9tBnjM6YHHufSKIbRwHaHa?w=238&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 2,
    name: "Men's Denim Jeans",
    category: "men",
    price: 1999,
    description: "Slim fit denim jeans with premium fabric.",
    image: "https://th.bing.com/th/id/OIP.VrB9kxAMDlrUj-Oe0gCgpQHaHa?w=169&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3"
  }
 
];

const Shop = () => {
  return (
    <div className="shop">
      <h1 className="shop-title">🔥 Mens Products</h1>

<div className="product-grid" style={{width:"45vw",}}>

        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
