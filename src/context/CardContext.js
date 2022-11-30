import React, {useEffect, useState} from "react";

export const CardContext = React.createContext();

/*const data = [
    {
        "id": 1,
        "numberVisible": false,
        "number": "5146192085292117",
        "cvv": 429,
        "user": "Lilias Howbrook",
        "card": "mastercard",
        "date": "05/30/2022",
        "stats": [
            {
                id: 1,
                date: "25/10/2022",
                title: "Statistic",
                cash: 1522
            },
            {
                id: 2,
                date: "25/10/2022",
                title: "Statistic",
                cash: 925
            }
        ]
    }, {
        "id": 2,
        "numberVisible": false,
        "number": "5100177328294552",
        "cvv": 509,
        "user": "Jessy Domek",
        "card": "mastercard",
        "date": "08/24/2022"
    }, {
        "id": 3,
        "numberVisible": false,
        "number": "4118155536473",
        "cvv": 462,
        "user": "Karia Youens",
        "card": "visa",
        "date": "11/18/2022"
    }, {
        "id": 4,
        "numberVisible": false,
        "number": "5389070792032404",
        "cvv": 275,
        "user": "Pennie Perton",
        "card": "mastercard",
        "date": "05/03/2021"
    }, {
        "id": 5,
        "numberVisible": false,
        "number": "4041594525024",
        "cvv": 725,
        "user": "Ronny Aubrun",
        "card": "visa",
        "date": "10/19/2022"
    }]*/

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