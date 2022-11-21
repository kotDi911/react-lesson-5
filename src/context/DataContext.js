import React, {useEffect, useState} from "react";
import {data} from "../HOC/withForm";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
    const [state, setState] = useState(null);

    useEffect(()=>{
        setState(data)
    })

    return (
        <DataContext.Provider value={state}>
            {props.children}
        </DataContext.Provider>
    )
};