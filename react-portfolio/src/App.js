import Navbar from "./scenes/Navbar";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery"

function App() {
   //Adding states, this one is stating what part of the navigation from the website we are at
   const [ selectedPage, setSelectedPage ] = useState('home');
   //This variable is storing the size of the screen
   const isAboveMediumScreens = useMediaQuery("min-width: 1060px")

  return <div className="app bg-deep-blue">
    <Navbar selectedPage={selectedPage} setSelectedPage={ setSelectedPage}/>
  </div>
}

export default App;
