import React, {Component} from "react";
import {CardContext} from "../context/CardContext";

export const withCard = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <CardContext.Consumer>
                    {(value) => {
                        return <WrappedComponent {...value} {...this.props}/>  // {...this.state} {...this.props} ??
                    }}
                </CardContext.Consumer>
            )
        }
    }
};