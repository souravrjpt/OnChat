// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAGBdBKnf6Z6-KN6MySImHT69kT67UtQVE',
  authDomain: 'onchat-98fb6.firebaseapp.com',
  projectId: 'onchat-98fb6',
  storageBucket: 'onchat-98fb6.appspot.com',
  messagingSenderId: '244730937110',
  appId: '1:244730937110:web:2ef2d30ccce56054e9da37',
  measurementId: 'G-BH7ZKS3WYQ',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
