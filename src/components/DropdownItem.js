import React from "react";

const DropdownItem = (props) => {
    // converts the text into speech
    let speechText = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.voice = props.voices[props.i];
        msg.text = props.text;
        window.speechSynthesis.speak(msg);
    };
    return (
        <>
            <li>
                <a
                    className="dropdown-item"
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        speechText();
                    }}
                >
                    {props.voices[props.i].name}
                </a>
            </li>
        </>
    );
};

export default DropdownItem;
