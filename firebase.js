// Firebase設定
var firebaseConfig = {
    apiKey: "AIzaSyAtTnEIWyiZE-prcSdIg9zlf83As-XAd6A",
    authDomain: "pwa-test-a2741.firebaseapp.com",
    databaseURL: "https://pwa-test-a2741.firebaseio.com",
    projectId: "pwa-test-a2741",
    storageBucket: "pwa-test-a2741.appspot.com",
    messagingSenderId: "758160015443",
    appId: "1:758160015443:web:ddb85ce82488df229ac6a6"
};
firebase.initializeApp(firebaseConfig);
 
// FCM使用準備
const messaging = firebase.messaging();
messaging.usePublicVapidKey('BHpxgae0JS7fuiHkqbuZLib2hmLLXFwFtk91boqxWQECjj0ESvfsFerWrkZ_bNJDLH5B9HFUPIMGGE0EKOwEJCg');// VAPIDを設定
 
// Firestore使用準備
var db = firebase.firestore();
var usersRef = db.collection("users");
