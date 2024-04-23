import React, { useState } from "react";
import NotesComponent from "../servicios/insertarNotas"; // Importa tu componente de notas
import "../componentes/style.css"; // Importa los estilos CSS específicos

const SACT = () => {
  const [currentSection, setCurrentSection] = useState("SACT"); // Establece la sección actual
  return (
    <div>
    <NotesComponent currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </div>
  );
};

export default SACT;
