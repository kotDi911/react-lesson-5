import React, {Component} from "react";
import {Route, Routes} from "react-router";
import Main from "../pages/Main";
import CardDetails from "../components/cardSettings/cardOptions/CardDetails";
import CreateCard from "../pages/CreateCard";
import {CardContext} from "../context/CardContext";
import Header from "../components/Header";
import Details from "../pages/Details";

export default class RouterApp extends Component {
    render() {
        return (
            <CardContext.Consumer>
                {({cards, addCard}) => {
                    return (
                        <>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Main cards={cards}/>}/>
                                <Route path="/create" element={<CreateCard id={cards.length + 1} addCard={addCard}/>}/>
                                <Route path="/details" element={<Details/>}>
                                    <Route path=":cardId" element={<CardDetails/>}/>
                                </Route>
                            </Routes>
                        </>
                    )
                }}
            </CardContext.Consumer>
        )
    }
}