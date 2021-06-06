// import { ref } from 'vue';
import * as yup from 'yup';
export const useSchema = () => {
  return {
    loginSchema,
    registrationSchema
  }
}
function loginSchema () {
    return yup.object({
        email: yup.string().required('This field is required').email().label('Email address'),
        password: yup
            .string()
            .required('This field is required')
            .label('Password')
            .min(8, "Must contain at least 8 characters long")
            .max(255, "Must not exceed at least 8 characters long")
            .matches(/(?=.*[a-z])/, 'Must contain at least one lowercase' )
            .matches(/(?=.*[A-Z])/, 'Must contain at least one uppercase' )
            .matches(/(?=.*[0-9])/, 'Must contain at least one digit string')
            .matches(/(?=.*\W)/, 'Must contain at least one special character' )
    })
}


function registrationSchema () {
    return yup.object().shape({
        firstName: yup
            .string()
            .required('This field is required')
            .label('First name')
            .min(3, 'Must contain at least 3 characters long'),
        email: yup
            .string()
            .label('Email address')
            .required('This field is required')
            .email(),
        password: yup
            .string()
            .required('This field is required')
            .label('Password')
            .min(8, "Must contain at least 8 characters long")
            .max(255, "Must not exceed at least 8 characters long")
            .matches(/(?=.*[a-z])/, 'Must contain at least one lowercase' )
            .matches(/(?=.*[A-Z])/, 'Must contain at least one uppercase' )
            .matches(/(?=.*[0-9])/, 'Must contain at least one digit string')
            .matches(/(?=.*\W)/, 'Must contain at least one special character' ),
        confirmPassword: yup
            .string()
            .label('Confirm Password')
            .required("Please confirm your password")
            .oneOf([yup.ref('password'), null], 'Passwords do not match')
    }) 

}   


