import React, { useContext } from "react";
import ProfileContext from "../component/utils/profileData";
import "../styles/PageStyle.css";
import ContentSection from "./contentSection";
import ProjectCard from "./projectCard"
import project1 from "../assets/img/project1.png"

function Projects() {
    const { profileData } = useContext(ProfileContext);
    return (
        <ContentSection>
            <div className="row mx-auto">
                {profileData.projects !== undefined
                    ? (profileData.projects.length > 0
                        ? profileData.projects.map(project => (
                            <ProjectCard project={project}></ProjectCard>
                        ))
                        : ""
                    )
                    : ""
                }
            </div>
        </ContentSection>
    )

}

export default Projects;