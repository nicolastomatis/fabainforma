// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../componentes/style.css"; // Importa los estilos CSS del header

const Header = () => {
  return (
    <header>
      <h1 className="logotipo">
        <Link to="/">
          {" "}
          {/* Enlace a la página de inicio */}
          <strong>FABA</strong>Informa
        </Link>
      </h1>
      <nav className="nav" id="nav">
        <ul className="nav-list">
          <li>
            <Link to="/institucional">Institucional</Link>{" "}
          </li>
          <li>
            <Link to="/actualidad-cientifica">Actualidad científica</Link>{" "}
          </li>
          <li>
            <Link to="/interes-general">Interés General</Link>{" "}
          </li>
          <li>
            <Link to="/ABCL">ABCL</Link>{" "}
          </li>
          <li>
            <Link to="/SACT">SACT</Link>{" "}
          </li>
          <li>
            <Link to="/FBA">FBA</Link>{" "}
          </li>
        </ul>
      </nav>
      {/* Otros elementos de tu menú */}
    </header>
  );
};

export default Header;
