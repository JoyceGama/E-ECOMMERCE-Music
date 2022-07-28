import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@cartList")) || []
  );

  const addToCart = (itemCart) => {
    const list = JSON.parse(localStorage.getItem("@cartList")) || [];
    list.push(itemCart);

    localStorage.setItem("@cartList", JSON.stringify(list));

    setCart([...cart, itemCart]);
  };

  const removeFromCart = (itemId) => {
    const newCart = cart.filter((itemOnCart) => itemOnCart.id !== itemId);
    setCart(newCart);

    const list = cart.filter((product) => product.id !== itemId);

    localStorage.setItem("@cartList", JSON.stringify(list));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
