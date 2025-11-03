import { useState } from "react";
import "./Conteudo.css";

function Conteudo() {
  const [artigo, setArtigo] = useState();

  function clicouNoBotao() {
    setArtigo(
      <p>
        Estudo programação há 2 anos. Adoro criar aplicações web e mobile. Estou
        sempre buscando aprender novas tecnologias e aprimorar minhas
        habilidades.
      </p>
    );
  }
  return (
    <main className="conteudo">
      <section className="conteudo-textual">
        <h2 className="texto-introducao">Meu nome é Evandro</h2>
        <h2>Sou desenvolvedor Web</h2>
        <button className="botao-saiba-mais" onClick={clicouNoBotao}>
          Saiba mais
        </button>
        <article>{artigo}</article>
      </section>
      <img className="ilustracao" src="src/assets/programmer.png" alt="" />
    </main>
  );
}

export default Conteudo;
