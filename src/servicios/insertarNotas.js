import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Asegúrate de que esto importa la instancia correcta de Firebase Realtime Database
import "firebase/compat/database";
import { Link } from "react-router-dom";
import "../componentes/style.css"; // Importa los estilos CSS específicos

const NotesComponent = ({ currentSection }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const snapshot = await db.ref("notas").once("value"); // Accede a la referencia 'notas' en Realtime Database
        const fetchedNotes = [];
        snapshot.forEach((childSnapshot) => {
          const note = childSnapshot.val();
          if (note.seccion === currentSection) { // Filtra las notas según la sección actual
            fetchedNotes.push({
              id: childSnapshot.key,
              ...note,
            });
          }
        });
        setNotes(fetchedNotes);
      } catch (error) {
        console.error("Error fetching notes: ", error);
      }
    };

    fetchNotes();
  }, [currentSection]); // Ejecuta el efecto cuando cambia la sección actual

  return (
    <div className="hero__seccion">
      <main>
    <div className="listaNoticiasSecundarias">
      {notes.map((note) => (
        <article  key={note.id}>
          <div>
          <img src={note.imagenURL} alt="" />
              </div>
        <div className="datos-nota">
        <h3>{note.titulo}</h3>
        <p>{note.bajada}</p>
        <Link to={`/notes/${note.id}`}>
            {/* Título de la nota */}
            <p className="boton-nota">Leer más</p>
          </Link>
        
        </div>
        </article>
      ))}
    </div>
    </main>
    </div>
  );
};
export default NotesComponent;
