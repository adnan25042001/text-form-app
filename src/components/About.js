import React from "react";

export default function About(props) {
    return (
        <>
            <div
                className="accordion my-2 mb-2"
                id="accordionPanelsStayOpenExample"
            >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button bg-${
                                props.mode
                            } text-${
                                props.mode === "light" ? "dark" : "light"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            Text Utils
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                    >
                        <div
                            className={`accordion-body bg-${
                                props.mode === "light" ? "light" : "secondary"
                            } text-${
                                props.mode === "light" ? "dark" : "light"
                            }`}
                        >
                            <strong>Text Utils</strong> is a word counter,
                            character counter, consonent counter and vowel
                            counter utility which can be used to manipulate your
                            text in the way you want. You can remove extra
                            spaces, copy the manipulated text as well as convert
                            your text from Uppercase to lowercase and Lowercase
                            to uppercase.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed bg-${
                                props.mode
                            } text-${
                                props.mode === "light" ? "dark" : "light"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            Search Engine Optimization
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                    >
                        <div
                            className={`accordion-body bg-${
                                props.mode === "light" ? "light" : "secondary"
                            } text-${
                                props.mode === "light" ? "dark" : "light"
                            }`}
                        >
                            <strong>Search Engine Optimization</strong> is no
                            longer about stuffing keywords and attempting to
                            trick Google into ranking your website. It' s about
                            creating a user experience that is data driven. We
                            know what customers are searching for and we know
                            how to get them to a page. It' s a combination of
                            science and art to successfully rank a website. A
                            successful website does three things: It attracts
                            the right kinds of visitors. Guides them to the main
                            services or product you offer. Collect Contact
                            details for future ongoing relation
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button collapsed bg-${
                                props.mode
                            } text-${
                                props.mode === "light" ? "dark" : "light"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            Quality
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                    >
                        <div
                            className={`accordion-body bg-${
                                props.mode === "light" ? "light" : "secondary"
                            } text-${
                                props.mode === "light" ? "dark" : "light"
                            }`}
                        >
                            Getting a quality website is not an expenses but
                            rather an investment. Most common method for
                            designing websites that work well on desktop is
                            responsive and adaptive design.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
