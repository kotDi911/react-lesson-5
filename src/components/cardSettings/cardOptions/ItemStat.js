import React from "react";

const ItemStat = ({date, title, cash}) => {
    return (
        <div className="item">
            <span className="item__date">{date.substring(0,5)}</span>
            <span className="item__title">{title}</span>
            <span className="item__cash">{cash}</span>
        </div>
    )
}

export default ItemStat