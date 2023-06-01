
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
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { generateOTP } from '../API/helper/helper';

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

export default function Recovery() {
  const navigate = useNavigate();
  const [OTP, setOTP] = React.useState();
const [email,setEmail]=React.useState();
  useEffect(() => {
    generateOTP(email).then((OTP) => {
      console.log(OTP)
      if(OTP) return toast.success('OTP has been send to your email!');
      return toast.error('Problem while generating OTP!')
    })
  }, [email]);

  const naviagteHomePage=()=>{

console.log('sdf');
    navigate('/account/reset');

  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    let email=data.get('email');
    generateOTP(email).then((OTP) => {
      console.log(OTP)
      if(OTP) return toast.success('OTP has been send to your email!');
      return toast.error('Problem while generating OTP!')
    })
  };

  return (
    <ThemeProvider theme={theme}>
    
      <Grid container component="main" sx={{ height: '100vh' }}>
      <section className="section-2">
        <Grid square
        
        >
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
            <img class="register_needup_logo"  src={needuplogo} alt="Needup logo"></img>
            {/* </Avatar> */}
            <Typography component="h1" variant="h5">
              Verify Otp
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
           
              <TextField
              // value={email}
              // setEmail={(e)=>setEmail(e.value.target)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Enter Otp"
                name="email"
                autoComplete="email"
                autoFocus
              />
           
                          <span className='otp-recovery'>Resend Otp</span>

              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={naviagteHomePage}
              >
                Send Otp
              </Button>
              <Grid container>
             
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
      
        

       {/* <div className="herob"> */}
        {/* <img class="image-signup" src={loginlogo}></img> */}
        {/* </div> */}
    </section>
      </Grid>
    </ThemeProvider>
  );
}
