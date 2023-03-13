import React, { useEffect, useState } from "react";
import { fraseRandom } from "../service/fraseRandom";
import { imagenRandom } from "../service/imagemRandom";
import "./App.css";

function App() {
  const [frase, setFrase] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    fraseRandom().then((nuevaFrase)=> setFrase(nuevaFrase))
  }, []);

  useEffect(() => {
    imagenRandom(frase).then((img)=> setImg(img))
  }, [frase]);

  const handleClick = async () => {
    const nuevaFrase = await fraseRandom();
    setFrase(nuevaFrase);
  };

  return (
    <>
      <div className="container">
        <div className="text">
          <h2>DESARROLLO PRUEBA TECNICA</h2>
          <button onClick={handleClick}>Cambio de Frase</button>
          {frase && <p>{frase}</p>}
          {img && <img src={`${img}`} alt="imagen de un gato" />}
        </div>
      </div>
    </>
  );
}

export default App;
