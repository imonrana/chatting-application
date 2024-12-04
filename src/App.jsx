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


const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
    <Route path="/" element = {<Registration/>}/>
    <Route path="/login" element = {<Login/>}/>
    <Route path = "/home" element = {<Home/>}/>
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
