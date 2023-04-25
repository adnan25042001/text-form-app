import React, { useState } from "react";

let TextForm = (props) => {
    let upClick = () => {
        setText(text.toUpperCase());
    };
    let downClick = () => {
        setText(text.toLowerCase());
    };
    let clearText = () => {
        setText("");
    };
    let textSpeech = () => {
        let msg = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        let dropDown = document.getElementById("drop-down-btn");
        for (let i = 0; i < voices.length; i++) {
            let list = document.createElement("li");
            let a = document.createElement("a");
            a.innerText = voices[i].name;
            a.href = "/";
            a.setAttribute("class", "dropdown-item");
            a.addEventListener("click", () => {
                msg.voice = voices[i];
                msg.text = text;
                window.speechSynthesis.speak(msg);
            });
            list.append(a);
            if (i !== 0) {
                let hr = document.createElement("hr");
                dropDown.append(hr);
            }
            dropDown.append(list);
        }
    };
    let countVowel = () => {
        const vowels = ["a", "e", "i", "o", "u"];

        // Initialize a variable to store the count of vowels
        let count = 0;

        // Loop through each character of the string
        for (let i = 0; i < text.length; i++) {
            // Check if the current character is a vowel
            if (vowels.includes(text[i].toLowerCase())) {
                // Increment the count if it is a vowel
                count++;
            }
        }

        // Return the count of vowels
        return count;
    };
    let countConsonents = () => {
        // Define an array of vowels
        const vowels = ["a", "e", "i", "o", "u"];

        // Initialize a variable to store the count of consonants
        let count = 0;

        // Loop through each character of the string
        for (let i = 0; i < text.length; i++) {
            // Check if the current character is a letter and not a vowel
            if (
                /[a-zA-Z]/.test(text[i]) &&
                !vowels.includes(text[i].toLowerCase())
            ) {
                // Increment the count if it is a consonant
                count++;
            }
        }

        // Return the count of consonants
        return count;
    };
    let copyText = () => {
        let text = document.getElementById("my-box");
        navigator.clipboard
            .writeText(text.value)
            .then()
            .catch((error) => {
                console.error("Error copying text: ", error);
            });
    };

    let removeExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    let checkTime = () => {
        let words =
            text.trim().split(" ")[0] === ""
                ? 0
                : text.trim().split(" ").length;
        let time = 60 / 125 * words;
        if(time < 60) return Math.ceil(time) + " seconds";
        else{
            if(time % 60 === 0) {
                return time/60 + " min";
            }else{
                return Math.floor(time/60) + " min " + Math.round(time % 60) + " seconds";
            }
        }
    };

    let onChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");
    
    return (
        <>
            <div className={`container bg-${props.mode} `}>
                <div className="mb-3 my-3">
                    <h1>{props.heading}</h1>
                    <textarea
                        style={{
                            fontSize: 20,
                        }}
                        className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}
                        id="my-box"
                        rows="6"
                        value={text}
                        onChange={onChange}
                    ></textarea>
                    <button
                        className="btn btn-primary my-3 mx-1"
                        onClick={upClick}
                    >
                        Convert to Uppercase
                    </button>
                    <button
                        className="btn btn-primary my-3 mx-1"
                        onClick={downClick}
                    >
                        Convert to Lowercase
                    </button>
                    <button
                        className="btn btn-primary my-3 mx-1"
                        onClick={clearText}
                    >
                        Clear text
                    </button>
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={textSpeech}
                        >
                            TextSpeech
                        </button>
                        <ul
                            className="dropdown-menu w-300"
                            id="drop-down-btn"
                        ></ul>
                    </div>
                    <button
                        className="btn btn-primary my-3 mx-1"
                        onClick={copyText}
                    >
                        Copy text
                    </button>
                    <button
                        className="btn btn-primary my-3 mx-1"
                        onClick={removeExtraSpaces}
                    >
                        Remove Extra Spaces
                    </button>
                </div>
            </div>
            <div className={`container  bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2>Your Text Summary</h2>
                <p>{`${
                    text.trim().split(" ")[0] === ""
                        ? 0
                        : text.trim().split(" ").length
                } words, ${
                    text.split("").length
                } characters, ${countConsonents()} consonents and ${countVowel()} vowels`}</p>
                <p>{checkTime()} read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
};

export default TextForm;