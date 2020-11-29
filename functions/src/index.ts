import * as functions from "firebase-functions";
import FirestoreUppercaseOnCreate from "./firestores/Uppercases/onCreate";

const admin = require("firebase-admin");
admin.initializeApp();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

const context = { admin: admin };

exports.uppercase = functions.firestore
  .document("/uppercase/:id")
  .onCreate(FirestoreUppercaseOnCreate(context));

export const Admin = admin;
