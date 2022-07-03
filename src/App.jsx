import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testmonials from "./components/testmonials/Testmonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import {useState} from "react";
import "./app.scss"


function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testmonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
