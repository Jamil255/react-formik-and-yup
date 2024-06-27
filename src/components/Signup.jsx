import { useFormik } from 'formik'
import React from 'react'
import signupSchema from '../schema'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const Signup = () => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values, actions) => {
        console.log(values)
        actions.resetForm()
      },
    })

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border ${
                errors.firstName && touched.firstName
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-lg focus:outline-none focus:border-blue-500`}
            />
            {touched.firstName && errors.firstName ? (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border ${
                errors.lastName && touched.lastName
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-lg focus:outline-none focus:border-blue-500`}
            />
            {touched.lastName && errors.lastName ? (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border ${
                errors.email && touched.email
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-lg focus:outline-none focus:border-blue-500`}
            />
            {touched.email && errors.email ? (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-3 py-2 border ${
                errors.password && touched.password
                  ? 'border-red-500'
                  : 'border-gray-300'
              } rounded-lg focus:outline-none focus:border-blue-500`}
            />
            {errors.password && touched.password ? (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            ) : null}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
