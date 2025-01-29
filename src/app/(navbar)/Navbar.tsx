import React from "react";

function Navbar() {
  return (
    <div className=" w-[78px] h-screen bg-lavender text-black flex flex-col  items-center">
      <div>logo</div>
      <div className=" flex flex-col justify-between h-[181px] items-center self-center">
      <div>home</div>
      <div>write</div>
      <div>notification</div>
      </div>
      <div className="mt-5 ">profile</div>
    </div>
  );
}

export default Navbar;
