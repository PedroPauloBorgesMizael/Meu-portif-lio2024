import Certificados from "../Certificados";
import "./Card.css";

export default function Card(props) {
  const css = { backgroundColor: props.corSegundaria };

  return (
    (props.registrations.length > 0) ? <section className="container__card" style={css}>
      <h2 style={{ borderColor: props.corPrimaria }}>{props.nome}</h2>
      <div className="card__cerificados">
        {props.registrations.map((registro) => (
          <Certificados
            corPrimaria={props.corPrimaria}
            key={registro.nomeCurso}
            escolaEscolhida={registro.escolaEscolhida}
            curso={registro.nomeCurso}
            descricao={registro.descricao}
            progresso={registro.progresso}
          />
        ))}
      </div>
    </section>
    : ''
  );
}
