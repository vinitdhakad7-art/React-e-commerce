import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  
  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id===product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, {...product, qty: 1 }]);
    }
  };


  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };


  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };


  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  
  const totalQty = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        totalAmount,
        totalQty
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
