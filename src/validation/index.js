import * as Yup from "yup";
export const newMonitorScheme = Yup.object({
  friendlyName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Please enter only letters")
    .min(5, "name must be atleast 5 characters long")
    .max(10, "name must be at most 10 characters long")
    .required("name is required"),
  url: Yup.string().required("Website URL is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  monitor: Yup.string().required("Country is required"),
  mobileNumber: Yup.string()
    .matches(/^[1-9][0-9]{9}$/, "Mobile number is not valid")
    .required("Mobile number is required"),
  referrialid: Yup.string()
    .min(5, "referrial id atleast have 5 character")
    .max(6, "referrial id at most have 6 character")
    .required("referrial id is required"),
});

export const signInScheme = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .max(20, "Password must be at most 20 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&]/,
      "Password must contain at least one special character"
    ),
});

export const tagsScheme = Yup.object({
  tagName: Yup.string().required("tagName is required"),
  color: Yup.string().required("color is required"),
});
