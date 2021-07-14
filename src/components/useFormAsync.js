import { useState } from 'react'
import validateInfo from './validateInfo';
import { useHistory } from "react-router-dom"
import firebase from "../utils/firebase"
import 'firebase/firestore';

const useFormAsync = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        focus: '',
        imageURL: '',
        image:''
    })

    
    const [errors, setErrors] = useState({})

    const handleChangeText = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

        
    }

    const handleChangeNumbers = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })



    }
    const handleChangeUpload = async(e) => {
        const image = e.target.files[0]
        if (image.name.match(/.(jpg|jpeg|png)$/i)){
            const storage = firebase.storage().ref();
            const imageRef = storage.child(image.name);
            await imageRef.put(image).then(() => {
                console.log("image uploaded")
            })
            const downloadString = await imageRef.getDownloadURL()
            console.log(downloadString)
            setValues({
                ...values,
                imageURL: downloadString
            })
        }
        setValues({
            ...values,
            image: image
        })

        

    }

    const history = useHistory();
     const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(validateInfo(values, setValues));

        if ( errors.fname &&
            errors.lname &&
            errors.mobileNumber &&
            errors.email &&
            errors.image){
                window.setTimeout(() => {
                    history.push('/displayProfile')
                 }, 1500)
            }
        
    };

    

    
    return { handleChangeText, handleChangeNumbers, handleSubmit, handleChangeUpload, values, errors };
};

export default useFormAsync; 