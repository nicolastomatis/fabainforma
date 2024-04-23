// Institucional.js
import React from "react";
import "../componentes/style.css"; // Importa los estilos CSS específicos
import noticia1 from "../assets/images/img1.png";
import noticia2 from "../assets/images/img2.png";
import noticia3 from "../assets/images/img3.png";

import aadee from "../assets/images/anunciantes/aadee.jpg";
import ab from "../assets/images/anunciantes/ab.jpg";
import APbiotech from "../assets/images/anunciantes/APbiotech.jpg";
import asinteg from "../assets/images/anunciantes/asinteg.jpg";
import avan from "../assets/images/anunciantes/avan.jpg";
import bernardolew from "../assets/images/anunciantes/bernardolew.jpg";
import biodata from "../assets/images/anunciantes/biodata.png";
import biodiagnostico from "../assets/images/anunciantes/biodiagnostico.jpg";
import biomed from "../assets/images/anunciantes/biomed.jpg";
import emsa from "../assets/images/anunciantes/emsa.jpg";
import faba from "../assets/images/anunciantes/faba.jpg";
import instrumentaBioquimico from "../assets/images/anunciantes/instrumentalbioquimico.jpg";
import laborteknic from "../assets/images/anunciantes/laborteknic.jpg";
import wiener from "../assets/images/anunciantes/wiener.jpg";

import Carousel from "../componentes/carousel";

const Index = () => {
  return (
    <div className="hero__inicio">
      <section className="ContenedorNoticias">
        <div className="nota1">
          <a href="">
            <img src={noticia1} alt="" />
            <h2 className="titulo">
              Las bioquímicas en el ejercicio de su profesión
            </h2>
          </a>
        </div>
        <div className="nota2">
          <a href="">
            <img src={noticia2} alt="" />
            <h2 className="titulo">
              <stron>Competencia</stron> ética y constructiva
            </h2>
          </a>
        </div>
        <div className="nota3">
          <a href="">
            <img src={noticia3} alt="" />
            <h2 className="titulo">
              Homenaje al Doctor Juan Miguel Castagnino
            </h2>
          </a>
        </div>
      </section>
      <section className="anunciantes">
        <div className="carousel-container">
          {/* Utiliza el componente Carousel en lugar de la estructura HTML */}
          <Carousel />
        </div>
      </section>
    </div>
  );
};

export default Index;
