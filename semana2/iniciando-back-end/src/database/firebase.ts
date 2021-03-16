import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBdNzDmpVs3FBaGy4sKTqlsi8EepFO_IL8',
  authDomain: 'estacao-33a3f.firebaseapp.com',
  databaseURL: 'https://estacao-33a3f.firebaseio.com',
  projectId: 'estacao-33a3f',
  storageBucket: 'estacao-33a3f.appspot.com',
  messagingSenderId: '944396488582',
  appId: '1:944396488582:web:f58cffb486576dc3',
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;
