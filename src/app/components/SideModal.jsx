import React from "react";
import Image from "next/image";
import Button from "./Button";

const SideModal = ({handleModal, inputTagValue, setInputTagValue, handleSaveChanges}) => {
  return (
    <div
      className="min-h-screen flex flex-col bg-white w-[620px] absolute right-0 z-[9999] backdrop-blur-sm top-0 py-10 px-10 gap-10"
      style={{
        boxShadow: "0px 120px 120px 0px rgba(0, 0, 0, 0.20)",
      }}
    >
        <div className="flex justify-between items-center">
            <div className="text-[#0B103A] text-2xl">Tag group name</div>
            <Image src="/icons/close.svg" alt='close' width={40} height={40} onClick={()=> handleModal(false)}/>
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="tagName" className="text-[#4B4B63] text-base">Tag Group Name</label>
        <input type="text" name="tagName" id="tagName" className="border border-[#6D7089] rounded-lg px-4 py-2 w-[320px] h-[48px] text-black font-medium focus:outline-none" value={inputTagValue} onChange={(e)=> setInputTagValue(e.target.value)}/>
        </div>
        <div className="flex gap-8 items-center">
            <Button buttonName="Save Changes" onClick={handleSaveChanges}/>
            <div className="text-[#0B103A] text-base cursor-pointer" onClick={()=>setInputTagValue("")}>Cancel</div>
        </div>
        <div className="border-b-[1px]"></div>
    </div>
  );
};

export default SideModal;
