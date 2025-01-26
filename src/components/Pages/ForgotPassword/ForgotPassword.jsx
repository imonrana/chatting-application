import React, { useState } from "react";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";




const ForgotPassword = () => {

const auth = getAuth();
  // daynamit label state start
  const [onInputEmailL, setOnInputEmailL] = useState(false);
  const [email, setEmail] = useState("");
  const [emailErro, setEmailErro] = useState("");
  const handleEmailInput = (e) => setOnInputEmailL(e.target.value.trim() !== "");


//  handel email input
  const handelEmail = (e) => {
    setEmail(e.target.value);
    setEmailErro("");
  };

//   handel forgot password
  function handelforgot(e) {
    e.preventDefault();
    if (!email) {
      setEmailErro("Plase Fill up Email");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailErro("Plase input  valid Email Address ");
      return;
    }
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          toast.success("Passsword reset email sent");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }

  return (
    <section className="flex flex-col gap-y-5 items-center  justify-center h-screen">
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
        transition:Bounce
      />
      {/* tostify Registration succes end */}

      <h1 className="text-center text-black font-bold text-4xl">
        Forgot Password
      </h1>
      <div className=" shadow-lg bg-lime-400 py-5 px-5 w-fit rounded">
        <fieldset className="w-fit relative">
          <input
            onInput={handleEmailInput}
            onChange={handelEmail}
            className="w-[372px] h-[70px] border-b border-[rgb(3,1,76,0.20)] outline-none  peer placeholder-transparent bg-transparent"
            type="email"
            name="email"
            id="loginEmail"
            placeholder="Email Address"
          />
          <label
            className={`${
              onInputEmailL
                ? " top-[-10px]  peer-focus:top-[-10px] text-[13px]  text-[rgb(3,1,76,0.50)]"
                : "top-1/2 -translate-y-1/2 "
            }
                      block font-sans font-semibold text-xl text-[#03014C] absolute peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-0 peer-focus:text-[14px] peer-focus:text-[rgb(3,1,76,0.50)] transition-all duration-500  `}
            htmlFor="loginEmail"
          >
            Email Address
          </label>
          <p className="absolute -bottom-7 left-0 text-red-500">{emailErro}</p>
        </fieldset>

        <div className="mt-[55px] space-y-[43px] space-x-5">
          <Button
            onClick={handelforgot}
            className="py-[10px] px-[26px] rounded font-sans font-semibold text-xl text-[#FFFFFF]"
          >
            Reset
          </Button>
          <Link to="/login">
            <Button className=" mt-4 py-[10px] px-[26px] rounded font-sans font-semibold text-xl text-[#FFFFFF]">
              {" "}
              Back to Login
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
