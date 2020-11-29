export default ({}: { admin: any }) => async (
  docSnap: FirebaseFirestore.DocumentSnapshot
) => {
  // const firestore: FirebaseFirestore.Firestore = admin.firestore();

  const uppercase = { ...docSnap.data() } as {
    text: string;
  };

  uppercase.text = uppercase.text.toUpperCase();

  await docSnap.ref.set(uppercase);

  return true;
};
