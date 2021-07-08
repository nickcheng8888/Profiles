import { useState } from 'react'
import validateInfo from './validateInfo';
import 'firebase/firestore';
import auth from '../utils/firebase';
import firebase from '../utils/firebase';


const useForm = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        focus: '',
    })

    
    const [errors, setErrors] = useState({})

    const handleFocus = (e) => {
        setValues({ 
            ...values,
            focus: e.target.name
        });
    }

    const handleChangeText = e => {
        const { name, value } = e.target
        if (!/^[a-zA-Z]8$/.test(value)) {
            setErrors(validateInfo(values, setValues))               
        } else {
            setValues({
                ...values,
                [name]: value
            })
        }

        
    }

    const handleChangeNumbers = e => {
        const { name, value } = e.target
        if (!/[0-9\b]+$/.test(value)) {
            e.preventDefault();
            
        } else {
            setValues({
                ...values,
                [name]: value
            })
        }

        if(!value){
            setValues({
                ...values,
                [name]: value
            })
        }
        
    }

     const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const uid = await firebase.auth().currentUser.uid;
            if(uid)
            {
                await setValues({
                    ...values,
                    userid: uid
                })

            }
            else {
            console.log('Wait for it');
           }
        } catch(e){
            console.log(e)
        }
        if(values.userid){
            setErrors(validateInfo(values, setValues))   
        }
    };

    

    
    return { handleChangeText, handleChangeNumbers, handleChangeEmail, handleFocus, handleSubmit, values, errors };
};

export default useForm; 