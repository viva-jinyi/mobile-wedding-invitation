/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: https://firebase.google.com/docs/web/setup?hl=ko
// 가이드에 따라 firebase config를 설정합니다.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
export const realtimeDb = getDatabase(firebaseApp);
