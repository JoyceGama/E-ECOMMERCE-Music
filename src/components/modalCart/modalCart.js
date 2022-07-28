import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { PrecoTotal } from "../precoTotal/precoTotal";
import "./style.css";

export function ModalCart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart">
      <div className="header-cart">Pedidos</div>
      <div className="container-body-cart">
        <ul className="list-cart">
          {cart.length === 0 ? (
            <div className="div-vazio">
              <span className="text-vazio">Seu carrinho está vazio</span>
            </div>
          ) : (
            cart?.map((element, index) => (
              <li key={index} className="card-li">
                <img
                  className="img-cart"
                  src={element.img}
                  alt={element.nome}
                ></img>
                <div className="container-texto">
                  <span className="text-cart">Musica {element.nome}</span>
                  <span className="text-cart">
                    Artista/Banda {element.artista}
                  </span>
                  <span className="text-cart">Preço: R$ {element.preco}</span>
                </div>
                <div className="button-div">
                  <button
                    className="button-cart"
                    onClick={() => removeFromCart(element.id)}
                  >
                    remover
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
        <PrecoTotal />
      </div>
    </div>
  );
}
