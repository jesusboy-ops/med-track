import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';

export const authService = {
  async login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  },

  async register(email, password, displayName) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    
    await setDoc(doc(db, 'users', userCredential.user.uid), {
      email,
      displayName,
      createdAt: new Date().toISOString(),
      role: 'user',
    });

    return userCredential.user;
  },

  async logout() {
    await signOut(auth);
  },

  async resetPassword(email) {
    await sendPasswordResetEmail(auth, email);
  },

  async getUserProfile(uid) {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  },

  async updateUserProfile(uid, data) {
    const docRef = doc(db, 'users', uid);
    await setDoc(docRef, data, { merge: true });
  },
};
