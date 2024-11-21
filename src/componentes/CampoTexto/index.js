import './CampoTexto.css';

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="container">
            <label>{props.titulo}</label>
            <input value={props.valor} onChange={aoDigitado} type='text' placeholder={props.placeholder} id={props.id} minLength='1' maxLength='300' required />
        </div>
    )
}

export default CampoTexto