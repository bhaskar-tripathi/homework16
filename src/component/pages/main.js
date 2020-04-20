import React, { useContext } from "react";
import ProfileContext from "../utils/profileData";
import ContentSection from "../contentSection";
import profimage from "../../assets/img/profimg1.png"
import "../../styles/PageStyle.css"
import { Link } from "react-router-dom";

function MainPage() {
    const { profileData } = useContext(ProfileContext);
    return (
        <ContentSection>
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-3">
                        <img className="img-fluid rounded float-left" src={profimage} alt="profile"></img>
                    </div>
                    <div className="col-md-8 d-flex flex-row ">
                        <div className="align-self-end">
                            <h1 className="display-4 ">{profileData.tagline}</h1>
                            <p className="lead ">{profileData.summary}</p>
                        </div>
                    </div>
                </div>

                <hr className="my-4" />
                {(profileData.background) !== undefined ? (
                    Object.values(profileData.background).length > 0 ? Object.values(profileData.background).map(item => (
                        <p>{item}</p>
                    )) : ""
                ): ""}
                <p></p>
                <Link className="btn btn-primary btn-lg mt-2" to="/projects" role="button">See My Projects</Link>
            </div>
        </ContentSection>


    );
}

export default MainPage;
