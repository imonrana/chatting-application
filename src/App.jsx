// import react router dom
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './App.css'
import Root from "./components/Root/Root";
import Registration from "./components/Pages/Registration/Registration";
import Login from "./components/Pages/Login/Login";
import Home from './components/Pages/Home/Home';
import firebaseConfig from "./components/Firebase/Firebase.config";
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";
import VerifiedEmail from "./components/VerifiedEmail/VerifiedEmail";
import Message from "./components/Pages/Message/Message";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Route outlet stracture  */}
   <Route path="/"  element = {<Root/>}>
    <Route index element = {<Home/>}/>,
    <Route path="/verifiedEmail" element = {<VerifiedEmail/>}/>,
    <Route path="/forgotPassword" element ={<ForgotPassword/>}/>,
    <Route path = "/message" element ={<Message/>}/>,
   </Route>,

   {/* Independents Route */}
   <Route path="/registration" element = {<Registration/>}/>
   <Route path="/login" element = {<Login/>}/>
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
