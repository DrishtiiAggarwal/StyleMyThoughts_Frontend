import React from "react";

function Navbar() {
  return (
    <div className=" w-[78px] h-screen bg-lavender text-black flex flex-col  items-center">
      <div className=" mt-[5vh]">logo</div>
      <div className=" flex flex-col justify-between h-[181px] items-center mt-[25vh] ">
      <div>home</div>
      <div>write</div>
      <div>notification</div>
      </div>
      <div className="mt-[32vh] ">profile</div>
    </div>
  );
}

export default Navbar;
