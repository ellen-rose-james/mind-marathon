
const firebaseConfig = {
  apiKey: "AIzaSyB6JEG5j9tb6XbKhT0E5wxXYSphNvpRPJw",
  authDomain: "mind-marathon-db.firebaseapp.com",
  projectId: "mind-marathon-db",
  storageBucket: "mind-marathon-db.firebasestorage.app",
  messagingSenderId: "158031876314",
  appId: "1:158031876314:web:7c212dd486416992b055e3"
};

firebase.initializeApp(firebaseConfig);


window.db = firebase.firestore();
window.auth = firebase.auth();