import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isEmail, isPassword, styleEmail, styleName, stylePassword } from '../../Services/validations_service'
import { proLogin } from '../../Services/auth_service'


function ProLogin() {

  const navigate = useNavigate()

  const [errorLabel, setErrorLabel] = useState('')
  const [email, setEmail] = useState('')
  const [emailLabel, setEmailLabel] = useState('Email*')
  const [password, setPassword] = useState('')
  const [passwordLabel, setPasswordLabel] = useState('Password*')


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleForm = (e) => {
    doLogin()
  }

  const doLogin = async () => {
    try {
      const res = await proLogin(email, password)
      if (res) {
        setErrorLabel('')
        navigate('/prodashboard/MyPatients')
      } else {
        setErrorLabel('Email or Password incorrect')
      }
    } catch (error) {
      return error
    }
  }

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='p-4 lg:w-3/5 md:p-8'>
        <h1 className='text-xl p-4 md:text-2xl md:p-8 text-center'>Welcome Back</h1>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          {/* Column 1 */}
          <div className="h-40 md:h-full bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("../../src/assets/doctor.jpg")' }}>
          </div>
          {/* Column 2 */}
          <div className="border border-gray-light rounded-lg p-2 md:p-8">
            <h2 className='text-center text-lg my-2 md:text-xl'>Your Login Data</h2>
            <p className='text-center text-rose-600'>{`${errorLabel}`}</p>
            {/* Form */}
            <form action="" className=''>
              <label htmlFor="" className='text-sm text-gray md:text-lg antialiased'>{`${emailLabel}`}</label>
              <input type="text" className={`w-full border border-gray-light p-1 md:p-2 rounded-md my-2`}
                onChange={handleEmail} />

              <label htmlFor="" className='text-sm text-gray md:text-lg antialiased'>{`${passwordLabel}`}</label>
              <input type="password" className={`w-full border border-gray-light p-1 md:p-2 rounded-md my-2`}
                onChange={handlePassword} />
            </form>

            <button className='w-full antialiased bg-blue-dark rounded-full inline-block p-6 py-3 my-4 text-white'
              onClick={handleForm}>
              Login</button>
            <Link to={'/login'}>
              <p className='text-center underline cursor-pointer'>Im a User, Go to User Log.</p>
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProLogin
