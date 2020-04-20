import React, { useState, useEffect } from "react";
import "../styles/PageStyle.css";

function ProjectCard(props) {

    return (
            <div className="card my-4 mx-auto">
                <img src={require("../assets/img/" + props.project.id + ".png")} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.project.name}</h5>
                    <div className="scroll-bar-wrap">
                        <div className="scroll-box">
                            <p className="card-text descStyle scrollbox">{props.project.description}
                            </p>
                            <div className="cover-bar"></div>
                        </div>
                    </div>

                    
                    <a href={props.project.url} className="card-link" target="_blank" rel="noopener">Go to {props.project.name}</a>
                </div>
            </div>
    )
}

export default ProjectCard;