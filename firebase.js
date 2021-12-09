import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiSub34XejfSSPcmK3ytAMckejcSUn9rE',
  authDomain: 'whatsapp-2-59bcb.firebaseapp.com',
  projectId: 'whatsapp-2-59bcb',
  storageBucket: 'whatsapp-2-59bcb.appspot.com',
  messagingSenderId: '984919847854',
  appId: '1:984919847854:web:44489614692ec451eb4e3f',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app;

// const app = initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
