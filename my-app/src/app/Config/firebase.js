import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH7y2POodrgDA8rCSfTB6ENHO4gt-W2jw",
  authDomain: "nr-crm.firebaseapp.com",
  projectId: "nr-crm",
  storageBucket: "nr-crm.appspot.com",
  messagingSenderId: "760067045326",
  appId: "1:760067045326:web:30fc002734964c73481d9f"
};

const app = initializeApp(firebaseConfig);

export default getFirestore();