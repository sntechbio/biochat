import React from "react";
import "../AppHome.css"

function ButtonAsk({label, href}) {
    return (
        <div>
            <a className="buttonAsk" href={href}>{label}</a>
        </div>
    );
}

export default ButtonAsk;