import React from "react";
import '../../../styles/Card.scss';
import CardFront from "../CardFront";
import {setNumber} from "./SetNumber";

const MenuCard = ({number, numberVisible, card, user}) => {
    return (
        <div className="card">
            <CardFront number={setNumber(numberVisible, number)} card={card} user={user}/>
        </div>
    )
}

export default MenuCard