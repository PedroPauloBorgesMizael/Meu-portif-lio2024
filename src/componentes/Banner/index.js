import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <div className="fotos__banner">
        <img src="/imagens/foto1.jpg" alt="Foto pessoal" />
        <img src="/imagens/foto2.png" alt="Foto pessoal" />
      </div>
      <div className="texto__banner">
        <h1>
          MEU
          <br />
          PORTFÓLIO
        </h1>
        <p>
          Pedro Paulo Borges Mizael
          <br />
          Iniciando em Front-end
        </p>
      </div>
    </header>
  );
}

export default Banner;
