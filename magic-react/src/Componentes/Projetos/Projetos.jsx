import "./Projetos.css";
function Projetos(props) {
  return (
    <section className="secao-projetos">
      <h2>Projetos</h2>

      <ul className="lista-de-projetos">
        <li>
          <a href="">Link pro GitHub</a>
          <img src="src/assets/facebook.png" alt="" />
        </li>
        <li>
          <a href="">Link pro GitHub</a>
          <img src="src/assets/tesla.png" alt="" />
        </li>
        <li>
          <a href="">Link pro GitHub</a>
          <img src="src/assets/vite.png" alt="" />
        </li>
      </ul>
    </section>
  );
}

export default Projetos;
