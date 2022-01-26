import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNQWFdZxnV4boViyHvmklcgJGE8uYhqC0",
  authDomain: "todo-crud-1b0d4.firebaseapp.com",
  projectId: "todo-crud-1b0d4",
  storageBucket: "todo-crud-1b0d4.appspot.com",
  messagingSenderId: "371418629105",
  appId: "1:371418629105:web:bec1a0c880184c2bc17a50"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
