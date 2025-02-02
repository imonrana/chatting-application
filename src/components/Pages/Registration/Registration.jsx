import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import registration from "../../../assets/propose.gif";
import Button from "../../Button/Button";

import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeCircles } from "react-loader-spinner";





const Registration = () => {

  const auth = getAuth();
  const db = getDatabase();
  const navigate = useNavigate();

  // for dynamic level
  const [emailValue, setEmailValue] = useState(false);
  const [fnameValue, setFnameValue] = useState(false);
  const [pwdValue, setPwdValue] = useState(false);
  const handleEmailInput = (e) => setEmailValue(e.target.value.trim() !== "");
  const handleFnameInput = (e) => setFnameValue(e.target.value.trim() !== "");
  const handlePwdInput = (e) => setPwdValue(e.target.value.trim() !== "");

  // input value & show  error
  const [email, setEmail] = useState("");
  const [emailErro, setEmailErro] = useState("");
  const [fullName, setFullName] = useState("");
  const [fullNameErro, setFullNameErro] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErro, setPasswordErro] = useState("");

  // registration succes start
  const [succes, setSucces] = useState(false);

  //  daymic password show
  const [showpass, setShowpass] = useState(true);

  // handel email input
  const handelEmail = (e) => {
    setEmail(e.target.value);
    setEmailErro("");
  };

  // handel full name input
  const handelFullName = (e) => {
    setFullName(e.target.value);
    setFullNameErro("");
  };

  // handel password input
  const handelPassword = (e) => {
    setPassword(e.target.value);
    setPasswordErro("");
  };



  //handel Registration Submit
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErro("Plase input a Email Address");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailErro("Plase input  valid Email Address ");
    } else if (!fullName) {
      setFullNameErro("Plase Enter Your Name");
    } else if (!password) {
      setPasswordErro("Plase Enter password");
    }
    // else if(!/[A-Z]/.test(password)){
    //   setPasswordErro("Plase add capital letter");
    // }
    // else if(!/[a-z]/.test(password)){
    //   setPasswordErro("Plase add small letter");
    // }
    // else if(!/[\d]/.test(password)){
    //   setPasswordErro("Plase add number");
    // }
    // else if(!/[\W]/.test(password)){
    //   setPasswordErro("Plase add special character");
    // }
    // else if(password.length < 8 ){
    //   setPasswordErro("Plase add minimum 8 character");
    // }
    else if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[\d]/.test(password) ||
      !/[\W]/.test(password) ||
      password.length < 8
    ) {
      setPasswordErro(
        "Password must include at least one [A-Z],  [a-z], [0-9], [~!@#$%^&*], and  at least 8 characters."
      );
    }
    if (
      email &&
      password &&
      fullName &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[\d]/.test(password) &&
      /[\W]/.test(password) &&
      password.length > 8
    ) {
      // firebase authentication Registration process start
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          updateProfile(auth.currentUser, {
            displayName: fullName,
          }).then(() => {
            // Signed up
            toast.success("Registration succesfully done");
            setSucces(true);
            // input field empty
            setEmail("");
            setFullName("");
            setPassword("");
            // firebase email varification
            sendEmailVerification(auth.currentUser)
              .then(() => {
                // send user information in database
                set(ref(db, "users/" + user.user.uid), {
                  username: user.user.displayName,
                  email: user.user.email,
                });
              })
              .then(() => {
                setTimeout(() => {
                  navigate("/login");
                }, 3000);
              })
              .then(() => {
                // Email verification sent!
                toast.success(
                  "Email Verification Send, Plese cheek your Email"
                );
              });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setEmailErro("Email already in used");
          }
        });
    }

    // firebase authentication Registariton process end
  };
  // handel Registration submit end

  // registration jsx part start
  return (
    <section className="flex items-center ">
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
        transition="Bounce"
      />
      {/* tostify Registration succes end */}

      {/* React Loder spinaer start */}
      {succes && (
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
            transform: "translate(-50%, -50%)",
          }}
          wrapperClass=""
        />
      )}
      {/* React Loder spiner end */}

      <article className="font-nunito w-1/2 ml-[190px] ">
        {/* registration header part start */}
        <header>
          <h1 className="font-bold text-[34px] text-info">
            Get started with easily register
          </h1>
          <p className="text-xl text-[rgb(0,0,0,0.50)]">
            Free register and you can enjoy it
          </p>
        </header>
        {/* registration header part end */}

        {/* registration form part start */}
        <form className="mt-[39px]">
          {/* Email field */}
          <fieldset className="relative w-fit">
            <input
              onChange={handelEmail}
              onInput={handleEmailInput}
              className="block peer pl-5 border-[rgb(17,23,93,0.30)] border rounded-lg w-[368px] h-[70px] outline-none placeholder-transparent"
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email Address"
            />
            <label
              className={`${
                emailValue
                && "top-[-22px] peer-focus:top-[-22px] text-sm  bg-white"
              } block p-3 text-[rgb(17,23,93,0.70)] font-semibold absolute left-[52px] tracking-[7.5%] transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xl peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgb(17,23,93,0.70)] peer-focus:bg-white`}
              htmlFor="email"
            >
              Email Address
            </label>
            {/* show email error */}
            <p className="absolute -bottom-5 left-0  text-red-500">
              {emailErro}
            </p>
          </fieldset>

          {/* Full Name field */}
          <fieldset className="relative w-fit my-[38px]">
            <input
              onChange={handelFullName}
              onInput={handleFnameInput}
              className=" pl-5 block peer border-[rgb(17,23,93,0.30)] border rounded-lg w-[368px] h-[70px] outline-none placeholder-transparent"
              type="text"
              name="fname"
              value={fullName}
              id="fname"
              placeholder="Full Name"
            />
            <label
              className={`${
                fnameValue
                  && "top-[-22px] peer-focus:top-[-22px] text-sm  bg-white"
              } block p-3 text-[rgb(17,23,93,0.70)] font-semibold absolute left-[52px] tracking-[7.5%] transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xl peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgb(17,23,93,0.70)] peer-focus:bg-white`}
              htmlFor="fname"
            >
              Full Name
            </label>
            {/* show full name erro */}
            <p className="absolute -bottom-5 left-0 text-red-500">
              {fullNameErro}
            </p>
          </fieldset>

          {/* Password field */}
          <fieldset className="relative w-fit">
            <input
              onChange={handelPassword}
              onInput={handlePwdInput}
              className="block peer pl-5 border-[rgb(17,23,93,0.30)] border rounded-lg w-[368px] h-[70px] outline-none placeholder-transparent"
              type={showpass ? "password" : "text"}
              name="pwd"
              value={password}
              id="pwd"
              placeholder="Password"
            />
            <label
              className={`${
                pwdValue
                && "top-[-22px] peer-focus:top-[-22px] text-sm  bg-white"
              } block p-3 text-[rgb(17,23,93,0.70)] font-semibold absolute left-[52px] tracking-[7.5%] transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xl peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgb(17,23,93,0.70)] peer-focus:bg-white`}
              htmlFor="pwd"
            >
              Password
            </label>
            {/* show password error */}
            <p className="absolute -bottom-12 left-0 text-red-500">
              {passwordErro}
            </p>

            {/* toogle show pass button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowpass(!showpass);
              }}
              className="absolute top-1/2 right-0 -translate-y-1/2 p-3"
            >
              {" "}
              {showpass ? <FaEyeSlash /> : <FaEye />}{" "}
            </button>
          </fieldset>

          <Button
            onClick={handelSubmit}
            className="px-[145px] rounded-[86px] font-nunito font-semibold text-xl text-white mt-[51px] mb-[35px]"
          >
            Sign up
          </Button>
        </form>
        <p className="font-sans font-normal text-sm text-[#03014C]">
          Already have an account?{" "}
          <span className="font-bold text-[#EA6C00] cursor-pointer">
            <Link to="/login">Sign In</Link>
          </span>
        </p>
        {/* registration from part end */}
      </article>

      {/* registration photo part start */}
      <figure className="w-1/2">
        <img
          className=" w-full h-screen object-cover'"
          src={registration}
          alt="registration"
        />
      </figure>
      {/* registration photo part end */}
    </section>
  );
  // registration jsx part end
};

export default Registration;
