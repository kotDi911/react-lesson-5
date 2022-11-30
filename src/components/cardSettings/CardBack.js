import React from "react";
import visa from "../../images/visa.png";
import mastercard from "../../images/Mastercard.png";

const visaStyle = "linear-gradient(to top, black 25%, orange 30%, red)"

const mcStyle = "linear-gradient(to top, blue 25%, black 30%, white)"

const CardBack = ({cvv, card, date, isFlip}) => {
    return (
        <div style={{background: card === "visa" ? visaStyle : mcStyle}} className={`back-card ${!isFlip ? "" : "active"}`}>
            <div className="card__container">
                <span className="card__magnet"/>
                <span className="card__date">{date.substring(0,5)}</span>
                <span className="card__cvv">{cvv}</span>
                <img className="card__logo--back" src={card === "visa" ? visa : mastercard} alt=""/>
            </div>
        </div>
    )
}
export default CardBack