import React, { useState } from "react";
import NotesComponent from "../servicios/insertarNotas"; // Importa tu componente de notas
import "../componentes/style.css"; // Importa los estilos CSS específicos

const ABCL = () => {
  const [currentSection, setCurrentSection] = useState("ABCL"); // Establece la sección actual


  return (
    <div className="actualidad-cientifica">
      <NotesComponent currentSection={currentSection} setCurrentSection={setCurrentSection} />
    </div>
  );
};

export default ABCL;
