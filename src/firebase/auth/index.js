import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import firebaseApp from "../index.js";

const googleProvider = new GoogleAuthProvider()

const auth = getAuth(firebaseApp)

/**
 * @description Sign in with email and password
 * @param {string} email
 * @param {string} password
 * @returns {Promise<import("firebase/auth").UserCredential>}
 */
function signup (email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

/**
 * @@description Sign in with email and password
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
function signin (email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

/**
 * @description Sign in with Google
 * @returns {Promise<import("firebase/auth").UserCredential>}
 */
function signInWithGoogle () {
    return signInWithRedirect(auth, googleProvider)
}

/**
 * 
 * @description Sign out
 * @returns {Promise<void>}
 */
function signout () {
    return auth.signOut()
}

export default auth
export { signInWithGoogle, signin, signout, signup };

