import { useState } from 'react'
import validateInfo from './validateInfo';
import { useHistory } from "react-router-dom"


const useForm = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        focus: '',
    })

    const [toDisplayProfile, setToDisplayProfile] = useState(false);

    
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


        
    }

    const handleChangeNumbers = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

    }
    const history = useHistory();

     const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors(validateInfo(values, setValues))
    };

    

    
    return { handleChangeText, handleChangeNumbers, handleFocus, handleSubmit, values, errors, toDisplayProfile };
};

export default useForm; 