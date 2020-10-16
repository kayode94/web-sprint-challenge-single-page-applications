import * as yup from 'yup'

const formSchema = yup.object.shape({
    name: yup
    .string()
    .required('A name is required')
    .min(3, 'Name must be at least 3 characters'),

    size: yup
    .string()
    .required('A size is required')
    .oneOf(['small', 'medium', 'large', 'extra large'], 'You must select an option'),

    pepperoni: yup
    .boolean()
    .oneOf([true, false], ''),

    chicken: yup
    .boolean()
    .oneOf([true, false], ''),

    sausage: yup 
    .boolean()
    .oneOf([true, false], ''), 

    greenPeppers: yup 
    .boolean()
    .oneOf([true, false], ''), 

    bacon: yup
    .boolean()
    .oneOf([true, false], ''), 
})

export default formSchema