import "./Rodape.css";

export default function Rodape() {
  return (
    <div className="container__rodape">
      <div className="rodape__referencias">
        <h2>
          Desenvolvido por
          <br />
          Pedro Paulo Borges Mizael
        </h2>
        <p>
          Inspirado no curso da {" "}
          <a href="https://cursos.alura.com.br/course/react-desenvolvendo-javascript">
            Alura
          </a>
        </p>
      </div>
      <div className="rodape__redes">
        <h3>Acesse minhas redes:</h3>
        <div>
          <a href="https://www.linkedin.com/in/pedro-paulo-borges-mizael-7400b6321/">
            <img
              src="./imagens/Linkedin.png"
              alt="LinkedIn"
              className="imagens"
            />
          </a>
          <a href="https://github.com/PedroPauloBorgesMizael">
            <img src="./imagens/Github.svg" alt="GitHub" className="imagens" />
          </a>
          <a href="https://www.instagram.com/pedro.p_062/">
            <img src="./imagens/ig.png" alt="Instagram" className="imagens" />
          </a>
        </div>
      </div>
    </div>
  );
}
