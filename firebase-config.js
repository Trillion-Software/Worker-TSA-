/* ==========================================================================
   Worker TSA — Configuration Firebase
   Remplacez les valeurs ci-dessous par celles de votre projet Firebase
   (Console Firebase > Paramètres du projet > Vos applications > SDK).
   ========================================================================== */

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
// import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJET",
  storageBucket: "VOTRE_PROJET.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID"
};

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);
// const storage = getStorage(app);

// Une fois vos clés renseignées et les imports activés ci-dessus,
// vous pourrez utiliser `auth`, `db` et `storage` dans main.js
// pour connecter les formulaires (connexion, inscription, profils) à Firebase.
