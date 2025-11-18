import "./App.css";

import Headers from "./components/NavegateBar";
import Downaload from "./components/download";
import Image from "./components/image.jsx";
import Icons from "./components/icons";
import Copyright from "./components/copyright.jsx";
import SocialMidia from "./components/SocialMidia.jsx";

function App() {
  return (
    <>
      <div>
        <Image />
        <Headers />
        <div className="">
          <Downaload />
        </div>
        <Icons />
      </div>
      <hr className="w-1/2 mx-auto border-gray-700 my-6 fade-divider"/>
      
      <div><Copyright /></div>

      <div className="mt-6"><SocialMidia /></div>
    </>
  );
}

export default App;
