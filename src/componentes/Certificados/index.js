import "./Certificados.css";

export default function Certificados(props) {
  const css = { backgroundColor: props.corPrimaria };

  return (
    <div className="container__certificado">
      <div className="cabecalho" style={css}>
        <img
          className="escola"
          src={`./imagens/${props.escolaEscolhida}.png`}
          alt={`Ícone da ${props.escolaEscolhida}`}
        />
      </div>
      <div className="rodape">
        <h3>
          {props.curso} - {props.escolaEscolhida}
        </h3>
        <div className="progress__container">
          <span style={{width: `${props.progresso}%`}} >{props.progresso}%</span>
        </div>
      </div>
    </div>
  );
}