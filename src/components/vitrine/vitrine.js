import { useContext } from "react";
import { VitrineContext } from "../../providers/vitrine";
import { CartContext } from "../../providers/cart";
import "./style.css";

export function Vitrine() {
  const { vitrine } = useContext(VitrineContext);
  const { cart, addToCart } = useContext(CartContext);

  return (
    <ul className="container-ul">
      {vitrine?.map((product) => (
        <li className="vitrine" key={product.id}>
          <img
            className="img-vitrine"
            src={product.img}
            alt={product.artista}
          ></img>
          <span className="musica-text">Musica {product.nome}</span>
          <span className="text-li">Artista/Banda {product.artista}</span>
          <span className="text-li">Genero {product.genero}</span>
          <span className="text-preco">Preço R$: {product.preco}</span>
          <audio controls>
            <source src={product.audio} type="audio/mp3"></source>
            Seu navegador não suporta o elemento audio
          </audio>
          {cart?.find((element) => element.id === product.id) ? (
            <button
              className="button-comprar"
              disabled
              onClick={() => addToCart(product)}
              id={product.id}
            >
              Comprar
            </button>
          ) : (
            <button
              className="button-comprar"
              onClick={() => addToCart(product)}
              id={product.id}
            >
              Comprar
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
