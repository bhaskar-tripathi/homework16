import React, { useContext } from "react";
import ProfileContext from "./utils/profileData";
import "../styles/PageStyle.css";

function Footer() {

    const { profileData } = useContext(ProfileContext);
    return (
        <footer className="custFooter">
            <nav className=" text-center ">
                <div className="col-md-12 py-3 ">
                    <div className=" flex-center">
                        <a className="li-ic" href={profileData.linkedIn} target="_blank" rel="noopener">
                            <i className="fab fa-linkedin-in fa-lg  mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                        <a className="li-ic" href={profileData.github} target="_blank" rel="noopener">
                            <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                        </a>
                    </div>
                </div>
            </nav>

        </footer>


    )
};

export default Footer;