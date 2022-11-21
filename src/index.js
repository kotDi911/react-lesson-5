import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {DataProvider} from "./context/DataContext";
import Header from "./components/mainScreen/Header";
import {BrowserRouter as Router} from "react-router-dom";
import "./styles/Main.scss"
import RouterApp from "./components/router/RouterApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Header/>
          <DataProvider>
              <RouterApp/>
          </DataProvider>
      </Router>
  </React.StrictMode>
);