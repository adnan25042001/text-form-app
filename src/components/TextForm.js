import React, { useState } from "react";

let TextForm = (props) => {
    // it converts the text into uppercase
    let upClick = () => {
        if (text === "") {
            props.showAlert("warning", "No text available");
        } else if (text === text.toUpperCase()) {
            props.showAlert("success", "Text already in uppercase");
        } else {
            props.showAlert("success", "Text converted to uppercase");
        }
        setText(text.toUpperCase());
    };

    // it converts the text into lowercase
    let downClick = () => {
        if (text === "") {
            props.showAlert("warning", "No text available");
        } else if (text === text.toLowerCase()) {
            props.showAlert("success", "Text already in lowercase");
        } else {
            props.showAlert("success", "Text converted to lowercase");
        }
        setText(text.toLowerCase());
    };

    // clears the text
    let clearText = () => {
        if (text === "") {
            props.showAlert("success", "Text already cleared");
        } else {
            props.showAlert("success", "Text cleared");
        }
        setText("");
    };

    // converts the text into speech
    // let textSpeech = (ele) => {
    //     ele.preventDefault();
    //     let msg = new SpeechSynthesisUtterance();
    //     let voices = window.speechSynthesis.getVoices();
    //     let dropDown = document.getElementById("drop-down-btn");
    //     for (let i = 0; i < voices.length; i++) {
    //         let list = document.createElement("li");
    //         let a = document.createElement("a");
    //         a.innerText = voices[i].name;
    //         a.href = "/";
    //         a.setAttribute("class", "dropdown-item");
    //         a.addEventListener("click", () => {
    //             msg.voice = voices[i];
    //             msg.text = text;
    //             window.speechSynthesis.speak(msg);
    //         });
    //         list.append(a);
    //         if (i !== 0) {
    //             let hr = document.createElement("hr");
    //             dropDown.append(hr);
    //         }
    //         dropDown.append(list);
    //     }
    // };

    // it counts the numbers of vowels in the text
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

    // it counts the numbers of consonents in the text
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

    // to copy the text
    let copyText = () => {
        navigator.clipboard
            .writeText(text)
            .then()
            .catch((error) => {
                console.error("Error copying text: ", error);
            });

        if (text === "") {
            props.showAlert("warning", "No text to copy");
        } else {
            props.showAlert("success", "Text copied successfully");
        }
    };

    // removes the extra spaces
    let removeExtraSpaces = () => {
        //splits the text into array with no spaces
        let newTextArr = text.split(/[ ]+/);

        let newText = newTextArr.join(" ");

        if (text === newText) {
            props.showAlert("warning", "No extra Spaces");
        } else {
            props.showAlert("success", "Extra Spaces has been removed");
        }

        // joins the array with single space
        setText(newText);
    };

    // checks the average time to read the whole text
    let checkTime = () => {
        // split the text into an array
        let textArr = text.trim().split("\n").join(" ").split(/[ ]+/);

        // count the number of words
        let words = textArr[0] === "" ? 0 : textArr.length;

        // average time in seconds
        let time = (60 / 125) * words;
        if (time < 60) return Math.ceil(time) + " seconds";
        else {
            if (time % 60 === 0) {
                return time / 60 + " min";
            } else {
                return (
                    Math.floor(time / 60) +
                    " min " +
                    Math.round(time % 60) +
                    " seconds"
                );
            }
        }
    };

    let countWords = () => {
        let textArr = text.trim().split(/\s+/);
        if (textArr[0] === "") return 0;
        return textArr.length;
    };

    let countCharacters = () => {
        let count = 0;
        for (let i = 0; i < text.length; i++) {
            if (text[i] !== " " && text[i] !== "\n") count++;
        }
        return count;
    };

    let onChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState("");

    return (
        <>
            <div className="container mb-2">
                <div
                    className={`text-${
                        props.mode === "light" ? "dark" : "light"
                    }`}
                >
                    <h1 className="mb-4">{props.heading}</h1>
                    <textarea
                        style={{
                            fontSize: 20,
                        }}
                        className={`form-control bg-${props.mode} text-${
                            props.mode === "light" ? "dark" : "light"
                        }`}
                        id="my-box"
                        rows="6"
                        value={text}
                        onChange={onChange}
                    ></textarea>
                    <button
                        className="btn btn-primary my-2 mx-1"
                        onClick={upClick}
                        disabled={text.length === 0 ? true : false}
                    >
                        Convert to Uppercase
                    </button>
                    <button
                        className="btn btn-primary my-2 mx-1"
                        onClick={downClick}
                        disabled={text.length === 0 ? true : false}
                    >
                        Convert to Lowercase
                    </button>
                    <button
                        className="btn btn-primary my-2 mx-1"
                        onClick={clearText}
                        disabled={text.length === 0 ? true : false}
                    >
                        Clear text
                    </button>
                    {/* <div className="btn-group">
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
                    </div> */}
                    <button
                        className="btn btn-primary my-2 mx-1"
                        onClick={copyText}
                        disabled={text.length === 0 ? true : false}
                    >
                        Copy text
                    </button>
                    <button
                        className="btn btn-primary my-2 mx-1"
                        onClick={removeExtraSpaces}
                        disabled={text.length === 0 ? true : false}
                    >
                        Remove Extra Spaces
                    </button>
                </div>
            </div>
            <div
                className={`container text-${
                    props.mode === "light" ? "dark" : "light"
                }`}
            >
                <h2>Your Text Summary</h2>
                <p>{`${countWords()} words, ${countCharacters()} characters, ${countConsonents()} consonents and ${countVowel()} vowels`}</p>
                <p>{checkTime()} read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
};

export default TextForm;
