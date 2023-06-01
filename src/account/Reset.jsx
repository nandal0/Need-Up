
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
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { resetPassword } from '../API/helper/helper';
import { useAuthStore } from '../store/store';

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

export default function Reset() {
  const { username } = useAuthStore(state => state.auth);
console.log(username);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [match,setMatch]=useState()
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [validationError, setValidationError] = useState();
let regexError='Password must be at least 8 characters long and contain at least one letter and one number.'

const handlePasswordChange = (event) => {
  const { value } = event.target;
  setPassword(value);
  validatePassword(value);
};
const handleConfirmPasswordChange = (event) => {
  const { value } = event.target;
  setConfirmPassword(value);
  matchPassword(value);
};

const matchPassword =(value)=>{
  if(password!==value){
    setConfirmPasswordError('Passwords do not match');
    setMatch(false)
    return ;
  }
  else
  {
    setConfirmPasswordError('')
    console.log('matching');
    setMatch(true)
  }
}

const validatePassword = (value) => {
  // Password validation regex (at least 8 characters, 1 uppercase, 1 lowercase, and 1 digit)
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!passwordRegex.test(value)) {
    setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.');
  } else {
    setPasswordError('');
  }
};


  const naviagteHomePage=()=>{

console.log('sdf');
    // navigate('/account/login');

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let passwordData={
      
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')
    }
    
    

   
    console.log(match);
    console.log({
      // email: data.get('email'),
      password: data.get('password'),
      confirmPassword: data.get('confirmPassword')
    });


   if(passwordError===''&&confirmPasswordError===''){
    console.log('done');
    let resetPromise = resetPassword({email:username,password:confirmPassword })

    toast.promise(resetPromise, {
      loading: 'Updating...',
      success: <b>Reset Successfully...!</b>,
      error : <b>Could not Reset!</b>
    });

    resetPromise.then(function(){ navigate('/needup') })

   }
   else{
    console.log('not done');
    return ;

   }




  };
  

  return (
    <ThemeProvider theme={theme}>
    
      <Grid container component="main" sx={{ height: '100vh' }}>
      <section className="section-2">
        <Grid square
        
        >
                <Toaster position='top-center' reverseOrder={false}></Toaster>

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
              New Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 ,    maxWidth: "500px"
}}
            
            >
           
            <TextField

                      id="outlined-error-helper-text"
                
                      onChange={handlePasswordChange}

                      // error
                      error={!!passwordError}
                      helperText={passwordError}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"

              /><TextField
              error={!!confirmPasswordError}
              // error={false}
              helperText={confirmPasswordError}
              value={confirmPassword}
onChange={handleConfirmPasswordChange}
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm-Password"
              type="password"
                      id="outlined-error-helper-text"
              autoComplete="current-password"
            />
              
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // onClick={naviagteHomePage}
              >
                Save Change
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
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
