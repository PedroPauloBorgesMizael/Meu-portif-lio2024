import './CampoNumero.css'

const CampoNumero = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="container">
            <label>{props.titulo}</label>
            <input value={props.valor} onChange={aoDigitado} type='number' placeholder={props.placeholder} id={props.id} min='0' max='100' required />
        </div>
    )
}

export default CampoNumero