import "./CampoSelect.css";

export default function CampoSelect(props) {

  const LabelMinuscula = props.label.toLowerCase();

  return (
    <div className="container">
      <label>{props.label}</label>
      <select
        required
        onChange={evento => props.aoAlterado(evento.target.value)}
        value={props.valor} 
      >
        <option value="" disabled>Selecione um {LabelMinuscula}</option>
        {props.itens.map(item => (
          <option key={item} value={item} translate="no">{item}</option>
        ))}
      </select>
    </div>
  );
}
