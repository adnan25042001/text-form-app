import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

let Navbar = (props) => {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}
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
                        className={`nav-item text-${
                            props.mode === "light" ? "dark" : "light"
                        }`}
                    >
                        <img
                            src={props.mode === "light" ? "./moon.png" : "./sun.png"}
                            alt=""
                            height="26px"
                            width="26px"
                            id="theme-btn"
                            className="mx-2"
                            onClick={props.toggleMode}
                            style={{margin:"0", padding:"0"}}
                        />
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
