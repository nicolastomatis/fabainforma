import React, { useState } from "react";
import NotesComponent from "../servicios/insertarNotas"; // Importa tu componente de notas
import "../componentes/style.css"; // Importa los estilos CSS específicos

const FBA = () => {
  const [currentSection, setCurrentSection] = useState("FBA"); // Establece la sección actual
  return (
    <div>
    <NotesComponent currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </div>
  );
};

export default FBA;
