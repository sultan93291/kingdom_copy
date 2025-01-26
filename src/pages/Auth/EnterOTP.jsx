import React, { useState } from "react";
import logo from "../../assets/Images/LOGO.png";

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa"
import heart from "../../assets/Images/heart_icon.png";
import AuthButton from "../../components/Common/AuthButton";
import LoginWithSocialButon from "../../components/Common/LoginWithSocialButon";

import OtpInput from 'react-otp-input';

const EnterOTP = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(""); 
  const correctOtp = "123456";

  const handleSubmit = () => {
    if (!otp) {
      setError("OTP is required.");
    } else if (otp.length < 6) {
      setError("OTP must be 6 digits.");
    } else if (otp === correctOtp) {
      setError(""); 
      // toast.success("OTP verified successfully");
      setTimeout(() => {
        // navigate("/login");
      }, 2000);
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleOtpChange = (value) => {
    setOtp(value);
    if (value.length === 6) {
      setError(""); 
    }
  };

  return (
    <div >
    <div className="flex justify-center mb-3.5">
      <img src={logo} alt="Logo" className="w-24 h-24" />
    </div>
    <h2 className="text-[40px] text-buttonBg font-bold text-center mb-8 font-Inria">
   Enter OTP
    </h2>
    <div className="space-y-4">
        {/* Responsive OTP Input */}
        <div className="flex flex-col w-full justify-center ">
          <p className=" text-center text-sm font-Inter text-primaryYellow">You can resend OPT in 26s. Resend</p>
            <OtpInput
              value={otp}
              onChange={handleOtpChange} 
              numInputs={6}          
              inputType="number"
              renderInput={(props, index) => (
                <input
                  {...props}
                  className="border rounded-lg xs:min-h-[45px] xs:min-w-[45px] min-h-[40px] min-w-[40px] text-base md:text-lg lg:text-xl text-center outline-none transition-all duration-300"
                  style={{
                    borderColor: otp[index] ? "#01B883" : "#d1d5db",
                    width: "calc(6vw)",
                    height: "calc(6vw)",
                    maxWidth: "65px",
                    maxHeight: "65px",

                    margin: "5px",
                
                  }}
                />
              )}
            />
   {/* Error message */}
   {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}
          </div>

    <div className="relative">
      <AuthButton onClick={handleSubmit} text={"Continue"} />
      <span className="absolute bottom-1.5 -right-5">
        <img src={heart} alt="" />
      </span>
    </div>
    <div className="flex items-center my-4">
      <div className="flex-grow border-t border-yellow-700"></div>
      <span className="mx-2 text-yellow-700 font-medium font-Inter">
        OR
      </span>
      <div className="flex-grow border-t border-yellow-700"></div>
    </div>
    
      <div>
        <LoginWithSocialButon
          icon={<FaFacebook className="w-6 h-6 text-blue-600" />}
          text={"Sign in with Google"}
        />
      </div>
      <div>
        <LoginWithSocialButon
          icon={<FcGoogle className="w-6 h-6" />}
          text={"Sign in with Facebook"}
        />
      </div>
    <p className="text-center text-sm font-Inter text-primaryYellow">
      Don’t have an account?
      <a
        href="#"
        className="text-buttonBg font-semibold hover:underline"
      >
        Sign up, it’s free!
      </a>
    </p>
    </div>
  </div>
  )
}

export default EnterOTP
