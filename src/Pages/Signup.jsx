import React, { useEffect, useState } from "react";
import InputField from "../components/InputField";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import SelectField from "../components/SelectField";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";
import { SignUpValidate } from "../../Services";
import Spinner from "../components/Spinner";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import countries from "../../Services/callcode.json";
import Google from "../images/Google.png";
import Crop from "../images/Crop.jpg";
import secureLocalStorage from "react-secure-storage";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/authSlice";
import { PulseLoader } from "react-spinners";


const Signup = () => {
  const [toggle, settoggle] = useState(false);
  const [countrycheck, setcountrycheck] = useState("Nigeria");
  const [toggle2, settoggle2] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      Gender: "",
      country: "NG",
      callCode: "+234",
    },
    validationSchema: SignUpValidate,
    onSubmit: async (values) => {
      const payload = {
        country: values.country,
        name: `${values.firstName} ${values.lastName}`,
        gender: values.Gender,
        email: values.email,
        password: values.password,
        phone_number: values.callCode + values.phoneNumber,
      };
      try {
        secureLocalStorage.setItem("email", values.email)
        await dispatch(register(payload)).unwrap();
      
        navigate("/signupverify");
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  });

  const country = countries.map((item, index) => {
    return {
      label: item.name,
      value: item.code,
      code: item.dial_code,
    };
  });

  const gender = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ];

  const formatDigits = (value) => {
    return value
      .replace(/\D/g, "") // Remove non-digit characters
      .replace(/(\d{3})(\d{0,3})?(\d{0,4})?/, (_, p1, p2, p3) => {
        let parts = [p1];
        if (p2) parts.push(" " + p2);
        if (p3) parts.push(" " + p3);
        return parts.join("");
      });
  
  return (
    <div className="min-h-screen bg-[#F5F5F5] grid lg:grid-cols-2  gap-4 p-4">
      {isLoading && (
        <div className="fixed bg-black/[0.6] h-screen w-screen z-50 left-0 top-0 items-center flex justify-center">
          {" "}
          <PulseLoader speedMultiplier={0.9} color="#fff" size={20} />
        </div>
      )}
      <div
        className="lg:flex   bg-[#D9D9D9]  rounded-[30px] hidden   bg-no-repeat bg-cover bg-center  bg-opacity-100  opacity-[.75] "
        style={{ backgroundImage: `url(${Crop})` }}
      ></div>
      <div className="flex flex-col items-center py-10 px-10 ">
        <div>
          <div>
            <h1 className="font-bold text-[30px] text-[#000]">
              Create an Account
            </h1>
          </div>
          <div className="text-[#8C8C8C] mb-4">
            Enter your email and password to create an account
          </div>
          <form className="space-y-3" onSubmit={formik.handleSubmit}>
            <InputField
              label={`First Name`}
              name={`firstName`}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={formik.touched.firstName && formik.errors.firstName}
              errorText={formik.errors.firstName}
              placeHolder={`Enter Your First Name`}
            />
            <InputField
              label={`Last Name`}
              name={`lastName`}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && formik.errors.lastName}
              errorText={formik.errors.lastName}
              placeHolder={`Enter Your Last Name`}
            />
            <InputField
              label={`Email address`}
              name={`email`}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && formik.errors.email}
              errorText={formik.errors.email}
              placeHolder={`Enter Your E-mail Address`}
            />
            <SelectField
              label={`Gender`}
              name="Gender"
              value={formik.values.Gender}
              onChange={formik.handleChange}
              error={formik.errors.Gender && formik.touched.Gender}
              errorText={formik.errors.Gender}
              placeHolder={"Gender"}
              options={gender}
            />
            <SelectField
              label={`Country`}
              name="country"
              value={formik.values.country}
              onChange={(e) => {
                formik.handleChange(e);
                const selectedOptionAbout =
                  e.target.options[e.target.selectedIndex].getAttribute(
                    "about"
                  );

                formik.setFieldValue("callCode", selectedOptionAbout);
              }}
              error={formik.errors.country}
              errorText={formik.errors.country && formik.touched.country}
              placeHolder={"Nigeria"}
              options={country}
            />
            <div className="flex flex-col">
              <div>
                <label>Phone Number</label>
              </div>
              <div className="grid grid-cols-3 mb-2 gap-x-1">
                <InputField
                  label={``}
                  name={`callCode`}
                  value={formik.values.callCode}
                  onChange={formik.handleChange}
                  error={formik.touched.callCode && formik.errors.callCode}
                  errorText={formik.errors.callCode}
                  placeHolder={`+234`}
                  className={"disabled:bg-white"}
                  disabled={true}
                  onBlur={formik.handleBlur}
                />
                <div className="col-span-2 flex flex-col">
                  <InputField
                    label={``}
                    placeHolder={`802 123 4567`}
                    name={`phoneNumber`}
                    value={formik.values.phoneNumber}
                    // onChange={(e) => {
                    //   const formattedValue = formatDigits(e.target.value);
                    //   formik.setFieldValue("phoneNumber", formattedValue);
                    // }}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                    errorText={formik.errors.phoneNumber}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>
            </div>
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
              {/* <div>
                <p className="text-sm text-contentFade">Password must have</p>

                <div className="flex flex-wrap mt-4 gap-3 text-[13px]">
                  <p
                    className={`${
                      /^(?=.*[a-z])/.test(formik.values.password)
                        ? "text-[#FFFFFF] bg-[#008A2F]"
                        : "text-fadedBlue bg-[#FFFFFF]"
                    } py-1 px-2 rounded-[20px]`}
                  >
                    1 Lowercase
                  </p>
                  <p
                    className={`${
                      /^(?=.*[A-Z])/.test(formik.values.password)
                        ? "text-[#FFFFFF] bg-[#008A2F]"
                        : "text-fadedBlue bg-[#FFFFFF]"
                    } py-1 px-2 rounded-[20px]`}
                  >
                    1 Uppercase
                  </p>
                  <p
                    className={`${
                      /^.{8,}$/.test(formik.values.password)
                        ? "text-[#FFFFFF] bg-[#008A2F]"
                        : "text-fadedBlue bg-[#FFFFFF]"
                    } py-1 px-2 rounded-[20px]`}
                  >
                    At least 8 Characters
                  </p>
                  <p
                    className={`${
                      /^(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/.test(
                        formik.values.password
                      )
                        ? "text-[#FFFFFF] bg-[#008A2F]"
                        : "text-fadedBlue bg-[#FFFFFF]"
                    } py-1 px-2 rounded-[20px]`}
                  >
                    1 Special Character
                  </p>
                  <p
                    className={`${
                      /^(?=.*\d)/.test(formik.values.password)
                        ? "text-[#FFFFFF] bg-[#008A2F]"
                        : "text-fadedBlue bg-[#FFFFFF]"
                    } py-1 px-2 rounded-[20px]`}
                  >
                    1 Number
                  </p>
                </div>
              </div> */}
            </div>
            <div className="relative">
              {" "}
              <InputField
                label={`Confirm Password`}
                name={`passwordConfirmation`}
                type={toggle2 ? "text" : "Password"}
                value={formik.values.passwordConfirmation}
                onChange={formik.handleChange}
                placeHolder={"••••••••"}
                error={
                  formik.touched.passwordConfirmation &&
                  formik.errors.passwordConfirmation
                }
                errorText={formik.errors.passwordConfirmation}
                onBlur={formik.handleBlur}
              />
              <div className="absolute text-[#008A2F] inset-y-[2.2rem] right-3 text-lg ">
                {" "}
                {toggle2 ? (
                  <RiEyeFill
                    onClick={() => {
                      settoggle2(!toggle2);
                    }}
                  />
                ) : (
                  <RiEyeOffFill
                    onClick={() => {
                      settoggle2(!toggle2);
                    }}
                  />
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                // disabled={!isLoading}
                className="bg-[#008A2F] disabled:bg-[#008A2F]/[0.7]  shadow-[0_1px_2px_0_rgba(16,_24,_40,_0.05)] w-full p-1 mt-4 text-white rounded-[5px]"
              >
                <span>Create account</span>
              </button>
            </div>
          </form>
          <div className="mt-12">
            <div className="relative border-t-2 border-[#E6E6E6]  w-full my-8 ">
              <div></div>
              <h1 className="text-center  absolute bg-[#F5F5F5] text-[#828282]  w-[1/2] mt-[-17px] left-[30%]">
                or continue with
              </h1>
            </div>
            <div>
              <button
                type="button"
                className="bg-[#DBDBDB]  shadow-[0_1px_2px_0_rgba(16,_24,_40,_0.05)] w-full items-center text-[#000000] rounded-[5px] flex justify-center p-4"
              >
                <img src={Google} className="mr-2"></img>
                Google
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              <p className="text-[12px] text-[#000] gap-1 flex items-center">
                Have an account Already?
                <Link to="/login" replace={true} className="text-[#008A2F]">
                  Click here to Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
