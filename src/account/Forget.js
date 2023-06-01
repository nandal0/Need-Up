
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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { generateOTP, verifyOTP } from '../API/helper/helper';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthStore } from '../store/store'

// import { options } from '../../../needup_server/routes/user';
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

export default function Forget() {
  const setUsername = useAuthStore(state => state.setUsername);

  const [otp,setOtp]=React.useState('')

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();


  const verifyOtp= async()=>{
    console.log(otp);
    
    try {
      let { status } = await verifyOTP({  code : otp })
      if(status === 201){

        toast.success('Verify Successfully!')

        return navigate('/account/reset')
      }  
    } catch (error) {
      return toast.error('Wront OTP! Check email again!')
    }
  }

  const naviagteHomePage=()=>{

console.log('sdf');
    navigate('/account/recovery');

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      // email: data.get('email'),
    });
    let email=data.get('email');
    generateOTP(email).then((OTP) => {
      console.log(OTP)
      if(OTP) {
        setUsername(email)
        setOpen(true);
        return toast.success('OTP has been send to your email!')
    
    };
      return toast.error('Problem while generating OTP!')
    })

  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Verify Otp</DialogTitle>
        <DialogContent>
          <DialogContentText>
      
          </DialogContentText>
          <TextField
          value={otp}
          onChange={(e)=>setOtp(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Enter  Otp"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={verifyOtp} >Verify</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    
      <Grid container component="main" sx={{ height: '100vh' }}>      <Toaster position='top-center' reverseOrder={false}></Toaster>

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
              Forget Password
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
              
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // onClick={naviagteHomePage}
                onClick={handleClickOpen}
              >
                Send Otp
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
