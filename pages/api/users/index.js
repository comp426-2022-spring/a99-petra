import { getFirestore } from "firebase/firestore"

export default async (req, res) => {
    const db = getFirestore();
    try {
        res.status(200).json()
    } catch (e){
        res.status(400)
    }
}