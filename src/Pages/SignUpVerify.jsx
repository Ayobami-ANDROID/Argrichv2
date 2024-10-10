import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import password from "../images/icons/password.svg";
import backicon from "../images/icons/back.svg";
import { useDispatch } from "react-redux";
import {
  confirmOTP,
  requestPasswordChange,
  accountVerify,

} from "../features/auth/authSlice";
import secureLocalStorage from "react-secure-storage";

const SignUpVerify = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(6).fill("")); // Initialize OTP with 4 empty strings
    const [activeOTPIndex, setActiveOTPIndex] = useState(0); // Track the active input field
    const [isResendActive, setIsResendActive] = useState(false); // To track when resend can be clicked
    const [resendTimer, setResendTimer] = useState(0); // Timer starts at 60 seconds
    const email = secureLocalStorage.getItem("email");
    const inputRef = useRef([]);
  
    // Handle change event when a user types into an input
    const handleOnChange = (e, index) => {
      const { value } = e.target;
      if (/^[0-9]$/.test(value)) {
        const newOtp = [...otp];
        newOtp[index] = value; // Update the OTP state
        setOtp(newOtp);
        console.log("otp", newOtp);
  
        // Move to the next input field if the current one is filled
        if (index < otp.length - 1) {
          setActiveOTPIndex(index + 1);
        }
      }
    };
  
    // Handle keydown events for better UX
    // Handle keydown events for better UX
    const handleOnKeyDown = (e, index) => {
      const { value } = e.target;
      if (e.key === "Backspace") {
        e.preventDefault();
        const newOtp = [...otp];
  
        if (otp[index]) {
          // Clear the current field if it has a value
          newOtp[index] = "";
          setOtp(newOtp);
  
          console.log("otp", newOtp);
        } else if (index > 0) {
          // Move focus to the previous input field
          setActiveOTPIndex(index - 1);
        }
      } else {
        const newOtp = [...otp];
        console.log("value", value);
  
        newOtp[index] = value;
        setOtp(newOtp);
        console.log("otp", newOtp);
      }
    };
    const handleOnclick = (e, index) => {
      setActiveOTPIndex(index);
    };
  
    // Focus on the active input field
    useEffect(() => {
      inputRef.current[activeOTPIndex]?.focus();
    }, [activeOTPIndex]);
  
    // Handle resend OTP logic
    useEffect(() => {
      let interval;
      if (resendTimer > 0) {
        interval = setInterval(() => {
          setResendTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      } else {
        setIsResendActive(true); // Enable Resend OTP button after 60 seconds
      }
      return () => clearInterval(interval);
    }, [resendTimer]);
  
    const handleResendOtp = async () => {
      if (isResendActive) {
        try {
          const value = {
            email: secureLocalStorage.getItem("email"),
          };
          await dispatch(requestPasswordChange(value)).unwrap();
          navigate("/changepassword/confirm-otp");
          console.log("OTP Resent");
          setResendTimer(60); // Reset the timer
          setIsResendActive(false); // Disable the button again
        } catch (error) {
          console.error("Registration failed:", error);
        }
      }
    };
  
    // Format the timer as "1:00" for minutes and seconds
    const formatTimer = () => {
      const minutes = Math.floor(resendTimer / 60);
      const seconds = resendTimer % 60;
      return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    };
    const dispatch = useDispatch();
    const handleVerify = async () => {
      secureLocalStorage.setItem("otp", otp.join(""));
      try {
        await dispatch(
          accountVerify({
            otp_code: otp.join(""),
            email:email
          })
        ).unwrap();
        navigate("/login");
      } catch (error) {
        console.log("Registration failed:", error);
      }
    };
  
    return (
      <div className="max-w-[448px] px-4 lg:px-0 mx-auto w-full ">
        <Link
          to={"/signup"}
          className="flex items-center gap-2"
        >
          <img src={backicon} alt="" className="object-contain" />
          <p className="font-manrope font-semibold text-[16px] text-[#008A2F]">
            Back to SignUp
          </p>
        </Link>
        <div className="bg-white  rounded-[12px] w-full p-5 mt-2 shadow-[4px_4px_13.4px_0px_rgba(152,_152,_152,_0.25)]">
          <div className="p-[10px] bg-[#E0FFE5] flex items-center justify-center w-fit">
            <img src={password} alt="" />
          </div>
          <p className="font-manrope font-semibold text-[24px] mt-2">
            Enter confirmation code
          </p>
          <p className="font-manrope font-medium text-[16px] text-[#8C8C8C] ">
            Enter the 6 digit code we sent to your mail!{" "}
            <span className="font-semibold">
              ({secureLocalStorage.getItem("email")}){" "}
            </span>
            {/* <Link
              to={"/changepassword/reset-password"}
              className="underline text-[#008A2F]  font-manrope ml-1"
            >
              Edit email
            </Link> */}
          </p>
  
          <div className="flex flex-col mt-8 gap-6">
            <div className="flex gap-4 mx-auto">
              {otp.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRef.current[index] = el)}
                  pattern="[0-9]*"
                  placeholder={activeOTPIndex === index ? "8" : "-"}
                  type="text"
                  inputMode="numeric"
                  style={
                    activeOTPIndex === index
                      ? { boxShadow: "0px 0px 12px 0px rgba(39, 215, 0, 0.29)" }
                      : {}
                  }
                  className={`max-w-[50px] h-[60px] border spin-button-none rounded-[3px] bg-transparent outline-none text-center font-semibold text-lg text-[#262626] font-manrope  border-[#87ACA3] border-solid transition 
            ${activeOTPIndex === index && "border-[#005F20]   border-[1.2px]"}`}
                  value={value}
                  maxLength={1}
                  onChange={(e) => handleOnChange(e, index)}
                  onKeyDown={(e) => handleOnKeyDown(e, index)}
                  onClick={(e) => handleOnclick(e, index)}
                />
              ))}
            </div>
            <button
              onClick={handleVerify}
              className="min-h-[46px] bg-[#008A2F] rounded-lg font-manrope font-semibold text-[16px] text-white"
            >
              Verify
            </button>
            {/* Resend OTP Button */}
            <button
              onClick={handleResendOtp}
              disabled={!isResendActive} // Disable until timer runs out
              className={` text-[#028306] font-semibold text-[16px] font-manrope ${
                !isResendActive ? " cursor-not-allowed" : ""
              }`}
            >
              {isResendActive ? "Resend OTP" : `Resend link in ${formatTimer()}`}{" "}
            </button>
          </div>
        </div>
      </div>
    );
}

export default SignUpVerify