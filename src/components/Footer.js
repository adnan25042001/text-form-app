import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
    return (
        <div className="container mt-auto">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className={`col-md-4 mb-0 text-${props.mode === "light" ? "dark" : "light"}`}>
                    © 2023 TextUtils, Inc
                </p>

                <Link
                    to="/"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                    <img
                        className="bi me-2"
                        width="36"
                        height="36"
                        src="favicon.ico"
                        alt=""
                    />
                </Link>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item">
                        <Link to="/home" className={`nav-link px-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className={`nav-link px-2 text-${props.mode === "light" ? "dark" : "light"}`}>
                            About
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
