import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyD3Qf9B5Jgy-vGCLBdmLSmqPVA8u8xO1tY",
  
    authDomain: "project-share-c9e0f.firebaseapp.com",
  
    projectId: "project-share-c9e0f",
  
    storageBucket: "project-share-c9e0f.appspot.com",
  
    messagingSenderId: "356711364165",
  
    appId: "1:356711364165:web:afd8d42ae806fe4ebfd52c",
  
    measurementId: "G-R0X2CB3XQK"
  
  };
  
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };