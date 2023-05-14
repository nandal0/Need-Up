// import { useState } from 'react';
// import './App.css';
// import {Routes, Route, Navigate} from 'react-router-dom';
// import Login from './components/login/Login';
import Home from './component/Home'
// import Forget from './components/login/Forget';
// import Signup from './components/login/Signup';
// import NotFound from './pages/NotFound';
// function App() {
// const [isAuthenticated,setisAuthenticated]=useState(false)
// const [role, setrole] = useState('USER');
// const getDestination = () => {
    
//   if(role === 'USER'){
//     return "/dashboard";
//   }
//   else if(role === 'ADMIN' || role === 'SUPER_ADMIN'){
//     return "/admin/dashboard";
//   }
// }

//   return (
//     <div className="App">
//       <Routes>
//         <Route path='/' element ={<>
//         <Navigate to='/login' replace />
//         </>}  />
//         <Route path="/forgot/password" element={<Forget/>}/>
//         <Route path='/login'  element={!isAuthenticated ? <Login/> : <Navigate to={getDestination()} replace/> } />

//         <Route path="/admin/register" element= { !isAuthenticated ? <Signup/> : <Navigate to={getDestination()} replace />} />
//           {isAuthenticated &&(role === 'ADMIN' || role === 'SUPER_ADMIN') && <Route path='/admin/*'  element={<Home/>}/>}
//           {isAuthenticated && <Route path='/conversations'  element={<Home/>}/>}
//           <Route path="/404" element={<NotFound/>}/>
//           <Route path="*" element={ <Navigate to="/404" replace />}/>
//       </Routes>
      
      
//     </div>
//   );
// }

// export default App;



import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { history } from './_helpers';
import LandingPage from './pages/LandingPage/LandingPage'
// import { history } from '_helpers';
import { Nav, Alert, PrivateRoute } from './_components';
import { AccountLayout } from './account';
// import { UsersLayout } from './';
import { UsersLayout } from './users';
import NotFound from './pages/NotFound';

// export { App };


export default function App() {
  
  
// AccountLayout
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
    history.navigate = useNavigate();
    history.location = useLocation();
    return (
        <div className="app-container bg-light">
            <Nav />
            <Alert />
            <div className="container pt-4 pb-4">
                <Routes>
                    {/* private */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/needup" element={<Home />} />
                        {/* <Route path="users/*" element={<UsersLayout />} /> */}
                    </Route>
                    {/* public */}

                    <Route path="account/*" element={<AccountLayout />} />
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/404" element={<NotFound/>}/>
                    {/* <Route path="*" element={ <Navigate to="/404" replace />}/> */}
                </Routes>
            </div>
        </div>
    );
}
