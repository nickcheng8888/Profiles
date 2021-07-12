import firebase from "firebase";
import "firebase/firestore";



const app = firebase.initializeApp({
    apiKey: "AIzaSyA2qdhfK3lLNYluBwllPNZOS8xi-bEthKU",
    authDomain: "profiles-d2296.firebaseapp.com",
    projectId: "profiles-d2296",
    storageBucket: "profiles-d2296.appspot.com",
    messagingSenderId: "970135869665",
    appId: "1:970135869665:web:f224cb5927ecd22c083fa0",
    measurementId: "G-L2FQMJDZJN"
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_MEASUREMENT_ID

  })


  export default firebase;