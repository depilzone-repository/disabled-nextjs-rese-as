"use client"
import { QRCodeCanvas } from "qrcode.react";
import { LuScanLine } from "react-icons/lu";
import React from "react";
import LineCorner from "./LineCorner";

const QRModal: React.FC = () => {
 
  const reviewPageUrl = "http://localhost:3000/review";

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-3xl flex flex-col justify-center items-center relative p-10">
     
        <h1 className="text-black text-center mb-6 text-xl font-semibold">
          Escanéa el QR y compártenos tu experiencia!
        </h1>

      
        <LuScanLine className="text-black text-4xl mb-6" />

        <div className="relative flex justify-center items-center p-4 bg-white rounded-lg">
          <QRCodeCanvas
            value={reviewPageUrl} 
            size={256} 
            level="H"
            className="rounded-lg"
          />
 <LineCorner position="topLeft" />
          <LineCorner position="topRight" />
          <LineCorner position="bottomLeft" />
          <LineCorner position="bottomRight" />
        </div>
      </div>
    </div>
  );
};

export default QRModal;
