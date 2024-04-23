import React, { useState } from "react";
import NotesComponent from "../servicios/insertarNotas"; // Importa tu componente de notas
import "../componentes/style.css"; // Importa los estilos CSS específicos

const InteresGeneral = () => {
  const [currentSection, setCurrentSection] = useState("Interés General"); // Establece la sección actual
  return (
    <div>
    <NotesComponent currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </div>
  );
};

export default InteresGeneral;
