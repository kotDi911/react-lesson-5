import React, {Component} from "react";
import Card from "../card/Card";
import {withData} from "../../HOC/withData";

class Main extends Component {

    render() {
        const {data} = this.props;
        return (
            <div className="cards">
                {data.map((prop)=> <Card key={prop.id} {...prop}/>)}
            </div>
        )
    }
}

export default withData(Main)