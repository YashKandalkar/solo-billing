import React from "react";

const CompanyInfo = () => {
  return (
    <div className="flex flex-row h-[9.5rem]">
      <div className="w-full h-full flex-col items-center border-2 border-b-0 border-black border-l-4 border-t-4 flex">
        <div className="flex flex-col items-center w-full h-2/3">
          <img
            src="/solo_facilities.png"
            alt="logo"
            className="w-auto h-3/4  "
          ></img>
          <div className=" flex flex-row  w-full ">
            <h1 className="text-center font-bold uppercase underline pb-2 text-purple-900 text-lg z-10 pl-60 xl:justify-center">
              Housekeeping services
            </h1>
            <h1 className=" pl-10 font-bold">GSTIN: 27FFDPP4691M1ZO</h1>
          </div>
        </div>
        <div className="flex flex-row h-fit">
          <p className=" w-2/3 text-center border-t-4 border-black text-sm font-semibold">
            SHOP NO - 1, AAI CONSTRUCTION, MATOSHREE SADAN, OPP GAODEVI MANDIR,
            NANDIVALI TEKDI,DOMBIVALI EAST,THANE - 421201
          </p>
          <div className="w-1/3 flex flex-col items-center justify-center  border-black border-x-4 border-t-4">
            {/* <img src="/solo.png" alt="solo-logo"></img> */}
            <h1 className="font-bold underline">info@solofacilities.com</h1>
            <h1 className="font-bold">
              <span className="underline">9082296202</span> /{" "}
              <span className="underline">9892447318</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
