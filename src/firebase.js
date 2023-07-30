import { firebaseConfig } from './firebase-config';
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// init services
const db = getFirestore(app)

// Collection refs
const todosCollectionRef = collection(db, 'todos');

// get collection data

// It will be imported into your react app whenever it is needed
export { db, todosCollectionRef };