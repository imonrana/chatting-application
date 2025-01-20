import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigate } from 'react-router-dom'

// firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import VerifiedEmail from '../VerifiedEmail/VerifiedEmail'
import { Outlet } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar';
import Home from '../Pages/Home/Home';

const Root = () => {
    const auth = getAuth();
    const [verified, setVerified] = useState(false)
    const navigate = useNavigate()
    const data = useSelector(state => state.userDetails.userInfo);
  
    useEffect(()=>{
        if(!data){
          navigate("/login")
        }
      })
      

   useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user.emailVerified) {
          setVerified(true)
        } else {
          setVerified(false)
        }
      });

   },[]);

  return (
    <section  className='relative p-4'>
{
  verified ?
  <div className='flex gap-x-[20px]'>
  <div>
  <NavigationBar/>
  </div>

  <div>
    
<Outlet/>
    
  </div>
  
  </div>

:
<VerifiedEmail/>
}
</section>
  )
}

export default Root