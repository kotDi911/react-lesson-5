import React, {Component} from "react";
import {Route, Routes} from "react-router";
import Main from "../screen/Main";
import CardDetails from "../screen/CardDetails";
import Header from "../screen/Header";
import CreateCard from "../screen/CreateCard";
import {HeaderContext, HeaderProvider} from "../../context/HeaderContext";

export default class RouterApp extends Component {
    render() {
        return (
            <>
                <HeaderProvider>
                    <HeaderContext.Consumer>
                        {(value) => {
                            return (
                                <>
                                    <Header/>
                                    <Routes>
                                        <Route path="/" element={<Main {...value}/>}/>
                                        <Route path="/create" element={<CreateCard {...value}/>}/>
                                        <Route path="/details::cardId" element={<CardDetails {...value}/>}/>
                                    </Routes>
                                </>
                            )
                        }}
                    </HeaderContext.Consumer>
                </HeaderProvider>
            </>
        )
    }
}