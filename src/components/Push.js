import firebase from '../utils/firebase';
import 'firebase/firestore';

const firestore = firebase.firestore();

export default function Push(values) {
    const dataRef = firestore.collection('Profiles').doc('currUser')
    dataRef.set({
        firstName: values.firstName,
        lastName: values.lastName,
        mobileNumber: values.mobileNumber,
        email: values.email
      }, { merge: true });

}