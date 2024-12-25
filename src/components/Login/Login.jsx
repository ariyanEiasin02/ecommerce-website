import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  const [passwordShow, setPasswordShow] = useState(true)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handlePasswordShow = () => {
    setPasswordShow(!passwordShow)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError('')
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordError('')
  }

  const handleSubmit = () => {
    if (!email) {
      setEmailError("Please Enter your Email")
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError("Please Enter Your Valid Email")
      }
    }
    if (!password) {
      setPasswordError("Please Enter your Password")
    } else {
      if (!/^(?=.*[0-9]).{8,16}$/.test(password)) {
        setPasswordError("Please Enter At Least 8 Characters")
      }
    }
  }

  return (
    <section className="flex items-center justify-center py-16">
      <div className="max-w-container mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[500px]">
          <h2 className="font-josefin text-3xl font-bold text-primary text-center">Login</h2>
          <p className="font-lato font-normal text-[17px] text-[#9096B2] text-center mb-6">
            Please login using your account details below.
          </p>

          <form>
          <div className="mb-4">
            <label htmlFor="email" className="font-josefin text-xl font-medium text-primary">
              Email Address<span className='text-secondCommon'>*</span>
            </label>
            <input
              onChange={handleEmail}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
            />
            <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{emailError}</p>
          </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="font-josefin text-xl font-medium text-primary">
                Password<span className='text-secondCommon'>*</span>
              </label>
              <input
                onChange={handlePassword}
                type={`${passwordShow ? "text" : "password"}`}
                id="password"
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
              />
              <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{passwordError}</p>
              <div onClick={handlePasswordShow} className="absolute top-12 right-4 cursor-pointer">
                {
                  passwordShow ?
                    <FaEye className='text-primary text-base' />
                    :
                    <FaEyeSlash className='text-primary text-base' />
                }
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <Link to="/ForgotPassword" className="font-lato font-normal text-[17px] text-[#9096B2] hover:underline">
                Forgot your password?
              </Link>
            </div>
            <div
              onClick={handleSubmit}
              type="submit"
              className="w-full text-center rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
            >
              Sign In
            </div>
          </form>

          <p className="font-lato font-normal text-[17px] text-[#9096B2] text-center mt-4">
            Don’t have an Account?{" "}
            <Link to="/Registration" className="text-blue-500 hover:underline">
              Create account
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login