import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';

const Forgot = () => {
  const auth = getAuth();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('')
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailError("Please Your Email Address");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailError("Please Enter Your Valid Email")
      }
    }
    if (email && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      sendPasswordResetEmail(auth, email)
        .then((user) => {
          toast.success("Please Check Your Email!")
          console.log(user);
          setTimeout(() => {
            navigate('/login')
          }, 1000)
          
        })
        .catch((error) => {
          console.log(error.code);
        });
    }
  };

  return (
    <section className="py-16 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[500px]">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        <h2 className="font-josefin text-3xl font-bold text-primary text-center mb-2">
          Forgot Password
        </h2>
        <p className="font-lato font-normal text-[17px] text-[#9096B2] text-center mb-6">
          Enter your email below to receive a password reset link.
        </p>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email" className="font-josefin text-xl font-medium text-primary"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-2 border rounded-md outline-none font-lato font-normal text-[17px] text-[#9096B2]"
            />
            <p className="mt-2 font-lato font-normal text-[17px] text-secondCommon">{emailError}</p>
          </div>
          <div className="flex justify-between mt-6">
            <div
              onClick={handleSubmit}
              type="submit"
              className="rounded-lg bg-primary py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all cursor-pointer"
            >
              Send Reset Link
            </div>
            <div className="">
              <Link to="/Login">
                <button
                  type="submit"
                  className="text-center rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
                >
                  Back to Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Forgot;
