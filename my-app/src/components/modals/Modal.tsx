"use client"
import React, { useEffect, useState } from "react";
import { ModalProps } from "./types";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";





const Modal: React.FC<ModalProps> = ({ message, show, onClose }) => {
    const [animate, setAnimate] = useState(false);


    useEffect(() => {
        if (show) {
          setAnimate(true);  
        }
      }, [show]);
    
      if (!show) return null;
 

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8  rounded-lg shadow-lg w-11/12 relative">
      <button
          onClick={onClose}
          className="absolute top-2 right-2 text-5xl text-cyan-500 hover:text-gray-800 "
        >
         <IoCloseOutline />
        </button>
        <h2 className="text-[28px] pt-14 text-center text-black">{message}</h2>
        <div className=" flex justify-center p-10">
        <IoMdCheckmarkCircleOutline  className={`text-green-500 text-9xl   ${animate ? "animate-checkmark" : ""}`}/>
        </div>

        
        <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-2 text-black text-center">Descarga nuestra app</h3>
            <p className="mb-10 text-[14px] text-gray-600 text-center">Mantente conectado con nosotros y disfruta de las últimas características de nuestra app.</p>

          
            <div className="flex justify-center gap-8 ">
            
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="text-black text-4xl">
              <FaGooglePlay />
              </a>

           
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="text-black text-4xl">
              <FaAppStore />
              </a>
            </div>
          </div>

        
      </div>
    </div>
  );
};

export default Modal;
