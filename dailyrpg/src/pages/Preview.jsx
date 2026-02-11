import Header from "../components/NavegateBar.jsx";
import Image from "../components/image.jsx";
import React from "react";
import MostImportant from "../components/MostImportant";
import SecondImportant from "../components/SecondImportant.jsx";
import ThirdImportant from "../components/ThirdImportant.jsx";
import BossScreen from "../components/Boss.jsx";
import PVP from "../components/PVP.jsx";
import Rank from "../components/Rank.jsx";
import BossSecond from "../components/BossSecond.jsx";
import Copyright from "../components/copyright.jsx";
import SocialMidia from "../components/SocialMidia.jsx";
import Carrossel from "../components/Carrossel.jsx";
import Start from "../components/Start.jsx";

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
      <hr className="w:1/2 lg:w-450 mx-auto border-gray-700 my-6 fade-divider" />
      <div>
        <BossScreen />
      </div>
      <div className="mt-6 flex flex-col lg:flex-row justify-center items-start  lg:gap-30 ">
        <PVP />
        <Rank />
        <BossSecond />
      </div>
      <hr className="w:1/2 lg:w-450 mx-auto border-gray-700 my-6 fade-divider" />

      <div>
        <Carrossel />
      </div>
      <div>
        <Start />
      </div>
      <hr className="w:1/2 lg:w-450 mx-auto border-gray-700 my-6 fade-divider" />

      <div className="text-center mb-6">
        <Copyright />
      </div>
      <div>
        <SocialMidia />
      </div>
    </div>
  );
}

export default Preview;
