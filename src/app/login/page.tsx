"use client" 
import React, { useState } from "react";

function page() {
  const [isLogin,setIsLogin] = useState <boolean> (false);
  return (
    <div className=" bg-offWhite flex text-black justify-center items-center h-screen font-Montserrat ">
      <div className=" bg-lavender rounded-t-3xl h-[677px] overflow-hidden">
        <div className=" flex flex-col items-center px-8 pt-8 pb-4 gap-4 ">
          <div>logo</div>
          <div className=" text-purple font-normal m-2 text-[32px] p-2">
            SignUp
          </div>
          <form className=" flex flex-col items-center gap-4 m-2">
            <input
              className=" placeholder-purple rounded-xl py-2 px-6"
              placeholder="Email"
            />
            <input
              className=" placeholder-purple rounded-xl py-2 px-6"
              placeholder="Username"
            />
            <input
              className=" placeholder-purple rounded-xl py-2 px-6"
              placeholder="Password"
            />

            <button className=" bg-darkLavender mt-2 text-offWhite text-[24px] rounded-xl py-1 px-12">
              Signup Here
            </button>
          </form>
        </div>


        <div className=" bg-purple text-offWhite rounded-t-[100px] text-center p-3">
          <span className="text-[32px]">Login</span>
          <form className=" flex flex-col items-center gap-4 m-2 p-4">
            <input
              className=" placeholder-purple rounded-xl py-2 px-4"
              placeholder="Email / UserName"
            />
            <input
              className=" placeholder-purple rounded-xl py-2 px-4"
              placeholder="Password"
            />
            <button className=" bg-darkLavender mt-2 text-offWhite text-[24px] rounded-xl py-1 px-12">
              Login Here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
