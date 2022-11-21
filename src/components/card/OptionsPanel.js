import React from "react";
import CardOption from "./CardOIption";
import btn1 from "../../images/btn1.png";
import btn2 from "../../images/btn2.png";
import btn3 from "../../images/btn3.png";

const buttons = [
    {
        img: btn1,
        id: 1
    },
    {
        img: btn2,
        id: 2
    },
    {
        img: btn3,
        id: 3
    }
]

const OptionsPanel = ({handleOptions}) => {
    console.log(handleOptions)
    return (
        <div className="card__details">
            <div className="card__options">
                {buttons.map((option, index) => (
                    <CardOption key={option.id} img={option.img} handleClick={handleOptions[index]}/>
                ))}
                {/*<span*/}
                {/*    className="card__option"*/}
                {/*    onClick={showNumber}>*/}
                {/*    <img src={btn1} alt=""/>*/}
                {/*</span>*/}
                {/*<span*/}
                {/*    className="card__option"*/}
                {/*    onClick={showStats}>*/}
                {/*    <img src={btn2} alt=""/>*/}
                {/*</span>*/}
                {/*<span*/}
                {/*    className="card__option"*/}
                {/*    onClick={flipCard}>*/}
                {/*    <img src={btn3} alt=""/>*/}
                {/*</span>*/}
            </div>
        </div>
    )
}

export default OptionsPanel