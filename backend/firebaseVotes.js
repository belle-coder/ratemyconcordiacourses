import { updateDoc } from "firebase/firestore";
import { db } from "./firebase";

// getting table data
const getTableDataItem = async (tableName, key) => {
  try {
    console.log(`tableName:${tableName} id:${key}`);
    // Do call to firebase
    const docRef = doc(db, tableName, key);
    const docSnapShot = await getDoc(docRef);

    // If file exists, return it
    if (docSnapShot.exists()) {
      console.log("Table Data Item Found!");
      return docSnapShot.data();
    } else {
      // If not found, write to console.
      console.error(`[getTableDataItem] Document not found`);
    }
  } catch (error) {
    console.log(`[getTableDataItem] ${error}`);
    console.trace();
  }
};

// adding/updating votes
const addVotes = async (userEmail, className, voteType) => {
  try {
    // Get logged in user's information
    const docRef = doc(db, "Users", userEmail);
    let userInfo = await getTableDataItem("Users", userEmail);

    // Update authorized field in admin account
    docRef && (await updateDoc(docRef, className, voteType));

    // Get updated admin account
    userInfo = await getTableDataItem("Users", userEmail);

    return userInfo;
  } catch (error) {
    console.log("[addVotes]" + error);
  }
};

export { addVotes };
