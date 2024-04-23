// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCa6F762Y7ERpvWlCcnQFuF_FJ_K9AiBdU",
    authDomain: "fabainforma-eeb52.firebaseapp.com",
    databaseURL: "https://fabainforma-eeb52-default-rtdb.firebaseio.com",
    projectId: "fabainforma-eeb52",
    storageBucket: "fabainforma-eeb52.appspot.com",
    messagingSenderId: "829223746536",
    appId: "1:829223746536:web:7f12534c9f51b02c70025d",
    measurementId: "G-7HH8LVLY3R",
  };
  
  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);

// Obtener una referencia a la base de datos de Firebase y al almacenamiento de Firebase
const database = firebase.database();
const storage = firebase.storage();

// Manejar el envío del formulario
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Obtener los valores de los campos del formulario
    const numeroRevista = formulario.numeroRevista.value;
    const mes = formulario.mes.value;
    const anio = formulario.anio.value;
    const seccion = formulario.seccion.value;
    const volanta = formulario.volanta.value;
    const titulo = formulario.titulo.value;
    const bajada = formulario.bajada.value;
    const cuerpoNota = formulario.cuerpoNota.value;
    const imagen = formulario.imagen.files[0];
    const epigrafeImg = formulario.epigrafeImg.value;

    // Subir la imagen al almacenamiento de Firebase
    const imagenRef = storage.ref().child(`imagenes/${imagen.name}`);
    await imagenRef.put(imagen);
    const imagenURL = await imagenRef.getDownloadURL();

    // Guardar los datos en la base de datos de Firebase
    database.ref('notas').push({
        numeroRevista: numeroRevista,
        mes: mes,
        anio: anio,
        seccion: seccion,
        volanta: volanta,
        titulo: titulo,
        bajada: bajada,
        cuerpoNota: cuerpoNota,
        imagenURL: imagenURL,
        epigrafeImg: epigrafeImg
    })
    .then(() => {
        alert('¡Datos enviados con éxito!');
        formulario.reset(); // Limpiar el formulario después del envío
    })
    .catch((error) => {
        console.error('Error al enviar los datos:', error);
    });
});
