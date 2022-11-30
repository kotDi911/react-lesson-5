import React, {Component} from "react";
import {withCard} from "../../HOC/withCard";
import {Link} from "react-router-dom";
import MenuCard from "../cardSettings/cardOptions/MenuCard";

class Main extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {setContent} = this.props
        setContent("/")
    }

    render() {
        const {cards, backBtn} = this.props;
        return cards.length === 0 ?
            <></>
            :
            <div className="cards">
                {cards.map((prop) =>
                    <Link key={prop.id} className="toggleBtn" to={`/details:${prop.id}`} onClick={backBtn}>
                        <MenuCard {...prop}/>
                    </Link>)}
            </div>
    }
}

export default withCard(Main)