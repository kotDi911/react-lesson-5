import {Link} from "react-router-dom";
import React from "react";

const HeaderContent = ({title, path, img, handleClick}) => {
    return(
        <>
            <span className="title">{title}</span>
            <Link className="toggleBtn" to={path} onClick={handleClick}>
                <img className="toggleBtn__img" src={img} alt=""/>
            </Link>
        </>
    )
}
export default HeaderContent