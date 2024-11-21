import { useState } from "react";
import Botao from "../Botao";
import CampoNumero from "../CampoNumero";
import CampoSelect from "../CampoSelect";
import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formulario = (props) => {

  const [nomeCurso, setNomeCurso] = useState("");
  const [progresso, setProgresso] = useState("");
  const [descricao, setDescricao] = useState("");
  const [curso, setCurso] = useState("");
  const [escolaEscolhida, setEscolaEscolhida] = useState("");
  
  const callBack = (evento) => {
    evento.preventDefault();
    props.dataRegistration({
      nomeCurso,
      progresso,
      descricao,
      curso,
      escolaEscolhida,
    })
    setNomeCurso('')
    setProgresso('')
    setDescricao('')
    setCurso('')
    setEscolaEscolhida('')
  };

  return (
    <section className="formulario">
      <form onSubmit={callBack}>
        <h2>Preencha os dados para criar um card de um curso</h2>
        <CampoTexto
          titulo="Nome do curso"
          id="curso"
          placeholder="Insira o nome do curso"
          valor={nomeCurso}
          aoAlterado={(valor) => setNomeCurso(valor)}
        />
        <CampoNumero
          titulo="Progresso do curso"
          id="progresso"
          placeholder="Insira o seu progresso"
          valor={progresso}
          aoAlterado={(valor) => setProgresso(valor)}
        />
        <CampoTexto
          titulo="Descrição"
          id="descricao"
          placeholder="Insira alguma informação adicional"
          valor={descricao}
          aoAlterado={(valor) => setDescricao(valor)}
        />
        <CampoSelect 
        label="Tipo de Curso" 
        itens={props.cursos}
        valor={curso}
        aoAlterado={(valor) => setCurso(valor)}
        />
        <CampoSelect
        label="Site"
        itens={props.escolas}
        valor={escolaEscolhida}
        aoAlterado={(valor) => setEscolaEscolhida(valor)}
        />
        <Botao>Adicionar curso</Botao>
      </form>
    </section>
  );
};

export default Formulario;
