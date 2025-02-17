import React from "react";
import Background from "./my_face.jpg"

function Footer() {
    return (
        <div className="background-image">
            <img src={Background} className="background-image" alt="Background" />
            <div className="background-bar-top"></div>
        </div>
    )
}

export default Footer
