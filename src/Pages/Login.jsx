import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import SelectField from "../components/SelectField";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { signinValidate } from "../../Services";
import Spinner from "../components/Spinner";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import countries from "../../Services/callcode.json";
import Google from "../images/Google.png";
import Crop from "../images/Crop.jpg";
import secureLocalStorage from "react-secure-storage";
import { authReset, login } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";

const Login = () => {
  const [toggle, settoggle] = useState(false);
  const [countrycheck, setcountrycheck] = useState("Nigeria");
  const [toggle2, settoggle2] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signinValidate,
    onSubmit: async (values) => {
      dispatch(authReset());
      try {
        await dispatch(login(values)).unwrap();
        navigate("/homepage/");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  });

  return (
    <div className="min-h-screen bg-[#F5F5F5] grid lg:grid-cols-2  p-4">
      {isLoading && (
        <div className="fixed bg-black/[0.6] h-screen w-screen z-50 left-0 top-0 items-center flex justify-center">
          {" "}
          <PulseLoader speedMultiplier={0.9} color="#fff" size={20} />
        </div>
      )}
      <div
        className="lg:flex   bg-[#D9D9D9]  bg-no-repeat bg-cover bg-center  bg-opacity-100  opacity-[.75]  rounded-[30px] hidden "
        style={{ backgroundImage: `url(${Crop})` }}
      ></div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <div>
            <h1 className="font-bold text-[30px] text-[#000]">Login</h1>
          </div>
          <div className="text-[#8C8C8C] mb-4">
            Enter your Email and Password to access your account.
          </div>
          <form onSubmit={formik.handleSubmit}>
            <InputField
              label={`Email address`}
              name={`email`}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
              errorText={formik.errors.email}
              placeHolder={`Enter Your E-mail Address`}
            />

            <div className="relative">
              <InputField
                label={`Password`}
                name={`password`}
                type={toggle ? "text" : "Password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && formik.errors.password}
                errorText={formik.errors.password}
                placeHolder={"••••••••"}
                onBlur={formik.handleBlur}
              />
              <div className="absolute text-[#008A2F] inset-y-[2.2rem] right-3 text-lg ">
                {" "}
                {toggle ? (
                  <RiEyeFill
                    onClick={() => {
                      settoggle(!toggle);
                    }}
                  />
                ) : (
                  <RiEyeOffFill
                    onClick={() => {
                      settoggle(!toggle);
                    }}
                  />
                )}
              </div>
              <div className="flex justify-between">
                <div></div>
                <div>
                  <Link to={"/changepassword/reset-password"} className="text-[#008A2F]">Forgot Password?</Link>
                </div>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#008A2F] py-2 shadow-[0_1px_2px_0_rgba(16,_24,_40,_0.05)] w-full p-1 mt-4 text-white rounded-[5px]"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-4 flex justify-center">
            <p className="text-[12px] text-[#000] gap-1 flex items-center">
              Don't have an account?
              <Link to={"/signup"} replace={true} className="text-[#008A2F]">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
