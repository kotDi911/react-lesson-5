import React, {Component} from "react";
import {DataContext} from "../context/DataContext";

export const withData = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <DataContext.Consumer>
                    {(value) => {
                        return <WrappedComponent data={value}/>  // {...this.state} {...this.props} ??
                    }}
                </DataContext.Consumer>
            )
        }
    }
};