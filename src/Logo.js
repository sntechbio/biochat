import React from "react";
import BioChatLogo from './logo.png'

function Logo() {
        return (
                <div className="row" style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>   
                        <img src={BioChatLogo} alt="logo" style={{width: "320px"}}/>
                </div>
        )
}

export default Logo;