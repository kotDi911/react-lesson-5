import React, {useState} from "react";
import CardFront from "../CardFront";
import OptionsPanel from "./OptionsPanel";
import {setNumber} from "./SetNumber";
import CardBack from "../CardBack";
import CardStats from "./CardStats";

const CardOption = ({numberVisible, number, user, cvv, card, date, stats}) => {
    const [isActive, setIsActive] = useState(false)
    const [isShowNumber, setIsShowNumber] = useState(numberVisible)
    const [isActiveIcon, setIsActiveIcon] = useState(false)
    const [isFlip, setIsFlip] = useState(false)
    const [isStats, setIsStats] = useState(false)

    const showNumber = () => {
        setIsShowNumber(!isShowNumber);
        setIsActiveIcon(!isActiveIcon)
    }

    const cardFlip = () => {
        setIsFlip(!isFlip)
    }

    const cardStats = () => {
        setIsFlip(false)
        setIsStats(!isStats)
    }

    return (
        <div className="card" style={!isStats ? {height: "300px"}: {height: "0"}}>
            <CardFront
                number={setNumber(isShowNumber, number)}
                user={user}
                card={card}
                onClick={() => {
                    setIsStats(false)
                    setIsActive(!isActive)
                }}
                isFlip={isFlip}
                isStats={isStats}
            />
            <CardBack date={date} cvv={cvv} card={card} isFlip={isFlip}/>
            <div className={`card__details ${!isActive ? "" : "active"} ${!isStats ? "" : "stats"}`}>
                {!isStats && <OptionsPanel
                    showNumber={showNumber}
                    cardFlip={cardFlip}
                    cardStats={cardStats}
                    isActiveIcon={isActiveIcon}
                    isStats={isStats}
                />}
                <CardStats stats={stats}/>
            </div>
        </div>
    )
}
export default CardOption