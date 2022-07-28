import "./style.css";
import Fone from "../../assets/foneee.png";
import Carrinho from "../../assets/cartt.jpg";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

export function Cart({ setOpenCart, openCart }) {
  const { cart } = useContext(CartContext);

  function open() {
    if (openCart === false) {
      setOpenCart(true);
    } else {
      setOpenCart(false);
    }
  }

  return (
    <nav className="container-nav">
      <div className="container-text-img">
        <p className="text-music-shop">Music Shop</p>
        <img className="img-nav" src={Fone} alt="fone"></img>
      </div>
      <div className="container-carrinho">
        <img
          onClick={open}
          className="img-nav"
          src={Carrinho}
          alt="carrinho"
        ></img>
        <span className="quantidade">{cart.length}</span>
        <p className="text-carrinho">Carrinho</p>
      </div>
    </nav>
  );
}
