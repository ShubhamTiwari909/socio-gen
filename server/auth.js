import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "./firebase-config";

const provider = new GoogleAuthProvider();

const auth = getAuth();
export const googleSignin = (updateAuthDetails) => signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        updateAuthDetails({
            uid: user.uid,
            accessToken: user.token,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
        })
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential)
        // ...
    });

export const googleSignout = () => signOut(auth).then(() => {
    // Sign-out successful.
    console.log("Logout successfully")
}).catch((error) => {
    // An error happened.
    console.log(error)
});