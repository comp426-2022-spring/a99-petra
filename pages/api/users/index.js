import { getFirestore } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore"; 


export default async (req, res) => {
    const db = getFirestore();
    const { uid } = req.body;
    try {
        await setDoc(doc(db, "users", uid), {
            ...req.body,
            created: new Date().toISOString(),
          });
        res.status(200).json()
    } catch (e){
        res.status(400)
    }
}

