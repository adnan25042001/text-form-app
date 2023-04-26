import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

let Navbar = (props) => {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img
                        style={{ width: 34, height: 34 }}
                        src="./favicon.ico"
                        alt="Logo"
                    />
                </Link>
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
                    style={{ fontSize: 18 }}
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">
                                {props.home}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                {props.about}
                            </Link>
                        </li>
                    </ul>
                    <div
                        className={`form-check form-switch nav-item text-${
                            props.mode === "light" ? "dark" : "light"
                        } mx-1`}
                    >
                        <input
                            className="form-check-input my-check"
                            type="checkbox"
                            role="switch"
                            id={`flexSwitchCheck${
                                props.mode === "light" ? "Default" : "Checked"
                            }`}
                            checked={props.mode === "light" ? false : true}
                            readOnly
                            onClick={props.toggleMode}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="flexSwitchCheckDefault"
                        >
                            Theme
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
