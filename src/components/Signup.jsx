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
      onSubmit: (value) => {
        console.log(value)
      },
    })
  //   console.log(errors)

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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {touched.firstName && errors.firstName ? (
              <p
                style={{
                  color: 'red',
                }}
              >
                {errors.firstName}
              </p>
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
              value={values.lastName}
              onChange={handleChange}
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {touched.lastName && errors.lastName ? (
              <p
                style={{
                  color: 'red',
                }}
              >
                {errors.lastName}
              </p>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {touched.email && errors.email ? (
              <p
                style={{
                  color: 'red',
                }}
              >
                {errors.email}
              </p>
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {errors.password && touched.password ? (
              <p
                style={{
                  color: 'red',
                }}
              >
                {errors.password}
              </p>
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
