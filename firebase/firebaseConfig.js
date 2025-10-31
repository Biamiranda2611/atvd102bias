// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAz-3sqyYPmQ4I0rFFE2P3qiypIU6RMEk8",
  authDomain: "proj2-bbf9f.firebaseapp.com",
  projectId: "proj2-bbf9f",
  storageBucket: "proj2-bbf9f.firebasestorage.app",
  messagingSenderId: "553099144273",
  appId: "1:553099144273:web:fe2a4d914a4792c429dc70",
  measurementId: "G-KPG3XF4951",

  // ✅ MUITO IMPORTANTE PARA O REALTIME DATABASE FUNCIONAR
  databaseURL: "https://proj2-bbf9f-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

// Export auth and database
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
