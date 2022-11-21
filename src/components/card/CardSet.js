import React, {Component} from "react";
import chip from "../../images/chip.png"
import visa from "../../images/visa.png"
import mastercard from "../../images/Mastercard.png"
import '../../styles/Card.scss';
import btn1 from "../../images/btn1.png";
import btn2 from "../../images/btn2.png";
import btn3 from "../../images/btn3.png";
import {withForm} from "../../HOC/withForm";

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


class CardSet extends Component{
    render() {
        const {number, user, card} = this.props;
        return (
            <div className="card">
                <div className="card__container">
                    <img className="card__chip" src={chip} alt=""/>
                    <span className="card__number">
                    {number && number.match(new RegExp('.{1,4}', 'g')).join(" ")}
                </span>
                    <span className="card__user">
                    {user}
                </span>
                    <img className="card__logo" src={card === "visa" ? visa : mastercard} alt=""/>
                </div>
            </div>
        )
    }
}
export default withForm(CardSet);