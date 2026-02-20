import React from "react";
import "./Shop.css";
import ProductCard from "../../Pages/Productcard.jsx";

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
  },
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
  {
    id: 5,
    name: "Kids T-Shirt",
    category: "kids",
    price: 699,
    description: "Soft cotton t-shirt for kids, skin friendly.",
    image: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/23843804_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1"
  },
  {
    id: 6,
    name: "Kids Shoes",
    category: "kids",
    price: 1199,
    description: "Durable and comfortable shoes for kids.",
    image: "https://th.bing.com/th/id/OIP.9gQfxWAndMp5DYRiwmwjWQHaHa?w=179&h=180&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 7,
    name: "Wireless Headphones",
    category: "electronics",
    price: 3499,
    description: "Noise cancelling wireless headphones with long battery life.",
    image: "https://th.bing.com/th/id/OIP.Akq2fwQAsqXxw72u7iT9qQHaHa?w=200&h=200&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 8,
    name: "Smart Watch",
    category: "electronics",
    price: 4999,
    description: "Smart watch with fitness tracking and heart rate monitor.",
    image: "https://th.bing.com/th/id/OIP.sM7fudhr1av6uDIvJMDvPgHaHa?w=182&h=182&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3"
  },
  {
    id: 9,
    name: "Men T-Shirt",
    price: 999,
    image: "data:image/webp;base64,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",},

  {
    id: 10,
    name: "Women Dress",
    price: 1499,
    image: "https://www.bing.com/th/id/OIP.S7uAXcwlQhgSpYTpoqMA5wHaLI?w=138&h=211&c=8&rs=1&qlt=90&o=6&cb=defcachec1&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: 11,
    name: "Kids Wear",
    price: 799,
    image: "data:image/webp;base64,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",
  },
  {
    id: 12,
    name: "Shoes",
    price: 1999,
    image: "https://th.bing.com/th/id/OIP.ZNtjRbsyKrEkeNwmQJo3LwHaLH?w=208&h=305&c=7&r=0&o=7&cb=defcachec2&dpr=1.3&pid=1.7&rm=3",
  },
];

const Shop = () => {
  return (
    <div className="shop">
      <h1 className="shop-title">🔥 Latest Products</h1>

      <div className="product-grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
