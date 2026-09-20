import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9jbZ8rqBVyYbAsNGx4K5rUxrm_RCcDnE",
  authDomain: "agenda-de-tareas-9c2b5.firebaseapp.com",
  projectId: "agenda-de-tareas-9c2b5",
  storageBucket: "agenda-de-tareas-9c2b5.firebasestorage.app",
  messagingSenderId: "889534691406",
  appId: "1:889534691406:web:f95fb0dcdcd5c15d2e2b1f"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)