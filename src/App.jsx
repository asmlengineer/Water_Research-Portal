import { useState } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Research from './Components/Research/Research';
import PH from './Components/Ph/PH';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Waters from './Components/Waters/Waters'; // Make sure this file exists

function App() {
  const [isHome, setHome] = useState(true);
  const [isResearch, setResearch] = useState(false);
  const [isPH, setPH] = useState(false);
  const [isWater, setWater] = useState(false);
  const [isContact, setContact] = useState(false);
  const [isAbout, setAbout] = useState(false);


  const activeHome = () => {
    setHome(false);  
    setResearch(false);
    setPH(false);
    setWater(false);
    setAbout(false);
    setContact(false);  
  }
  const activeResearch = () => {
    setHome(false);
    setResearch(true);
    setPH(false);
    setWater(false);
    setAbout(false);
    setContact(false);
  }
   const activePH = () => { 
    setHome(false);
    setResearch(false);
    setPH(true);
    setWater(false);
    setAbout(false);
    setContact(false);
  }
  const activeWater = () => {
    setHome(false);
    setResearch(false);
    setPH(false);
    setWater(true);
    setAbout(false);
    setContact(false);
  }
 
  const activeAbout = () => {
   setHome(false);
    setResearch(false);
    setPH(false);
    setWater(false);
    setAbout(true);
    setContact(false);
  }
  const activeContact = () => {
    setHome(false);
    setResearch(false);
    setPH(false);
    setWater(false);
    setAbout(false);
    setContact(true);
  }

  return (
    <>
      <Header
        activeHome={activeHome}
        activeResearch={activeResearch}
        activeWater={activeWater}
        activePH={activePH}
        activeAbout={activeAbout}
        activeContact={activeContact}
      />

      {isHome && <Home />}
      {isResearch && <Research />}
      {isWater && <Waters />}
      {isPH && <PH />}
      {isAbout && <About />}
      {isContact && <Contact />}
      
      <Footer 
        activeHome={activeHome}
        activeResearch={activeResearch}
        activeWater={activeWater}
        activePH={activePH}
        activeAbout={activeAbout}
        activeContact={activeContact}     
      />
    </>
  );
}

export default App;