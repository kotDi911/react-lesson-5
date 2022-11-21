import React, {Component} from "react";
import {Route, Routes} from "react-router";
import Main from "../mainScreen/Main";
import CardSet from "../card/CardSet";

export default class RouterApp extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/create" element={<CardSet/>}/>
                    {/*<Route path="/task2" element={<ContactsList/>}/>*/}
                    {/*<Route path="/task3" element={<Task3/>}/>*/}
                </Routes>
            </>
        )
    }
}