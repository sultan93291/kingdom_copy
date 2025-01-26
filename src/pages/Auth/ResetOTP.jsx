import React, { useState } from "react";
import logo from "../../assets/Images/LOGO.png";
import heart from "../../assets/Images/heart_icon.png";
import AuthButton from "../../components/Common/AuthButton";
import OtpInput from "react-otp-input";

const ResetOTP = () => {
  const [otp, setOtp] = useState("");
  

  return (
    <div>
      <div className="flex justify-center mb-3.5">
        <img src={logo} alt="Logo" className="w-24 h-24" />
      </div>
      <h2 className="text-[40px] text-buttonBg font-bold text-center  font-Inria">
        Enter OTP
      </h2>
<div>
    <p className=" text-center text-sm font-Inter py-4 text-primaryYellow">You can resend OPT in 26s. <span className="text-buttonBg underline">Resend</span> </p>
</div>
      <div className="flex justify-center mb-6">
        <OtpInput
           value={otp}
            
           numInputs={5}          
          
           renderInput={(props, index) => (
             <input
               {...props}
               className="border bg-[#F4F3F1] rounded-xl  xs:min-h-[45px] xs:min-w-[45px] min-h-[40px] min-w-[40px] text-base md:text-lg lg:text-xl text-center outline-none transition-all duration-300"
               style={{
                 borderColor: otp[index] ? "#01B883" : "#d1d5db",
                 width: "calc(6vw)",
                 height: "calc(6vw)",
                 maxWidth: "58px",
                 maxHeight: "52px",
                 margin: "5px",
             
               }}
             />
           )}
        />
      </div>

      <div className="relative">
        <AuthButton type="submit" text={"Continue"} />
        <span className="absolute bottom-1.5 -right-5">
          <img src={heart} alt="" />
        </span>
      </div>
    </div>
  );
};

export default ResetOTP;
