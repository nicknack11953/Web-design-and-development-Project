import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCOOs4sh8y1UDaOyaWdmk4e3O0EttFRVfk",
  authDomain: "web-design-project-28643.firebaseapp.com",
  projectId: "web-design-project-28643",
  storageBucket: "web-design-project-28643.appspot.com",
  messagingSenderId: "903569791597",
  appId: "1:903569791597:web:6f3d97880bbab83e9f7d64",
  measurementId: "G-D4KLLG9FLQ"
};

export const db = firebase
  .initializeApp(firebaseConfig)
  .database();
