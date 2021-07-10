import { useState } from 'react'
import validateInfo from './validateInfo';


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
        setValues({
            ...values,
            [name]: value
        })
        setErrors(validateInfo(values, setValues))   


        
    }

    const handleChangeNumbers = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        setErrors(validateInfo(values, setValues))   

    }

     const handleSubmit = async (e) => {
        e.preventDefault()
        // try {
        //     const uid = await firebase.auth().currentUser.uid;
        //     if(uid)
        //     {
        //         await setValues({
        //             ...values,
        //             userid: uid
        //         })

        //     }
        //     else {
        //     console.log('Wait for it');
        //    }
        // } catch(e){
        //     console.log(e)
        // }
            setErrors(validateInfo(values, setValues))   
    };

    

    
    return { handleChangeText, handleChangeNumbers, handleFocus, handleSubmit, values, errors };
};

export default useForm; 