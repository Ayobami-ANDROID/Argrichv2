import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backicon from "../images/icons/back.svg";
import lock from "../images/icons/lock.svg";
import password1 from "../images/icons/password1.svg";
import { useFormik } from "formik";

import { changePasswordValidate, resetPasswordValidate } from "../../Services";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import secureLocalStorage from "react-secure-storage";
import { changePassword } from "../features/auth/authSlice";

const NewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_Password: "",
    },
    validationSchema: changePasswordValidate,
    onSubmit: async (values) => {
      try {
        await dispatch(changePassword(
          {
            email: secureLocalStorage.getItem("email"),
            OTP: secureLocalStorage.getItem("otp"),
            password:values.password
          }
        )).unwrap();
        navigate("/changepassword/success");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  });


  return (
    <div className="max-w-[448px] px-4 lg:px-0 mx-auto w-full ">
      <div className="bg-white  rounded-[12px] w-full p-5 mt-2 shadow-[4px_4px_13.4px_0px_rgba(152,_152,_152,_0.25)]">
        <div className="p-[10px] bg-[#E0FFE5] flex items-center justify-center w-fit">
          <img src={password1} alt="" />
        </div>
        <p className="font-manrope font-semibold text-[24px] mt-2">
          Create new Password
        </p>
        <p className="font-manrope font-medium text-[16px] text-[#8C8C8C]">
          Must be at least 8 characters
        </p>

        <form onSubmit={formik.handleSubmit} className="flex flex-col mt-7  ">
          <InputField
            label={`New Password`}
            name={`password`}
            type={"password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && formik.errors.password}
            errorText={formik.errors.password}
          />
          <div className="mt-2"></div>
          <InputField
            label={`Confirm Password`}
            name={`confirm_Password`}
            type={"password"}
            value={formik.values.confirm_Password}
            onChange={formik.handleChange}
            error={
              formik.touched.confirm_Password && formik.errors.confirm_Password
            }
            errorText={formik.errors.confirm_Password}
          />

          <button
            type="submit"
            className="min-h-[46px] bg-[#008A2F] rounded-lg mt-8 font-manrope font-semibold text-[16px] text-white"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
