import "./App.css";
import React from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
    let [mode, setMode] = useState(localStorage.getItem("mode") || "light");
    let toggleMode = () => {
        if(mode === "light"){
            localStorage.setItem("mode", "dark");
            setMode("dark");
        }else{
            localStorage.setItem("mode", "light");
            setMode("light");
        }
    }
    let body = document.querySelector("body");
    if(mode === "light"){
        body.style.background="white"
    }else{
        body.style.background="rgb(40, 45, 50)"
    }
    return (
        <>
            <Navbar title="MyTitle" home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
            <div className="container">
                <TextForm heading="Enter the text to analyze" btn="Convert to Uppercase" mode={mode}/>
                {/* <About/> */}
            </div>
        </>
    );
}

export default App;
