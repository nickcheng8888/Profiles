import firebase from '../utils/firebase';
import 'firebase/firestore';
import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'


const firestore = firebase.firestore()

function SnapshotFirebase(){
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
    })


    firestore.collection('Profiles').onSnapshot((querySnapshot)=> {
        querySnapshot.docs.forEach((doc) => {
            setDetails({
                ...details,
                firstName: doc.get('firstName'),
                lastName: doc.get('lastName'),
                email: doc.get('email'),
                mobileNumber: doc.get('mobileNumber')
            })
        })
    });

    return (
        <div>
            {details.firstName}, {details.lastName}, {details.mobileNumber}, {details.email}
        </div>
        
    );
}




export default SnapshotFirebase;