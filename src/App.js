import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import About from "./components/About";
import TextForm from "./components/TextForm";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
    let [mode, setMode] = useState(localStorage.getItem("mode") || "dark");
    let [alert, setAlert] = useState(null);

    let showAlert = (type, message) => {
        setAlert({
            type: type,
            message: message,
        });
        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    let toggleMode = () => {
        if (mode === "light") {
            localStorage.setItem("mode", "dark");
            setMode("dark");
            showAlert("success", "Dark mode has been enabled");
            document.getElementById("theme-btn").src = "./sun.png"
        } else {
            localStorage.setItem("mode", "light");
            setMode("light");
            showAlert("success", "Light mode has been enabled");
            document.getElementById("theme-btn").src = "./moon.png"
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
            <BrowserRouter>
                <Navbar
                    title="MyTitle"
                    home="Home"
                    about="About"
                    mode={mode}
                    toggleMode={toggleMode}
                />
                <Alert alert={alert} />
                <div className="container">
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={
                                <>
                                    <TextForm
                                        heading="Try TextUtils - word counter, character counter, remove extra spaces"
                                        mode={mode}
                                        showAlert={showAlert}
                                    />
                                    <Footer mode={mode} />
                                </>
                            }
                        />
                        <Route
                            path="/home"
                            element={
                                <>
                                    <TextForm
                                        heading="Try TextUtils - word counter, character counter, remove extra spaces"
                                        mode={mode}
                                        showAlert={showAlert}
                                    />
                                    <Footer mode={mode} />
                                </>
                            }
                        />
                        <Route path="/about" element={<About mode={mode} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
