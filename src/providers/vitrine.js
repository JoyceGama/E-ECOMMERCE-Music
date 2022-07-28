import Arabe from "../assets/lorena.jpg";
import Metal from "../assets/hellowen.jpg";
import Eletronica from "../assets/bingo.jpg";
import Forro from "../assets/huanna.jpg";
import Kpop from "../assets/mirror.jpg";
import NewAge from "../assets/era.jpg";

import Lorena from "../audio/lorena.mp3";
import Hellowen from "../audio/helloween.mp3";
import Bingo from "../audio/rattle.mp3";
import Huanna from "../audio/huanna.mp3";
import Mirror from "../audio/4minutes.mp3";
import Mass from "../audio/theMass.mp3";

import { createContext, useState } from "react";

export const VitrineContext = createContext([]);

export const VitrineProvider = ({ children }) => {
  const [vitrine] = useState([
    {
      id: 1,
      img: Arabe,
      nome: "VSE MI E TAYA",
      artista: "Lorena ft.Galena",
      genero: "Árabe",
      preco: 49.99,
      audio: Lorena,
    },
    {
      id: 2,
      img: Metal,
      nome: "I Want Out",
      artista: "Helloween",
      genero: "Metal",
      preco: 69.99,
      audio: Hellowen,
    },
    {
      id: 3,
      img: Eletronica,
      nome: "Rattle",
      artista: "Bingo Players",
      genero: "Eletrônica",
      preco: 39.99,
      audio: Bingo,
    },
    {
      id: 4,
      img: Forro,
      nome: "Passinho",
      artista: "Trio Huanna",
      genero: "Forro",
      preco: 39.95,
      audio: Huanna,
    },
    {
      id: 5,
      img: Kpop,
      nome: "Mirror mirror",
      artista: "4Minutes",
      genero: "Kpop",
      preco: 59.69,
      audio: Mirror,
    },
    {
      id: 6,
      img: NewAge,
      nome: "The Mass",
      artista: "ERA",
      genero: "NewAge",
      preco: 79.45,
      audio: Mass,
    },
  ]);

  return (
    <VitrineContext.Provider value={{ vitrine }}>
      {children}
    </VitrineContext.Provider>
  );
};
