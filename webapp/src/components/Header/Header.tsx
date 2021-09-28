import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger py-3 px-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col">
                        <Link className="navbar-brand" to="/">
                            <i className="fas fa-film fa-3x"></i>
                        </Link>
                    </div>
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <i className="fas fa-user fa-2x nav-link active"></i>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
