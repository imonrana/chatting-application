import React, { useState } from "react";

import registration from "../../assets/registration.png";
import Button from "../Button/Button";

const Registration = () => {

  const [emailValue, setEmailValue] = useState(false);
  const [fnameValue, setFnameValue] = useState(false);
  const [pwdValue, setPwdValue] = useState(false);


  const handleEmailInput = (e) => setEmailValue(e.target.value.trim() !== "");
  const handleFnameInput = (e) => setFnameValue(e.target.value.trim() !== "");
  const handlePwdInput = (e) => setPwdValue(e.target.value.trim() !== "");

  return (
    <section className="flex items-center ">
      {/* Registration part */}
      <article className="font-nunito w-1/2 ml-[190px] ">
        <header>
          <h1 className="font-bold text-[34px] text-info">
            Get started with easily register
          </h1>
          <p className="text-xl text-[rgb(0,0,0,0.50)]">
            Free register and you can enjoy it
          </p>
        </header>

        <form action="" className="mt-[39px]">
          {/* Email field */}
          <fieldset className="relative w-fit">
            <input
              onInput={handleEmailInput}
              className="block peer border-[rgb(17,23,93,0.30)] border rounded-lg w-[368px] h-[70px] outline-none placeholder-transparent"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
            <label
              className={`${
                emailValue
                  ? "top-[-22px] peer-focus:top-[-22px] text-sm  bg-white"
                  : "top-1/2 -translate-y-1/2 text-xl"
              } block p-3 font-semibold  text-[rgb(17,23,93,0.70)] absolute  left-[52px] tracking-[7.5%] transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgb(17,23,93,0.70)] peer-focus:bg-white`}
              htmlFor="email"
            >
              Email Address
            </label>
          </fieldset>

          {/* Full Name field */}
          <fieldset className="relative w-fit my-[34px]">
            <input
              onInput={handleFnameInput}
              className="block peer border-[rgb(17,23,93,0.30)] border rounded-lg w-[368px] h-[70px] outline-none placeholder-transparent"
              type="text"
              name="fname"
              id="fname"
              placeholder="Full Name"
            />
            <label
              className={`${
                fnameValue
                  ? "top-[-22px] peer-focus:top-[-22px] text-sm  bg-white"
                  : "top-1/2 -translate-y-1/2 text-xl"
              } block p-3 text-[rgb(17,23,93,0.70)] font-semibold absolute left-[52px] tracking-[7.5%] transition-all duration-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-xl peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgb(17,23,93,0.70)] peer-focus:bg-white`}
              htmlFor="fname"
            >
              Full Name
            </label>
          </fieldset>

          {/* Password field */}
          <fieldset className="relative w-fit">
            <input
              onInput={handlePwdInput}
              className="block peer border-[rgb(17,23,93,0.30)] border rounded-lg w-[368px] h-[70px] outline-none placeholder-transparent"
              type="password"
              name="pwd"
              id="pwd"
              placeholder="Password"
            />
            <label
              className={`${
                pwdValue
                  ? "top-[-22px] peer-focus:top-[-22px] text-sm  bg-white"
                  : "top-1/2  -translate-y-1/2 text-xl"
              } block p-3 text-[rgb(17,23,93,0.70)] font-semibold absolute left-[52px] tracking-[7.5%] transition-all duration-500 peer-placeholder-shown:top-1/2  peer-placeholder-shown:text-xl peer-focus:top-0 peer-focus:text-sm peer-focus:text-[rgb(17,23,93,0.70)] peer-focus:bg-white`}
              htmlFor="pwd"
            >
              Password
            </label>
          </fieldset>

          <Button className="px-[145px] rounded-[86px] font-nunito font-semibold text-xl text-white mt-[51px] mb-[35px]">
            Sign up
          </Button>
        </form>
        <p className="font-sans font-normal text-sm text-[#03014C]">
          Already have an account?{" "}
          <span className="font-bold text-[#EA6C00] cursor-pointer">Sign In</span>
        </p>
      </article>

      <figure className="w-1/2">
        <img
          className=" w-full h-screen object-cover'"
          src={registration}
          alt="registration"
        />
      </figure>
    </section>
  );
};

export default Registration;
