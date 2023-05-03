import React, { useState, useEffect } from "react";
import DropdownItem from "./DropdownItem";

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

    let firstLetterCaps = () => {
        let textArr = text.trim().split(".");
        let newText = "";
        for (let i = 0; i < textArr.length; i++) {
            textArr[i] = textArr[i].trim();
            if (textArr[i] !== "") {
                newText +=
                    textArr[i][0].toUpperCase() + textArr[i].slice(1) + ". ";
            }
        }
        setText(newText.trim());
        if (text === "") {
            props.showAlert("warning", "No text to Capitalize");
        } else {
            props.showAlert("success", "Text Capitalize successfully");
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
    const [voices, setVoices] = useState(
        window.speechSynthesis.getVoices() || []
    );
    useEffect(() => {
        setVoices(window.speechSynthesis.getVoices());
    }, []);

    return (
        <>
            <div className="container mb-2">
                <div
                    className={`text-${
                        props.mode === "light" ? "dark" : "light"
                    }`}
                >
                    <h2 className="mb-4">{props.heading}</h2>
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
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            disabled={text.length === 0 ? true : false}
                        >
                            TextSpeech
                        </button>
                        <ul
                            className="dropdown-menu scrollable-menu w-300"
                            id="drop-down-btn"
                        >
                            {voices.length > 0 && voices.map((ele, i) => {
                                return <DropdownItem key={i} i={i} voices={voices} text={text} />
                            })}
                        </ul>
                    </div>
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
                    <button
                        className="btn btn-primary my-2 mx-1"
                        onClick={firstLetterCaps}
                        disabled={text.length === 0 ? true : false}
                    >
                        Capitalize FIrst Letter
                    </button>
                </div>
            </div>
            <div
                className={`container text-${
                    props.mode === "light" ? "dark" : "light"
                }`}
            >
                <h3>Your Text Summary</h3>
                <p>{`${countWords()} words, ${countCharacters()} characters, ${countConsonents()} consonents and ${countVowel()} vowels`}</p>
                <p>{checkTime()} read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
};

export default TextForm;
