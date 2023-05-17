// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { authActions } from '../_store';

// export { Login };

// function Login() {

//     const dispatch = useDispatch();

//     // form validation rules
//     const validationSchema = Yup.object().shape({
//         username: Yup.string().required('Username is required'),
//         password: Yup.string().required('Password is required')
//     });
//     const formOptions = { resolver: yupResolver(validationSchema) };

//     // get functions to build form with useForm() hook
//     const { register, handleSubmit, formState } = useForm(formOptions);
//     const { errors, isSubmitting } = formState;

//     function onSubmit({ username, password }) {
//         return dispatch(authActions.login({ username, password }));
//     }

//     return (
//         <div className="card m-3">
//             <h4 className="card-header">Login</h4>
//             <div className="card-body">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <div className="mb-3">
//                         <label className="form-label">Username</label>
//                         <input name="username" type="text" {...register('username')} className={`form-control ${errors.username ? 'is-invalid' : ''}`} />
//                         <div className="invalid-feedback">{errors.username?.message}</div>
//                     </div>
//                     <div className="mb-3">
//                         <label className="form-label">Password</label>
//                         <input name="password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
//                         <div className="invalid-feedback">{errors.password?.message}</div>
//                     </div>
//                     <button disabled={isSubmitting} className="btn btn-primary">
//                         {isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
//                         Login
//                     </button>
//                     <Link to="../register" className="btn btn-link">Register</Link>
//                 </form>
//             </div>
//         </div>
//     )
// }

// import React, { useState } from "react";

// Material UI Imports
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Button,
  Input,
  Checkbox,
  Alert,
  Stack,
} from "@mui/material";
import Paper from "@mui/material/Paper";

// Material UI Icon Imports
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import registerlogo from "../assets/images/logos/registerlogo.png";

// Email Validation
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  //Inputs
  const [emailInput, setEmailInput] = useState();
  const [passwordInput, setPasswordInput] = useState();
  const [rememberMe, setRememberMe] = useState();

  // Inputs Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState();
  const [success, setSuccess] = useState();

  // Handles Display and Hide Password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Label for Checkbox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Validation for onBlur Email
  const handleEmail = () => {
    console.log(isEmail(emailInput));
    if (!isEmail(emailInput)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }

    setPasswordError(false);
  };

  //handle Submittion
  const handleSubmit = () => {
    setSuccess(null);
    //First of all Check for Errors

    // If Email error is true
    if (emailError || !emailInput) {
      setFormValid("Email is Invalid. Please Re-Enter");
      return;
    }

    // If Password error is true
    if (passwordError || !passwordInput) {
      setFormValid(
        "Password is set btw 5 - 20 characters long. Please Re-Enter"
      );
      return;
    }
    setFormValid(null);

    // Proceed to use the information passed
    console.log("Email : " + emailInput);
    console.log("Password : " + passwordInput);
    console.log("Remember : " + rememberMe);

    //Show Successfull Submittion
    setSuccess("Form Submitted Successfully");
  };

  return (
    <section className="login-forms">
      <div class="herobg"></div>
      <div className="reg-logo">
        <img src={registerlogo} alt="logo" />
      </div>

      <div class="form-container">
        <form>
          <div>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>
          <button class="form-btn">Signin</button>
        </form>
      </div>
    </section>
  );
}

export { Login };
