// import react router dom
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './App.css'
import Registration from "./components/Pages/Registration/Registration";
import Login from "./components/Pages/Login/Login";
import Home from './components/Pages/Home/Home';
import firebaseConfig from "./components/Firebase/Firebase.config";
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";
import VerifiedEmail from "./components/VerifiedEmail/VerifiedEmail";


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
    <Route path="/" element = {<Home/>}/>
    <Route path="/registration" element = {<Registration/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path="/verifiedEmail" element = {<VerifiedEmail/>}/>,
    <Route path="/forgotPassword" element ={<ForgotPassword/>}/>,
   </Route>
    
  )
);

function App() {


  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
