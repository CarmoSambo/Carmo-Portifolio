import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from"./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

import './App.css'

function App() {

  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Experience />
            <Skills/>
            <Projects />
            <Contact />
          </>
        } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
  
export default App
