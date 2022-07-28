import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import "./style.css";

export function PrecoTotal() {
  const { cart } = useContext(CartContext);

  return (
    <div className="container-total">
      <span className="text-quantidade">{cart.length}</span>
      <span className="text-preco">
        {cart
          .reduce((acc, valor) => acc + valor.preco, 0)
          .toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2,
          })}
      </span>
    </div>
  );
}
