import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import add from "../images/add.png";
import back from "../images/back.png";

const Header = () => {
    const [title, setTitle] = useState();
    const [img, setImg] = useState();
    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        switch (pathname) {
            case "/":
                setTitle("Your Cards")
                setImg(add)
                break;
            case "/create":
                setTitle("Create Card")
                setImg(back)
                break;
            default:
                setTitle("Details Card")
                setImg(back)
                break;
        }
    }, [pathname])

    const backBtn = () => {
        if (pathname !== "/") {
            navigate("/")
            setTitle("Your Cards")
        } else {
            navigate("/create")
        }
    }
    return (
        <div className="header">
            <span className="title">{title}</span>
            <span className="backBtn" onClick={backBtn}>
                <img className="backBtn__img" src={img} alt=""/>
            </span>
        </div>
    )
}
export default Header