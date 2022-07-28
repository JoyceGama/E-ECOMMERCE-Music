import "./App.css";
import { Cart } from "./components/cartList/cart";
import { Vitrine } from "./components/vitrine/vitrine";
import { useState } from "react";
import { ModalCart } from "./components/modalCart/modalCart";
import { CartProvider } from "./providers/cart.js";
import { VitrineProvider } from "./providers/vitrine.js";

function App() {
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <VitrineProvider>
        <CartProvider>
          <Cart openCart={openCart} setOpenCart={setOpenCart} />
          <section className="container-all">
            <Vitrine />
            {openCart === true ? <ModalCart /> : false}
          </section>
        </CartProvider>
      </VitrineProvider>
    </>
  );
}

export default App;
