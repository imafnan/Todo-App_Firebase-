import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDLR8IjUTYqMxcPEH6kxdbHzawC5_xoH2c",
  authDomain: "todo-bf241.firebaseapp.com",
  projectId: "todo-bf241",
  storageBucket: "todo-bf241.firebasestorage.app",
  messagingSenderId: "240637553776",
  appId: "1:240637553776:web:3c339c70db3c62cb8198b5"
};

const app = initializeApp(firebaseConfig);



export default app