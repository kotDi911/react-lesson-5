import React from "react";
import ItemStat from "./ItemStat";

const CardStats = ({stats}) => {

    return (
        <div className="items">
            {stats && stats.map(item => <ItemStat key={item.id} {...item}/>)}
        </div>
    )
}

export default CardStats