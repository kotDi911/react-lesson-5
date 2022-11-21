import React, {Component, useEffect, useState} from "react";
import chip from "../../images/chip.png"
import visa from "../../images/visa.png"
import mastercard from "../../images/Mastercard.png"
import '../../styles/Card.scss';
import {withData} from "../../HOC/withData";
import OptionsPanel from "./OptionsPanel";
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


const Card = ({number, numberVisible, user, card}) => {
    // const [isVisible, setIsVisible] = useState(numberVisible);
    // // const [state, setState] = useState();
    // const [showNumber, setShowNumber] = useState(false);
    // const character = "**** **** **** ";

    // useEffect(()=>{
    //     setState([
    //         {
    //             img: btn1,
    //             id: 1,
    //             onClick: ShowNumber
    //         },
    //         {
    //             img: btn2,
    //             id: 2,
    //             onClick: ShowStats
    //         },
    //         {
    //             img: btn3,
    //             id: 3,
    //             onClick: FlipCard
    //         }
    //     ])
    // }, [])
    // const SetVisibleOptionsPanel = () => {
    //     setIsVisible(!isVisible);
    // }
    //
    // const ShowNumber = () => {
    //     setShowNumber(!showNumber)
    // }
    // const ShowStats = () => {
    //     setShowNumber(!showNumber)
    // }
    // const FlipCard = () => {
    //     setShowNumber(!showNumber)
    // }

    return (
        <div className="card">
            <div className="card__container"> {/*onClick={SetVisibleOptionsPanel}*/}
                <img className="card__chip" src={chip} alt=""/>
                <span className="card__number">
                    {number.match(new RegExp('.{1,4}', 'g')).join(" ")}
                    {/*{!showNumber ? character + number.substring(number.length - 4) : number}*/}
                </span>
                <span className="card__user">
                    {user}
                </span>
                <img className="card__logo" src={card === "visa" ? visa : mastercard} alt=""/>
            </div>
            {/*{isVisible && <OptionsPanel handleOptions={[ShowNumber, ShowStats, FlipCard]}/>}*/}
            {/*showNumber={ShowNumber} showStats={ShowStats} flipCard={FlipCard}*/}
        </div>
    )
}

// class CardSettings extends Component {
//
//     render() {
//         return <Card {...this.props}/>
//     }
// }

export default Card;
