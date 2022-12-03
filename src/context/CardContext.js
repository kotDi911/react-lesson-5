import React, {useEffect, useState} from "react";

export const CardContext = React.createContext();

export const CardProvider = (props) => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/cards.json?key=ecd12d20").then((res) => res.json()).then(res=> setCard(res))
        // setCard(data)
    }, [])

    const addCard = (card) => {
        setCard((prevState) => [...prevState, card])
    }

    return (
        <CardContext.Provider value={{
            cards: card,
            addCard,
        }}>
            {props.children}
        </CardContext.Provider>
    )
};