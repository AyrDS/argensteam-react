import { addDoc, collection, doc, getDoc, getDocs, query, where } from "@firebase/firestore"
import { db } from "../firebase/firebaseConfig"

export const getAllProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const data = [];
    querySnapshot.forEach(doc => {
        data.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return data;
};

export const getProductsById = async id => {
    const q = query(collection(db, "products"), where("categoryId", "==", id));

    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach(doc => {
        data.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return data;
};

export const getOneProduct = async productId => {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: docSnap.id,
            ...docSnap.data()
        };
    } else {
        console.log("Error producto no encontrado");
    }
};

export const addOrder = async (order) => {
    const docRef = await addDoc(collection(db, "orders"), order)

    return docRef.id;
}