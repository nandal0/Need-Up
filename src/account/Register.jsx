
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
import loginlogo from '../assets/images/logos/loginlogo.png';
import "./style.css";
import needuplogo from '../assets/images/logos/needuplogo.png'
import { NavLink ,useNavigate } from "react-router-dom";
import { registerUser } from '../API/helper/helper'
import toast, { Toaster } from 'react-hot-toast';

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

 function Register() {
  
  const navigate = useNavigate();


  const naviagteHomePage=()=>{

console.log('sdf');
    navigate('/');

  }
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let UserData={
      name:data.get('name'),
      email: data.get('email'),
      password: data.get('password'),

    }
    console.log("userData==>",UserData);
    
    console.log({
      name:data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
    // console.log(data);
    let registerPromise = registerUser(UserData)
    // console.log(registerPromise);
    toast.promise(registerPromise, {

      loading: 'Creating...',
      success : <b>Register Successfully...!</b>,
      error : <b>Already Register.</b>
    });
    registerPromise.then(function(){ navigate('/needup')});

  };

  return (
    <ThemeProvider theme={theme}>
    
      <Grid container component="main" sx={{ height: '100vh' }}>
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <section className="section-1">
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
            <img class="register_needup_logo"  onClick={naviagteHomePage}  src={needuplogo} alt="Needup logo"></img>
            {/* </Avatar> */}
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="full name"
                label="Full Name"
                name="name"
                autoComplete="full name"
                autoFocus
              />
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
                Sign Up
              </Button>
              <Grid container>
                <Grid item xs>
                <NavLink to="/account/forget-password" href="#" variant="body2">
                    Forgot password?
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to="/account/login" href="#" variant="body2">
                    {" Have an account    Sign In"}
                  </NavLink>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
        <CssBaseline />
      
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // backgroundImage: `url(${loginlogo})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

       <div className="herob">
        <img class="image-signup" src={loginlogo}></img>
        </div>
    </section>
      </Grid>
    </ThemeProvider>
  );
}
export { Register };
