import { Admin } from "../src/index";

const firestore: FirebaseFirestore.Firestore = Admin.firestore();

export async function removeAllDocsWithPath(path: string) {
  try {
    const listDocs = await firestore.collection(path).listDocuments();

    const batch = firestore.batch();

    listDocs.forEach((doc) => batch.delete(doc));

    return await batch.commit();
  } catch (e) {
    throw e;
  }
}
