import React, {useEffect, useState} from "react";
import add from "../images/add.png";
import back from "../images/back.png";

export const HeaderContext = React.createContext();

const options = [
    {
        title: "Your card",
        path: "/create",
        img: add,
    },
    {
        title: "Create card",
        path: "/",
        img: back,
    },
    {
        title: "Card details",
        path: "/",
        img: back,
    }
]

export const HeaderProvider = (props) => {
    const [headerOptions, setHeaderOptions] = useState({});
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setHeaderOptions(options[0])
    }, [])

    const toggleBtn = () => {
        setToggle(!toggle)

        if (toggle) {
            setHeaderOptions(options[0])
        }else {
            setHeaderOptions(options[1])
        }
    }

    const backBtn = () => {
        setToggle(!toggle)
        setHeaderOptions(options[2])
    }

    const setContent = (path) => {
        switch (path) {
            case "/":
                setHeaderOptions(options[0]);
                setToggle(false);
                break;
            case "/create":
                setHeaderOptions(options[1]);
                setToggle(true);
                break;
            case "/details":
                setHeaderOptions(options[2]);
                setToggle(true);
                break;
            default:
                break;
        }
    }

    return (
        <HeaderContext.Provider value={{
            option: headerOptions,
            toggleBtn,
            backBtn,
            setContent
        }}>
            {props.children}
        </HeaderContext.Provider>
    )
};