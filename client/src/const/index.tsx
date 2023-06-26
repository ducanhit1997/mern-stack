const LOGIN = "LOGIN";
const REGISTER = "REGISTER";
const FORGOT_PASSWORD = "FORGOT_PASSWORD";
const languages = [
  {
    id: "vi",
    name: "Vietnamese",
  },
  {
    id: "en",
    name: "English",
  },
];
const patternEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const patternPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/;
const RequireField = "This field is required!";
const FieldInvalidEmail = "Email is invalid!";
const PasswordDoNotMatch = "Password do not match!"

export {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD,
  languages,
  patternEmail,
  patternPassword,
  RequireField,
  FieldInvalidEmail,
  PasswordDoNotMatch
};
