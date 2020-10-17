const { credential } = require('firebase-admin');
const admin = require('firebase-admin');
const credentials = require('./habitity-firebase-adminsdk');

admin.initializeApp({
    databaseURL: "https://habitity.firebaseio.com",
    credential: admin.credential.cert(credentials),
});

const db = admin.firestore();

module.exports = { admin, db };