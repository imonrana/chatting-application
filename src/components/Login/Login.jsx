import React, { useState } from 'react'
import login from "../../assets/login.jpg"
import { FcGoogle } from "react-icons/fc";
import Button from '../Button/Button';

const Login = () => {
    const [onInputEmail, setOnInputEmail] = useState(false);
    const [onInputPwd, setOnInputPwd] = useState(false);
    const handleEmailInput = (e) => setOnInputEmail(e.target.value.trim() !== "");
    const handlePwdInput = (e) => setOnInputPwd(e.target.value.trim() !== "");


  return (
    <section className='flex pt-10 items-center '>
        <article className='w-1/2  ml-[180px]'>
            <header className='space-y-[29px]'>
                <h1 className='font-sans font-bold text-[34px] text-[#03014C]'>Login to your account!</h1>
                <p className='py-[23px] pl-[29px] pr-[42px] rounded-lg border border-[rgb(3,1,76,0.30)] w-fit font-sans font-semibold text-sm text-[#03014C] align-middle cursor-pointer'> 
                    <span><FcGoogle className='inline-block text-lg mr-2' /></span>
                     Login with Google
                     </p>
            </header>

            <form action="" className='pt-[32px] space-y-[60px]'>
                {/* login email */}
                <fieldset className='w-fit relative'>
                    <input onInput={handleEmailInput} className='w-[372px] h-[70px] border-b border-[rgb(3,1,76,0.20)] outline-none  peer placeholder-transparent' type="email" name='email' id='loginEmail' placeholder='Email Address' />
                    <label className={`${onInputEmail ? " top-[-10px]  peer-focus:top-[-10px] text-[13px]  text-[rgb(3,1,76,0.50)]" : "top-1/2 -translate-y-1/2 "}
                      block font-sans font-semibold text-xl text-[#03014C] absolute peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-[14px] peer-focus:text-[rgb(3,1,76,0.50)] transition-all duration-500  `} htmlFor="loginEmail">
                    Email Address
                    </label>
                </fieldset>

                {/* login password */}

                <fieldset className='w-fit relative '>
                    <input onInput={handlePwdInput} className='w-[372px] h-[70px] border-b border-[rgb(3,1,76,0.20)] outline-none  peer placeholder-transparent' type="password" name='pwd' id='loginPwd' placeholder='Password' />
                    <label className={`${onInputPwd ? " top-[-10px]  peer-focus:top-[-10px] text-[13px]  text-[rgb(3,1,76,0.50)]" : "top-1/2 -translate-y-1/2  "}
                      block font-sans font-semibold text-xl text-[#03014C] absolute peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgb(3,1,76,0.50) transition-all duration-500  ]`} htmlFor="loginpwd">
                    Password
                    </label>
                </fieldset>
            </form>
            <div className='mt-[55px] space-y-[43px]'>
                <Button className="py-[26px] px-[122px] rounded-lg font-sans font-semibold text-xl text-[#FFFFFF]">Login to Continue</Button>
                <p className='font-sans text-sm font-normal text-[#03014C]'>Don’t have an account ? <span className=' font-bold text-[#EA6C00] cursor-pointer'>Sign up</span></p>
            </div>
        </article>
        <figure className='w-1/2'>
            <img className='w-full h-screen object-cover' src={login} alt="login" />
        </figure>
    </section>
  )
}

export default Login