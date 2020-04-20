import React from "react";
import "../styles/PageStyle.css"

function contentSection(props) {
    return (
        <div className="row">
            <div className="col-md-8 mx-auto mt-3">
                {props.children}
            </div>
        </div>


    );
}

export default contentSection;