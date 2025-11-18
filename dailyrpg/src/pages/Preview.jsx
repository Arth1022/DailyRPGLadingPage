import Header from "../components/NavegateBar.jsx";
import Image from "../components/image.jsx";
import React from "react";
import MostImportant from "../components/mostimportant";
import SecondImportant from "../components/SecondImportant.jsx";
import ThirdImportant from "../components/ThirdImportant.jsx";

function Preview() {
  return (
    <div>
      <Image />
      <Header />
      <div className="mt-6">
        <MostImportant />
      </div>

      <div className="mt-6 flex flex-col lg:flex-row justify-center items-start  lg:gap-80 ">
        <SecondImportant />
        <ThirdImportant />
      </div>
      <hr className="w:1/2 lg:w-450 mx-auto border-gray-700 my-6 fade-divider"/>
      
    </div>
  );
}

export default Preview;
