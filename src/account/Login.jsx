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

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import registerlogo from "../assets/images/logos/registerlogo.png";
import "./style.css";
import needuplogo from '../assets/images/logos/needuplogo.png'
import { fadeIn,slideIn, staggerContainer } from "../utils/motion";
import css from "../components/Hero/Hero.module.scss";
import { NavLink ,useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import { motion } from "framer-motion";
import { verifyPassword } from '../API/helper/helper';
function Copyright(props) {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

 function Login() {
  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let loginData={
      
      email: data.get('email'),
      password: data.get('password'),
    }
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    let loginPromise = verifyPassword({email: loginData.email, password : loginData.password })
    toast.promise(loginPromise, {
      loading: 'Checking...',
      success : <b>Login Successfully...!</b>,
      error : <b>Password Not Match!</b>
    });

    loginPromise.then(res => {
      let { token } = res.data;
      localStorage.setItem('token', token);
      navigate('/needup')
    })

  };
  const navigate = useNavigate();


  const naviagteHomePage=()=>{


    navigate('/');

  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Toaster position='top-center' reverseOrder={false}></Toaster>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{

            // backgroundImage: `url(${registerlogo})`,

            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="herobg">
            <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      ></motion.div>
          <motion.span  variants={fadeIn("right", "tween", 0.2, 1)}>
          <img class="image-signin" src={registerlogo}></img>
          </motion.span>
       
</div>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}> */}
           <img onClick={naviagteHomePage} class="login_needup_logo" src={needuplogo} alt="Needup logo"></img>
            {/* </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <NavLink to="/account/forget-password" href="#" variant="body2">
                    Forgot password?
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to="/account/register" variant="body2">
                    Don't have an account? Sign Up
                  </NavLink>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
export { Login };
