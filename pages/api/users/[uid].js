import { getFirestore } from "firebase/firestore"
import { doc, updateDoc, getDoc, deleteDoc } from "firebase/firestore";


export default async (req, res) => {
    const { uid } = req.query;
    const db = getFirestore();

    try {
        if (req.method === 'PUT') {
            const userRef = doc(db, "users", uid);

            await updateDoc(userRef, {
                ...req.body,
                updated: new Date().toISOString(),
            });
        } else if (req.method === 'GET') {
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                res.status(200).json(docSnap.data());
            } else {
                res.status(404).end();
            }

        } else if (req.method === 'DELETE') {
            await deleteDoc(doc(db, "users", uid));
        }
        res.status(200).end();
    } catch (e) {
        res.status(400).end();
    }
}