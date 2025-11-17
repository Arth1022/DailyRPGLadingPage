import './App.css'

import Headers from './components/NavegateBar'
import Downaload from './components/download'
import Image from './components/Image' 


function App() {


  return (
    <>
    <div>
      <Image />
      <Headers />
      <div className=''><Downaload /></div>
    </div>
      
    </>
  )
}

export default App
