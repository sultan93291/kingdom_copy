import React, { useState } from "react";
import logo from "../../assets/Images/LOGO.png";
import PhoneInput from "react-phone-input-2";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa"
import heart from "../../assets/Images/heart_icon.png";
import AuthButton from "../../components/Common/AuthButton";
import LoginWithSocialButon from "../../components/Common/LoginWithSocialButon";
const SignIn = () => {
    const [phone, setPhone] = useState(""); // Initialize state using useState hook
  return (
    <div >
          <div className="flex justify-center mb-3.5">
            <img src={logo} alt="Logo" className="w-24 h-24" />
          </div>
          <h2 className="text-[40px] text-buttonBg font-bold text-center mb-8 font-Inria">
            Sign in
          </h2>
          <div className="space-y-4">
          <div className=" mb-4">
            <PhoneInput
              country={"us"}
              value={phone} // Set value to the state variable
              onChange={(value) => setPhone(value)} // Use setPhone to update the state
            />
          </div>
          <div className="relative">
            <AuthButton text={"Sign in"} />
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

export default SignIn
