import Header from "./Componentes/Header/Header.jsx";
import Conteudo from "./Componentes/Conteudo/Conteudo.jsx";
import "./App.css";
import Projetos from "./Componentes/Projetos/Projetos.jsx";
import { useState } from "react";

function App() {
  const [projetos, setProjetos] = useState([
    {
      linkDoGithub: "https://github.com",
      caminhoDaImagem: "src/assets/facebook.png",
    },
    {
      linkDoGithub: "https://github.com",
      caminhoDaImagem: "src/assets/tesla.png",
    },
    {
      linkDoGithub: "https://github.com",
      caminhoDaImagem: "src/assets/vite.png",
    },
  ]);

  return (
    <div className="conteudo-principal">
      <Header />
      <Conteudo />
      <Projetos projetos={projetos} />
      <footer className="footer">
        
        <div>
          <h4>Contato</h4>
          <p>evandro.menschaid@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
