import "./styles/app.scss";
//COMPONENTS
import NavBar from "./components/navbar/NavBar";
import IntroSection from "./components/introsection/IntroSection";
import { AnimatePresence } from "framer-motion"; //DETECTS WHEN THE MOUNTED COMPONENT LEAVES THE SCREEN.

function App() {

  return (

    <div className="App">

      <NavBar/>
    

      <AnimatePresence exitBeforeEnter>
           <IntroSection/>
      </AnimatePresence>
    </div>

  );
}

export default App;


// TODO: ADD RESPONSIVENESS
// TODO: ADD THEME ICON
// TODO: UPDATE HERO SECTION ICONS