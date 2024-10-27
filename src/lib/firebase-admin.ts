import admin from "firebase-admin";


const  privateKey  = JSON.parse(process.env.FIREBASE_PRIVATE_KEY as string);

const adminApp = admin.apps.length
  ? admin.app()
  : admin.initializeApp({
      credential: admin.credential.cert(privateKey),
    });


export const adminAuth = adminApp.auth()