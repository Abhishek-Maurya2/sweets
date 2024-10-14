import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDb__5KWuEXypwA4LFdvi4GKUKvO_C-5D4",
  authDomain: "sweet-d83b9.firebaseapp.com",
  projectId: "sweet-d83b9",
  storageBucket: "sweet-d83b9.appspot.com",
  messagingSenderId: "940106353908",
  appId: "1:940106353908:web:0a4471eac5b02dc4d162a1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const addItems = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "items"), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const removeItems = async (id) => {
  try {
    await deleteDoc(doc(db, "items", id));
    console.log("Document successfully deleted!");
  } catch (e) {
    console.error("Error removing document: ", e);
  }
};

const updateItems = async (id, data) => {
  try {
    await updateDoc(doc(db, "items", id), data);
    console.log("Document successfully updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

const getAllItems = async () => {
  const items = [];
  const querySnapshot = await getDocs(collection(db, "items"));
  querySnapshot.forEach((doc) => {
    items.push({ ...doc.data(), id: doc.id });
  });
  return items;
};

export { auth, db, addItems, removeItems, updateItems, getAllItems };
