import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";


import { alertActions, userActions } from '../_store';
import { history } from '../_helpers';
import { slideIn ,fadeIn} from '../utils/motion';
// import {home-decor-4} from '../assets/images/home-decor-4.png';
import Signup from './signup';
import Paper from "@mui/material/Paper";
import loginlogo from '../assets/images/logos/loginlogo.png';
import './style.css'
export { Register };
function Register() {

    const dispatch = useDispatch();

    // form validation rules 
    // const validationSchema = Yup.object().shape({
    //     firstName: Yup.string()
    //         .required('First Name is required'),
    //     lastName: Yup.string()
    //         .required('Last Name is required'),
    //     username: Yup.string()
    //         .required('Username is required'),
    //     password: Yup.string()
    //         .required('Password is required')
    //         .min(6, 'Password must be at least 6 characters')
    // });
    // const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    // const { register, handleSubmit, formState } = useForm(formOptions);
    // const { errors, isSubmitting } = formState;

    // async function onSubmit(data) {
    //     dispatch(alertActions.clear());
    //     try {
    //         await dispatch(userActions.register(data)).unwrap();

    //         // redirect to login page and display success alert
    //         history.navigate('/account/login');
    //         dispatch(alertActions.success({ message: 'Registration successful', showAfterRedirect: true }));
    //     } catch (error) {
    //         dispatch(alertActions.error(error));
    //     }
    // }

    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    
      const validationSchema = Yup.object({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      });
    
      const onSubmit = (values) => {
        console.log(values);
      };

    return (
        <section className="register-forms">

        {/* <div className="register-form-container">
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="register-form">
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" />
              </div>
  
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" />
              </div>
  
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" />
              </div>
  
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" />
              </div>
  
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" />
              </div>
  
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div> */}

     <div className="singup-container">
     <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
      
     <Signup/>
     </Paper>
     </div>
      
        
         

      <div class="herotwo">
      </div>

<div className="reg-logo">
<img src={loginlogo} alt="logo" />

</div>
        {/* <img src="https://cdn.dribbble.com/users/983498/screenshots/15253921/media/8bd9b8e4451fd623970a24e7d4bf05d6.png?compress=1&resize=1000x750&vertical=top" alt="" /> */}

      </section>
    );
    
}
