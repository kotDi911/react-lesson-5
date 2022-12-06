import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import RouterApp from "./router/RouterApp";
import './styles/index.scss';
import {CardProvider} from "./context/CardContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <CardProvider>
              <RouterApp/>
          </CardProvider>
      </Router>
  </React.StrictMode>
);