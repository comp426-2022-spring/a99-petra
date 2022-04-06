// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default async function handler(req, res) {

  const db = getFirestore();
  const data = {}

  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    data[doc.id] = doc.data()
  }); 
  
  res.status(200).json(data)
}
