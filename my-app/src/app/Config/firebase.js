import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWvRCBRvxjrtGCZmxJoJ3WlGpZPuaHXJw",
  authDomain: "nr-crm-99.firebaseapp.com",
  projectId: "nr-crm-99",
  storageBucket: "nr-crm-99.appspot.com",
  messagingSenderId: "972539311786",
  appId: "1:972539311786:web:e45276b771a9f3e31e02d3"
};

const appFirebase = initializeApp(firebaseConfig);

export default getFirestore();