import React from "react";

const Button = ({img, onClick}) => {
  return(
          <span className="card__option" onClick={onClick}>
              <img className="btn-icon" src={img} alt=""/>
          </span>
  )
}

export default Button