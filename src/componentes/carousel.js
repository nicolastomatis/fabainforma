import React, { useEffect, useRef, useState } from "react";

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

const Carousel = () => {
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    aadee,
    ab,
    APbiotech,
    asinteg,
    avan,
    bernardolew,
    biodata,
    biodiagnostico,
    biomed,
    emsa,
    faba,
    instrumentaBioquimico,
    laborteknic,
    wiener,
  ];
  const carouselTrackRef = useRef(null);
  const totalSlides = images.length;

  useEffect(() => {
    const carouselTrack = carouselTrackRef.current;
    const slides = carouselTrack.querySelectorAll(".carousel-slide");
    const width = slides[0]?.offsetWidth + 20;
    setSlideWidth(width);

    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [totalSlides]);

  useEffect(() => {
    const carouselTrack = carouselTrackRef.current;
    if (carouselTrack) {
      carouselTrack.style.transition = "transform 1s ease-in-out";
      carouselTrack.style.transform = `translateX(-${
        slideWidth * currentSlide
      }px)`;

      // Si se llega a la imagen extra después de la última, volver a la primera para crear el efecto de bucle
      if (currentSlide === totalSlides) {
        setTimeout(() => {
          setCurrentSlide(0);
          carouselTrack.style.transition = "none";
          carouselTrack.style.transform = `translateX(0)`;
        }, 500);
      }
    }
  }, [slideWidth, currentSlide, totalSlides]);

  // Repite las imágenes para crear un bucle infinito
  const repeatedImages = [...images, ...images];

  return (
    <div className="carousel-container">
      <div className="carousel-track" id="carouselTrack" ref={carouselTrackRef}>
        {repeatedImages.map((image, index) => (
          <img
            key={index}
            className="carousel-slide"
            src={image}
            alt={`Imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
