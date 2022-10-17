// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAT7-IzSU5v_UTGQxIx5d0qDQLVcT-G49A",
    authDomain: "proyecto-react-1-33373.firebaseapp.com",
    projectId: "proyecto-react-1-33373",
    storageBucket: "proyecto-react-1-33373.appspot.com",
    messagingSenderId: "1021171713574",
    appId: "1:1021171713574:web:0c4f878017539049a408e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 

export async function getItems(){
    const miCollection = collection(firestore, "categorias");
    let snapshotDb = await getDocs(miCollection);

    let dataDocs = snapshotDb.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id}
        return docFormateado;
    });
    return dataDocs;
}


export async function getSinlgeItems (idParams){
    const docRef = doc(firestore, "categorias", idParams );
    const docSnapshot = await getDoc(docRef);

    const docFormateado = { ...docSnapshot.data(), id: docSnapshot.id}
    return docFormateado;
}


export async function getItemsByCategoria (catParams){
    const miCollection = collection(firestore, "categorias");
    const queryCategoria =query(miCollection, where("categoria", "==", catParams));

    const snapshotDb = await getDocs(queryCategoria);
    
    let dataDocs = snapshotDb.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id}
        return docFormateado;
    });
    return dataDocs;
}
export default firestore;