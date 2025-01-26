import React from "react";
import star from "../../../assets/Images/Stars.png";
import bannerRight from "../../../assets/Images/bannerRight.png";
import AuthButton from "../../Common/AuthButton";
import googlePlay from "../../../assets/Images/googlePlay.png";
import apple from "../../../assets/Images/appleIcon.png";

export default function Banner() {
  return (
    <section className="px-6 pb-20">
      <div className="container mx-auto bg-[#B27409] rounded-2xl shadow-footerShadow p-8">
        {/* Top Icons */}
        <div className="flex justify-between items-center mb-8">
          <img src={star} alt="Stars" className="w-16 h-auto" />
          <img src={bannerRight} alt="Banner Right" className="w-32 h-auto" />
        </div>

        {/* Main Banner Content */}
        <div className="text-center text-white">
          <h1 className="text-5xl font-kingdom uppercase leading-tight mb-6">
            Kingdom Spouse: Matching Faith with God’s Eternal Love
          </h1>
          <p className="text-lg font-Inter mb-10">
            Kingdom Spouse connects faith-filled singles, fostering meaningful
            relationships rooted in love, culture, and shared purpose.
          </p>

          {/* Call-to-Action Button */}
          <div className="w-56 mx-auto mb-10">
            <AuthButton text="Find Your Match" />
          </div>

          {/* Download Buttons */}
          <div className="flex justify-center gap-6">
            {/* Google Play Button */}
            <button className="bg-googlePlay py-3 px-6 shadow-xl rounded-xl flex items-center gap-3">
              <img src={googlePlay} alt="Google Play" className="h-12" />
              <div className="text-left">
                <p className="text-sm">Get It Now</p>
                <p className="text-lg font-semibold">Google Play</p>
              </div>
            </button>

            {/* Apple Store Button */}
            <button className="bg-googlePlay py-3 px-6 shadow-xl rounded-xl flex items-center gap-3">
              <img src={apple} alt="Apple Store" className="h-12" />
              <div className="text-left">
                <p className="text-sm">Get It Now</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
