import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  Firestore,
} from "firebase/firestore";

// Firebase configuration
// These values should be replaced with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Check if Firebase config is valid
const isFirebaseConfigValid = () => {
  return (
    firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== "YOUR_API_KEY" &&
    firebaseConfig.projectId &&
    firebaseConfig.projectId !== "YOUR_PROJECT_ID"
  );
};

let app: FirebaseApp | undefined;
let db: Firestore | undefined;

try {
  // Only initialize Firebase if config is valid
  if (isFirebaseConfigValid()) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    // console.log("Firebase initialized successfully");
  } else {
    // console.warn("Firebase configuration is incomplete or invalid");
  }
} catch (error) {
  //   console.error("Error initializing Firebase:", error);
  console.log("Error.");
}

// Function to submit contact form data to Firestore
export const submitContactForm = async (email: string, message: string) => {
  // Check if Firebase is properly initialized
  if (!db) {
    console.error("Firebase is not initialized. Cannot submit form.");
    return {
      success: false,
      error:
        "Firebase connection is not available. Please check your configuration.",
    };
  }

  try {
    // Add form data to "contactMessages" collection
    const docRef = await addDoc(collection(db, "contactMessages"), {
      email,
      message,
      createdAt: serverTimestamp(),
    });

    console.log("Document written with ID: ", docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding document: ", error);
    // Return a more specific error message
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export { db };
