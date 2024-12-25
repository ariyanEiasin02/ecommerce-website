import React, { useState } from "react";
import { Link } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
  };

  return (
    <section className="py-16 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full md:w-[500px]">
        <h2 className="font-josefin text-3xl font-bold text-primary text-center mb-2">
          Forgot Password
        </h2>
        <p className="font-lato font-normal text-[17px] text-[#9096B2] text-center mb-6">
        Enter your email below to receive a password reset link.
        </p>
        <form onSubmit={handleSubmit}>
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
          </div>
          <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="rounded-lg bg-primary py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
          >
            Send Reset Link
          </button>
          <Link to="/Login">
          <button
            type="submit"
            className="text-center rounded-lg bg-secondCommon py-3 px-6 font-josefin text-white font-bold text-base hover:bg-opacity-90 transition-all"
          >
            Back to Login
          </button>
          </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Forgot;
