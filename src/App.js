import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
    let [mode, setMode] = useState(localStorage.getItem("mode") || "light");

    let [alert, setAlert] = useState(null);

    let showAlert = (type, message) => {
        setAlert({
            type: type,
            message: message,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000)
    };

    let toggleMode = () => {
        if (mode === "light") {
            localStorage.setItem("mode", "dark");
            setMode("dark");
            showAlert("success", "Dark mode has been enabled");
        } else {
            localStorage.setItem("mode", "light");
            setMode("light");
            showAlert("success", "Light mode has been enabled");
        }
    };
    let body = document.querySelector("body");
    if (mode === "light") {
        body.style.background = "white";
    } else {
        body.style.background = "rgb(40, 45, 50)";
    }
    return (
        <>
            <Navbar
                title="MyTitle"
                home="Home"
                about="About"
                mode={mode}
                toggleMode={toggleMode}
            />
            <Alert alert={alert} />
            <div className="container">
                <TextForm
                    heading="Enter the text to analyze"
                    btn="Convert to Uppercase"
                    mode={mode}
                    showAlert={showAlert}
                />
                {/* <About/> */}
            </div>
        </>
    );
}

export default App;
