import React from "react";
import PropTypes from "prop-types";

let Navbar = (props) => {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    {props.title}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                {props.home}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                {props.about}
                            </a>
                        </li>
                    </ul>
                    <div
                        className={`form-check form-switch nav-item text-${
                            props.mode === "light" ? "dark" : "light"
                        }`}
                    >
                        <input
                            className="form-check-input my-check"
                            type="checkbox"
                            role="switch"
                            id={`flexSwitchCheck${
                                props.mode === "light" ? "Default" : "Checked"
                            }`}
                            onClick={props.toggleMode}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            Switch Mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    about: PropTypes.string,
};

Navbar.defaultProps = {
    title: "Set title here",
    home: "Home text here",
    about: "About text here",
};

export default Navbar;
