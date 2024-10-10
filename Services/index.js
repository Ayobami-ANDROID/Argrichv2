import * as yup from "yup";
import axios from "axios";
axios.defaults.baseURL = "https://agrich.onrender.com/api/v1";
const phoneRegExp = /^\d{3} \d{3} \d{4}$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;

export const SignUpValidate = yup.object().shape({
  country: yup.string().required("required"),
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("enter valid email").required("enter email"),
  callCode: yup.string().required("required"),
  Gender: yup.string().required("required"),
  phoneNumber: yup
    .string()
    .max(12, "can't contain more than 10 characters")
    .required("required"),
  password: yup
    .string()
    .min(8, "password must containat least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("required"),
});

export const signinValidate = yup.object().shape({
  email: yup.string().email("enter valid email").required("required"),
  password: yup
    .string()
    .min(8, "password must containat least 8 characters ")
    .required("required"),
});

export const resetPasswordValidate = yup.object().shape({
  email: yup.string().email("enter valid email").required("required"),
});

export const changePasswordSchema = yup.object().shape({
  old_password: yup
    .string()
    .min(8, "password must contain at least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("required"),
  new_password: yup
    .string()
    .min(8, "password must contain at least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("required"),
  new_password_confirm: yup
    .string()
    .oneOf([yup.ref("new_password")], "Passwords must match")
    .required("required"),
});

export const editProfileValidateSchema = yup.object().shape({
  profilePicture: yup.string(),
  name: yup.string(),
  email:  yup.string().email(),
  address: yup.string(),
  city: yup.string(),
  zipcode: yup.string(),
});

export const changePasswordValidate = yup.object().shape({
  password: yup
    .string()
    .min(8, "password must contain at least 8 characters ")
    .matches(
      passwordRegExp,
      "characters with at least one of each: uppercase, lowercase, number and special"
    )
    .required("required"),
  confirm_Password: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("required"),
});
