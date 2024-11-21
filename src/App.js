import { useState } from "react";
import Banner from "./componentes/Banner";
import Card from "./componentes/Card";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";

function App() {
  const cursos = [
    {
      nome: "Programação",
      corPrimaria: "#57c278",
      corSegundaria: "#d9f7e9",
    },
    {
      nome: "Front-end",
      corPrimaria: "#82CFFA",
      corSegundaria: "#E8F8FF",
    },
    {
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSegundaria: "#F0F8E2",
    },
    {
      nome: "IA",
      corPrimaria: "#7D5BD4",
      corSegundaria: "#CCC0EB",
    },
    {
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSegundaria: "#FDE7E8",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSegundaria: "#FAE9F5",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSegundaria: "#FFF5D9",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSegundaria: "#FFEEDF",
    },
  ];

  const escolas = [
    {
      nome: "Alura",
    },
    {
      nome: "YouTube",
    },
    {
      nome: "Udemy",
    },
  ];

  const [registrations, setRegistrations] = useState([]);

  const newData = (register) => {
    setRegistrations((prevRegistrations) => [...prevRegistrations, register]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        cursos={cursos.map((curso) => curso.nome)}
        escolas={escolas.map((escola) => escola.nome)}
        dataRegistration={(register) => newData(register)}
      />

      {cursos.map((curso) => {
        const filteredRegistrations = registrations.filter(
          (register) =>
            register.curso &&
            curso.nome &&
            register.curso.toLowerCase() === curso.nome.toLowerCase()
        );

        return (
          <Card
            key={curso.nome}
            nome={curso.nome}
            corPrimaria={curso.corPrimaria}
            corSegundaria={curso.corSegundaria}
            registrations={filteredRegistrations}
          />
        );
      })}
      <Rodape />
    </div>
  );
}

export default App;
