import * as Yup from 'yup'
const signupSchema = Yup.object({
  firstName: Yup.string().min(2).max(15).required('please enter a first name'),
  lastName: Yup.string().min(2).max(15).required('please enter a last name'),
  email: Yup.string().email().required('please enter a eamil'),
  password: Yup.string().min(6).required('please enter a password'),

  //   confirm_password: Yup.string
  //     .required()
  //     .oneOf([Yup.ref('password'), null], 'password must match'),
})
export default signupSchema
