import React from "react";
import btn1 from "../../../images/btn1.png";
import btn1h from "../../../images/btn1h.png";
import btn2 from "../../../images/btn2.png";
import btn3 from "../../../images/btn3.png";
import Button from "../Button";
import CardStats from "./CardStats";

const OptionsPanel = ({showNumber, cardFlip, cardStats, isActiveIcon, isStats}) => {
    const buttons = [
        {
            img: isActiveIcon ? btn1: btn1h,
            id: 1,
            handleClick: showNumber
        },
        {
            img: btn2,
            id: 2,
            handleClick: cardStats
        },
        {
            img: btn3,
            id: 3,
            handleClick: cardFlip
        }
    ]
    return (
            <div className="card__options">
                {buttons.map((option) => (
                    <Button key={option.id} img={option.img} onClick={option.handleClick}/>
                ))}
            </div>
    )
}

export default OptionsPanel