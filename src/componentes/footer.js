import React from "react";
import "../componentes/style.css"; // Importa los estilos CSS
import facebook from "../assets/images/facebook.png";
import faba from "../assets/images/faba.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className="hero__inicio">
      <footer>
        <div className="footer">
          <div className="informacion">
            <a href="index.html" target="_blank">
              <h1>
                <strong>FABA</strong>Informa
              </h1>
            </a>
            <p>
              Órgano de difusión oficial{" "}
              <strong>
                Federación Bioquímica de la Provincia de Buenos Aires
              </strong>
            </p>
            <p>
              <strong>Director:</strong> Dr. Claudio H. Cova
            </p>
            <p>
              <strong>Secretaria de Redacción:</strong> Ana María Pertierra
            </p>
            <p>
              <strong>Publicidad:</strong> Calle 6 n° 1344
            </p>
            <p>
              <strong>Tel:</strong> (+54+221) 483-8821 / 482-2797 int. 350
            </p>
          </div>
          <div className="contactos">
            <div className="redesSociales">
              <a
                href="https://www.facebook.com/revista.FABAInforma"
                target="_blank"
              >
                <img src={facebook} alt="" />
              </a>
              <a href="https://twitter.com/FabaInforma" target="_blank">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.instagram.com/fabainforma/" target="_blank">
                <img src={instagram} alt="" />
              </a>
            </div>
            <div className="faba">
              <a href="https://www.faba.org.ar/" target="_blank">
                <img src={faba} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="creador">
          <strong>
            © FABA Informa. Todos los derechos reservados.Diseñado por Área de
            Imagen y Comunicación de FABA.
          </strong>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
