import React, {useContext, useEffect} from "react";
import {Outlet, useParams} from "react-router";
import {CardContext} from "../../context/CardContext";
import CardOption from "../cardSettings/cardOptions/CardOption";

const CardDetails = (props) => {
    const {cardId} = useParams()
    const {cards} = useContext(CardContext)

    useEffect(() => {
        const {setContent} = props
        setContent("/details")
    }, [props])

    const renderCard = () => {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id === Number(cardId)) {
                return (<CardOption{...cards[i]}/>)
            }
        }
    }

    return (
        <div className="details">
            {renderCard()}
            <Outlet/>
        </div>
    )
}

export default CardDetails