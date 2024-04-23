import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import facebook from "../assets/images/facebookColor.png";
import instagram from "../assets/images/instagramColor.png";
import twitter from "../assets/images/twitterColor.png";

const NoteDetail = () => {
  const { id } = useParams(); // Obtén el ID de la nota de los parámetros de la URL
  const [note, setNote] = useState(null);

  useEffect(() => {
    // Función para buscar la nota en la base de datos por su ID
    const fetchNote = async () => {
      try {
        const snapshot = await db.ref(`notas/${id}`).once("value");
        const noteData = snapshot.val();
        setNote(noteData);
      } catch (error) {
        console.error("Error fetching note: ", error);
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return <div>Cargando...</div>;
  }

  return (
    <section key={note.id} className="hero__noticia">
      <section className="nombreSeccion">
        <h2>{note.seccion}</h2>
      </section>
      <section className="tituloNota">
        <span>{note.volanta}</span>
        <h2>{note.titulo}</h2>
      </section>
      <div className="imagenConEpigrafe"><img src={note.imagenURL} alt="" />
      <p className="epigrafeImg">{note.epigrafeImg}</p>
     </div>
      <section className="bajada">
        <p>{note.bajada}</p>
      </section>
      <section className="compartir">
        <p>Compartir en:</p>
        <a href="">
          <img src={facebook} alt="" />
        </a>
        <a href="">
          <img src={twitter} alt="" />
        </a>
        <a href="">
          <img src={instagram} alt="" />
        </a>
      </section>
      <section className="cuerpoNota">
        <div dangerouslySetInnerHTML={{ __html: note.cuerpoNota }} />
      </section>
    </section>
  );
};

export default NoteDetail;
