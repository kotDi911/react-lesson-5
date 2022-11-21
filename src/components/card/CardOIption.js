import React from "react";

const CardOption = ({img, handleClick}) => {
    return (
        <span
            className="card__option"
            onClick={handleClick}>
            <img src={img} alt=""/>
        </span>
    )
}
export default CardOption