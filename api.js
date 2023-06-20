
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyB6dlzPsNHzEpYSiJAdLESEErdR6mJ4kHY",
    authDomain: "vanlife-169f4.firebaseapp.com",
    projectId: "vanlife-169f4",
    storageBucket: "vanlife-169f4.appspot.com",
    messagingSenderId: "89091284567",
    appId: "1:89091284567:web:7e59f2a56e86c854904d12"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr
}



export async function loginUser(creeds) {
    const res = await fetch('/api/login',
        { method: "post", body: JSON.stringify(creeds) }
    )
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}