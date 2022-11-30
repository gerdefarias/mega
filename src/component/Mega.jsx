import React, { useState } from "react";
import gerarNum from "./GeradorMega";

export default props => {

    let numeros = []

    numeros = gerarNum(6)
    numeros.sort();

    const [numerosArray, setNumeros] = useState(6)

    return(
        <div>
            <ol className="numbers">
                {numeros.map((i, index) => {
                    return (
                        <li key={index} className="number">{i.valueOf()}</li>
                    )
                })}
            </ol>
            <div>
                {numeros.join(" ")}
            </div>
            <div className="cont-btn">
                <button className="btn" onClick={_ => setNumeros(gerarNum(6))}>Gerar Surpresinha</button>
            </div>
        </div>

    )
}