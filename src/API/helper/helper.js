import axios from 'axios';
import jwt_decode from 'jwt-decode';

// axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;
// axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.baseURL = 'https://needup.onrender.com/';


/** Make API Requests */


/** To get username from Token */
export async function getUsername(){
    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("Cannot find Token");
    let decode = jwt_decode(token)
    return decode;
}

/** authenticate function */
export async function authenticate(username){
    try {
        return await axios.post('/api/authenticate', { username })
    } catch (error) {
        return { error : "Username doesn't exist...!"}
    }
}

/** get User details */
export async function getUser({ username }){
    try {
        const { data } = await axios.get(`/api/user/${username}`);
        return { data };
    } catch (error) {
        return { error : "Password doesn't Match...!"}
    }
}

/** register user function */
export async function registerUser(credentials){
    console.log(credentials);
    try {
        const { data : { msg }, status } = await axios.post(`/signup`, credentials);
        // let { name, email, password } =credentials;
// console.log("msg=>>", msg);
        /** send email */
        if(status === 201){
            console.log('sdf');
            // await axios.post('/signup', { name, email , password})
            
        }

        return Promise.resolve(msg)
    } catch (error) {
        return Promise.reject({ error })
    }
}

/** login function */
export async function verifyPassword({ email, password }){
    try {
        if(email){
            const { data } = await axios.post('/signin', { email, password })
            return Promise.resolve({ data });
        }
    } catch (error) {
        return Promise.reject({ error : "Password doesn't Match...!"})
    }
}

/** update user profile function */
export async function updateUser(response){
    try {
        
        const token = await localStorage.getItem('token');
        const data = await axios.put('/api/updateuser', response, { headers : { "Authorization" : `Bearer ${token}`}});

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error : "Couldn't Update Profile...!"})
    }
}

/** generate OTP */
export async function generateOTP(email){
    try {
        const {data : { msg }, status } = await axios.post('/generateOTP', {  email });

        // send mail with the OTP
        if(status === 201){
            // let { data : { email }} = await getUser({ email });
            let text = `Your Password Recovery OTP is ${msg}. Verify and recover your password.`;
            console.log(text);
            // await axios.post('/api/registerMail', { email, userEmail: email, text, subject : "Password Recovery OTP"})
        }
        console.log(msg);
        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error });
    }
}

/** verify OTP */
export async function verifyOTP({ username, code }){
    try {
       const { data, status } = await axios.post('/verifyotp',  {  code })
       return { data, status }
    } catch (error) {
        return Promise.reject(error);
    }
}

/** reset password */
export async function resetPassword({ email, password }){
    try {
        const { data, status } = await axios.put('/resetpassword', { email, password });
        return Promise.resolve({ data, status})
    } catch (error) {
        return Promise.reject({ error })
    }
}