import React from "react";
import "./paginaResposta.css"
import ButtonAsk from "../components";

function PaginaResposta() {
    return (
        <div className="container-resposta">
            <div className="response-box">
                <div className="header-box-response">
                    <h3>answers</h3>
                </div>
                <div className="box-output">
                    Texto
                </div>
                <ButtonAsk label={"back"} href={"/"}/>
            </div>
        </div>
    );
}

export default PaginaResposta;