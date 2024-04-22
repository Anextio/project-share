import { j as json } from "../../../../chunks/index.js";
import { d as db } from "../../../../chunks/firebase.js";
import { collection, getDocs } from "firebase/firestore";
async function GET() {
  try {
    const discussionsCollection = collection(db, "discussions");
    const querySnapshot = await getDocs(discussionsCollection);
    const discussions = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    return json(discussions);
  } catch (error) {
    console.error("Error retrieving discussions:", error);
    return json({ error: "Failed to retrieve discussions" }, { status: 500 });
  }
}
export {
  GET
};
