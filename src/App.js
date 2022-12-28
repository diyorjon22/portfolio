import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from "./pages/homee/home";
import About from "./pages/about/about";
import Skils from './pages/skils/skils';
import Work from "./pages/work/work";
import Contact from "./pages/contact/contact";





function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>;
      <Route path="/about" element={<About/>}/>
      <Route path="/skils" element={<Skils/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
