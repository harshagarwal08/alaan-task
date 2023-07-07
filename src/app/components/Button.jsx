import React from "react";

const Button = ({buttonName, onClick}) => {
  return (
    <button class="bg-[#5BADEC] text-white py-2 px-5 rounded-full w-[200px] h-[48px] text-base" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
