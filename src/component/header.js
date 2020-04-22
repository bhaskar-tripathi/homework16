import React, { useContext } from "react";
import ProfileContext from "./utils/profileData";
import "../styles/PageStyle.css";
import { Link } from "react-router-dom";
// import TableHead from "./tableHead";
// import TableBody from "./tableBody"

function Header() {

    const { profileData } = useContext(ProfileContext);
    return (

        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark custHeader px-md-5 ">
                <Link className="navbar-brand" to="/"><strong>{profileData.name}</strong></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav px-4 mr-auto">
                        <li className="nav-item pr-4">
                            {/* <Link className="nav-link" to="/">Home</Link> */}
                            <Link className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"
                            } to="/">Home</Link>
                        </li>
                        <li className="nav-item pr-4">
                            {/* <Link className="nav-link" to="/projects">Projects</Link> */}
                            <Link className={
                                window.location.pathname === "/projects"
                                    ? "nav-link active"
                                    : "nav-link"
                            } to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item pr-4">
                            {/* <Link className="nav-link" to="/blogs">My Articles</Link> */}
                            <Link className={
                                window.location.pathname === "/blogs" 
                                    ? "nav-link active"
                                    : "nav-link"
                            } to="/blogs">My Articles</Link>
                        </li>
                    </ul>

                    <div className="navbar-text">
                        <div className="d-flex flex-column ml-2">
                            <div className="row "><i className="fas fa-mobile-alt mr-2 mt-1"></i>
                                <a href={'tel:' + profileData.phone}>{profileData.phone}</a></div>
                            <div className="row"><i className="fas fa-envelope-square mr-2 mt-1"></i>
                                <a href={'mailto:' + profileData.email + '?Subject=Portfolio%20Page%20-%20Feedback'} target="_top">{profileData.email}</a></div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>

    )
};

export default Header;