import React, { useEffect, useRef, useState } from "react";

const FilterModal = ({ isOpen, setIsOpen, onClose }) => {
  const modalRef = useRef(null);
  const [activeGender, setactiveGender] = useState("male");
  // Function to close the modal and notify the parent
  const closeModal = () => {
    setIsOpen(false);
    if (onClose) {
      onClose(); // Notify parent that modal is closed
    }
  };

  // Close modal on outside click
  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex justify-end items-start z-50">
          <div
            ref={modalRef}
            className="bg-white w-[307px] rounded-[22px] h-[307px] shadow-customeShadow p-[15px] mt-[80px]  mr-[20px] flex flex-col gap-y-5 "
          >
            <div className="flex flex-col gap-y-[10px] ">
              <h4 className="text-[14px] font-normal font-Inter text-[#795D2B]  ">
                I’m interest in
              </h4>
              <div className="w-[277px] h-[39px] bg-[#E8E5DF] rounded-[36px] flex flex-row   ">
                <button
                  onClick={() => {
                    setactiveGender("male");
                  }}
                  className={`w-[148px] h-[39px] ease-in-out duration-300  rounded-[20px] ${
                    activeGender === "male"
                      ? "bg-[#B27409] text-white "
                      : "bg-transparent text-[#B27409] "
                  } `}
                >
                  Male
                </button>
                <button
                  onClick={() => {
                    setactiveGender("female");
                  }}
                  className={`w-[148px] h-[39px] ease-in-out duration-300  rounded-[20px] ${
                    activeGender === "female"
                      ? "bg-[#B27409] text-white "
                      : "bg-transparent text-[#B27409] "
                  } `}
                >
                  Female
                </button>
              </div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
