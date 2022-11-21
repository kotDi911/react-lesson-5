import React from "react";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
    const data = [
        {
            number: "0000000000000001",
            numberVisible: false,
            user: "User Name",
            id: 11,
            card: "visa"
        },
        {
            number: "0000000000000002",
            numberVisible: false,
            user: "John Doe",
            id: 21,
            card: "mastercard"
        },
    ]

    return (
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
};