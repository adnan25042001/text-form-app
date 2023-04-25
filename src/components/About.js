import React, {useState} from "react";

export default function About(props) {
    let [btnText, setBtnText] = useState("Dark Mode");
    let [theme, setTheme] = useState({
        backgroundColor: "white",
        color: "black",
    });
    let toggletheme = () => {
        if (btnText === "Dark Mode") {
            document.querySelector("body").style.background = "rgb(45, 45, 45)";
            setBtnText("Light Mode");
            setTheme({
                backgroundColor: "rgb(30, 30, 30)",
                color: "white",
            });
        } else {
            document.querySelector("body").style.background = "white";
            setBtnText("Dark Mode");
            setTheme({
                backgroundColor: "white",
                color: "black",
            });
        }
    };
    return (
        <>
            <div
                className="accordion my-5"
                id="accordionPanelsStayOpenExample"
                style={theme}
            >
                <div className="accordion-item" style={theme}>
                    <h2 className="accordion-header">
                        <button
                            style={theme}
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                    >
                        <div className="accordion-body">
                            <strong>
                                This is the first item's accordion body.
                            </strong>{" "}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={theme}>
                    <h2 className="accordion-header">
                        <button
                            style={theme}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body">
                            <strong>
                                This is the second item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={theme}>
                    <h2 className="accordion-header">
                        <button
                            style={theme}
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body">
                            <strong>
                                This is the third item's accordion body.
                            </strong>{" "}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button
                    type="button"
                    className="btn btn-primary my-3"
                    onClick={toggletheme}
                >
                    {btnText}
                </button>
            </div>
        </>
    );
}