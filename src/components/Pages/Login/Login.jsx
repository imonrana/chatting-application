import React, { useState } from 'react'
import login from "../../../assets/login.jpg"
import { FcGoogle } from "react-icons/fc";
import Button from '../../Button/Button';

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
// firebase login
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup } from "firebase/auth";


// React Tostify 
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// React Loder spiner
import { ThreeCircles } from 'react-loader-spinner'
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../Slices/userSlice';

// React redux state



const Login = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const dispatch = useDispatch()
    /* ===============================
         style daynamic label start
    ==================================*/
    const [onInputEmailL, setOnInputEmailL] = useState(false);
    const [onInputPwdL, setOnInputPwdL] = useState(false);
    const handleEmailInput = (e) => setOnInputEmailL(e.target.value.trim() !== "");
    const handlePwdInput = (e) => setOnInputPwdL(e.target.value.trim() !== "");
   /* ===============================
         style daynamic label end
    ==================================*/
    const [worngLoingInfo, setWorngLoginInfo] = useState("") 

    // login valildation & password hide show start

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const handelEmail = (e)=>{
        setEmail(e.target.value);
        setEmailErro("")
        setWorngLoginInfo("")
    }
    const handelPassword = (e)=>{
        setPassword(e.target.value);
        setPasswordErro("")
        setWorngLoginInfo("")
    }

    // show error
    const [emailErro, setEmailErro] = useState("");
    const [passwordErro, setPasswordErro] = useState("");
    // show error end

    // login success sart massage
    const [success, setSuccess] = useState(false)

    // login success end massage 
    // navgiate to home 
    const navigate = useNavigate()
// google login
const googleLogin = ()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    setWorngLoginInfo("")
    dispatch(userLoginInfo(user))
    localStorage.setItem("userLoginInfo", JSON.stringify(user));
    toast.success("Login Success");
    setSuccess(true);
    setTimeout(() => {
      navigate("/home")
    }, 3000);

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    if(errorCode.includes("auth/popup-closed-by-user")){
      setWorngLoginInfo("Please give your valid gmail")
    }
    
  });

}

    function handelLogin(e){
        e.preventDefault();
        if(!email){
            setEmailErro("Plase Fill up Email");
            return
        }
        else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setEmailErro("Plase input  valid Email Address ");
            return
        }
         if(!password){
            setPasswordErro("Plase Fill up Password");
            return
        }
        else if(!/[A-Z]/.test(password) || 
        !/[a-z]/.test(password) || 
        !/[\d]/.test(password) || 
        !/[\W]/.test(password) ||
        password.length < 8 ){
        setPasswordErro("Password must include at least one [A-Z],  [a-z], [0-9], [~!@#$%^&*], and  at least 8 characters.");
        return
        }
        if(email && password 
      ){
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
               dispatch(userLoginInfo(user));

               localStorage.setItem("userLoginInfo", JSON.stringify(user));
              toast.success("Login Success");
              setSuccess(true);
              setTimeout(() => {
                navigate("/home")
              }, 3000);
                
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                
                if(errorCode.includes("auth/invalid-credential")){
                    setWorngLoginInfo("Your Email & Password Wrong");
                }
            });
        }
    }

    // password toogle 
    const [showPass, setShowpass] = useState(false);
    function showPassword(e){
        e.preventDefault
        setShowpass(!showPass)
    }

    // login validation end
    
  return (
    <section className='flex  items-center '>
          {/* tostify registration succees start */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        
        />
      {/* tostify Registration succes end */}

      {/* React Loder spinaer start */}
      {
        success &&
        <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
        wrapperClass=""
        />
      }
      {/* React Loder spiner end */}
      
        <article className='w-1/2  ml-[180px]'>
            <header className='space-y-[29px]'>
                <h1 className='font-sans font-bold text-[34px] text-[#03014C]'>Login to your account!</h1>
                <p onClick={googleLogin}
                 className='hover:bg-primary transition-all duration-500 hover:text-white py-[23px] pl-[29px] pr-[42px] rounded-lg border border-[rgb(3,1,76,0.30)] w-fit font-sans font-semibold text-sm text-[#03014C] align-middle cursor-pointer'> 
                    <span ><FcGoogle className='inline-block text-lg mr-2' /></span>
                     Login with Google
                     </p>
            </header>

            <form action="" className='pt-[32px] space-y-[60px] relative'>
                {/* login email */}
                <fieldset className='w-fit relative'>
                    <input 
                    onInput={handleEmailInput} 
                    onChange={handelEmail}
                    className='w-[372px] h-[70px] border-b border-[rgb(3,1,76,0.20)] outline-none  peer placeholder-transparent' type="email" name='email' id='loginEmail' placeholder='Email Address' />
                    <label className={`${onInputEmailL ? " top-[-10px]  peer-focus:top-[-10px] text-[13px]  text-[rgb(3,1,76,0.50)]" : "top-1/2 -translate-y-1/2 "}
                      block font-sans font-semibold text-xl text-[#03014C] absolute peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-[14px] peer-focus:text-[rgb(3,1,76,0.50)] transition-all duration-500  `} htmlFor="loginEmail">
                    Email Address
                    </label>
                    <p className='absolute -bottom-7 left-0 text-red-500'>{emailErro}</p>
                </fieldset>

                {/* login password */}

                <fieldset className='w-fit relative '>
                    <input 
                    onChange={handelPassword}
                    onInput={handlePwdInput} 
                    className='w-[372px] h-[70px] border-b border-[rgb(3,1,76,0.20)] outline-none  peer placeholder-transparent' 
                    type={showPass? "text": "password"} 
                    name='pwd' 
                    id='loginPwd' 
                    placeholder='Password' />
                    <label className={`${onInputPwdL ? " top-[-10px]  peer-focus:top-[-10px] text-[13px]  text-[rgb(3,1,76,0.50)]" : "top-1/2 -translate-y-1/2  "}
                      block font-sans font-semibold text-xl text-[#03014C] absolute peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgb(3,1,76,0.50) transition-all duration-500  ]`} htmlFor="loginpwd">
                    Password
                    </label>
                    <p className='absolute -bottom-12 left-0 text-red-500'>{passwordErro}</p>
                    {/* show pass */}

                    <button onClick={showPassword} type='button'>{showPass? <FaEye />:<FaEyeSlash />}</button>
                </fieldset>
                {worngLoingInfo && 
                <p className='text-red-500 absolute -bottom-7 left-0'>{worngLoingInfo}</p>
                }
            </form>
            <div className='mt-[55px] space-y-[43px]'>
                <Button onClick={handelLogin} className="py-[26px] px-[122px] rounded-lg font-sans font-semibold text-xl text-[#FFFFFF]">Login to Continue</Button>
                <Link to="/forgotPassword"><Button className=" mt-4 py-[10px] px-[122px] rounded-lg font-sans font-semibold text-xl text-[#FFFFFF]">Forgot Password</Button></Link>
                <p className='font-sans text-sm font-normal text-[#03014C]'>Don’t have an account ? <span className=' font-bold text-[#EA6C00] cursor-pointer'><Link to ="/">Sign up</Link></span></p>
            </div>
        </article>
        <figure className='w-1/2'>
            <img className='w-full h-screen object-cover' src={login} alt="login" />
        </figure>
    </section>
  )
}

export default Login