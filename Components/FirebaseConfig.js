import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAbPYRecYFpZ94n_hkd11gstTnUNnObcHw",
  authDomain: "thunkable-1ca6f.firebaseapp.com",
  databaseURL: "https://thunkable-1ca6f.firebaseio.com",
  projectId: "thunkable-1ca6f",
  storageBucket: "thunkable-1ca6f.appspot.com",
  messagingSenderId: "988053775986",
  appId: "1:988053775986:web:f9e6a43d10397fac3bc4eb",
  measurementId: "G-9PDLFBHRC9",
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();
