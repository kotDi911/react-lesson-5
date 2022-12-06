import React, {useEffect, useState} from "react";

export const CardContext = React.createContext();

export const CardProvider = (props) => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/cards.json?key=ecd12d20")
            .then((res) => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw new Error("Problem with server")
                    }
                }
            )
            .then((res) => setCard(res))
            .catch(err => console.log(err.message))
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