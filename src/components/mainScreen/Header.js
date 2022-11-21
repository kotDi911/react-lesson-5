import React, {useState} from "react";
import HeaderContent from "./HeaderContent";
import add from "../../images/add.png";
import back from "../../images/back.png";

const data =[
    {
        title: "Your card",
        path: "/create",
        img: add,
    },
    {
        title: "Create card",
        path: "/",
        img: back,
    }
]

const Header = () => {
    const [toggleBtn, setToggleBtn] = useState(true)
    const toggle = () => {
        setToggleBtn(!toggleBtn)
    }
    return (
        <div className="header">
            <HeaderContent {...toggleBtn ? data[0] : data[1]} handleClick={toggle}/>
        </div>
    )
}
export default Header