import React from 'react';
import ReactDOM from 'react-dom/client';
import {DataProvider} from "./context/DataContext";
import Header from "./components/mainScreen/Header";
import {BrowserRouter as Router} from "react-router-dom";
import RouterApp from "./components/router/RouterApp";
import './styles/index.scss';

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