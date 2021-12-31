import { useEffect, useState } from "react";
import { mega } from "../functions/mega";
import NumeroDisplay from "../components/NumeroDisplay";

export default function megasena() {
  //React HOOks
  const [qtde, setQtde] = useState(6);
  const [numeros, setNumeros] = useState([]);

  useEffect(() => {
    setNumeros(mega());
  }, []);

  function renderizarNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>
        Gerador de números <br /> Mega-Sena
      </h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {renderizarNumeros()}
      </div>
      <div>
        {/* <input
          type="number"
          min={6}
          max={20}
          value={qtde}
          onChange={(ev) => setQtde(ev.target.value)}
        /> */}
        <button onClick={() => setNumeros(mega(qtde))}>Sortear números</button>
      </div>
      <hr />
      <footer>
        <a href="https://www.linkedin.com/in/wagner-silva-6a163555/">
          by Wagner Paulo
        </a>
      </footer>
    </div>
  );
}
