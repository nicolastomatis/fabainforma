import firebase from "firebase/compat/app"; // Usa 'compat' para compatibilidad con versiones anteriores
import "firebase/compat/database"; // Importa el módulo de Realtime Database

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

export const db = firebase.database(); // Obtén una instancia de la base de datos en tiempo real
