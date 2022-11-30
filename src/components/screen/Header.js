import React, {useContext} from "react";
import {HeaderContext} from "../../context/HeaderContext";
import {Link} from "react-router-dom";


const Header = () => {
    const {option, toggleBtn} = useContext(HeaderContext)
    const {title, path, img} = option

    return (
        <div className="header">
            <span className="title">{title}</span>
            <Link className="backBtn" to={path} onClick={toggleBtn}>
                <img className="backBtn__img" src={img} alt=""/>
            </Link>
        </div>
    )
}
export default Header