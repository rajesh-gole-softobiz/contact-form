import {inputFormElements} from '../element/formElement'
import * as Yup from 'yup'


const validationGenerator = () => {
    const validateObj = {}
    inputFormElements.map(field =>{
        field.required && Object.assign(validateObj, {
            [field.name]: Yup.string().required('Required')
        })
    })
    return validateObj
}

export default Yup.object().shape({
    ...validationGenerator()
})