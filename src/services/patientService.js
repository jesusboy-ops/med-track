import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION_NAME = 'patients';

export const patientService = {
  async getAllPatients() {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  async getPatientById(id) {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  },

  async createPatient(patientData) {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), {
      ...patientData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return docRef.id;
  },

  async updatePatient(id, patientData) {
    const docRef = doc(db, COLLECTION_NAME, id);
    await updateDoc(docRef, {
      ...patientData,
      updatedAt: new Date().toISOString(),
    });
  },

  async deletePatient(id) {
    const docRef = doc(db, COLLECTION_NAME, id);
    await deleteDoc(docRef);
  },

  async searchPatients(searchTerm) {
    const q = query(
      collection(db, COLLECTION_NAME),
      where('name', '>=', searchTerm),
      where('name', '<=', searchTerm + '\uf8ff')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },

  async getPatientPrescriptions(patientId) {
    const q = query(
      collection(db, 'prescriptions'),
      where('patientId', '==', patientId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  },
};
