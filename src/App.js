// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/header";
import Footer from "./componentes/footer";
import Institucional from "./pages/institucional";
import ActualidadCientifica from "./pages/actualidadCientifica";
import InteresGeneral from "./pages/interesGeneral";
import ABCL from "./pages/abcl";
import SACT from "./pages/sact";
import FBA from "./pages/fba";
import Index from "./componentes/index";

import NoteDetail from "./servicios/detalleNota";

// Importa otros componentes de sección aquí

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header /> {/* Integrar el componente Header en la aplicación */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/institucional" element={<Institucional />} />
          <Route
            path="/actualidad-cientifica"
            element={<ActualidadCientifica />}
          />
          <Route path="/interes-general" element={<InteresGeneral />} />
          <Route path="/ABCL" element={<ABCL />} />

          <Route path="/SACT" element={<SACT />} />

          <Route path="/FBA" element={<FBA />} />
          <Route path="/notes/:id" element={<NoteDetail />} />
        </Routes>
        <Footer /> {/* Integrar el componente Header en la aplicación */}
      </div>
    </Router>
    
  );
};

export default App;
