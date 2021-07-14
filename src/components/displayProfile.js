import firebase from '../utils/firebase';
import 'firebase/firestore';
import React from 'react'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { Container } from 'react-bootstrap';
import "./displayProfile.css"

const firestore = firebase.firestore()

function SnapshotFirebase(){
    const [details, setDetails] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        imageURL: ''
    })


    firestore.collection('Profiles').onSnapshot((querySnapshot)=> {
        querySnapshot.docs.forEach((doc) => {
            setDetails({
                ...details,
                firstName: doc.get('firstName'),
                lastName: doc.get('lastName'),
                email: doc.get('email'),
                mobileNumber: doc.get('mobileNumber'),
                imageURL: doc.get('imageURL')
            })
        })
    });

    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img 
        src={details.imageURL} alt="new"/>
                </div>
            </div>
            <div className="lower-container">
                <h3> {details.firstName} {details.lastName} </h3>
                <h4> {details.email} </h4>
                <h4> {details.mobileNumber} </h4>
                <button>
                    <Link to="/editProfile"> Edit Profile </Link>
                </button>
            </div>

        </div>

        
    );
}




export default SnapshotFirebase;