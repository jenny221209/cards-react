import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";


// pages
import OperacionesMatematicas from "views/2-intermedio/operaciones-matematicas/OperacionesMatematicas";

// Routes
import Rutas from './routes/routes';

ReactDOM.render(
  <React.StrictMode>
    <Rutas/>
  </React.StrictMode>,
  document.getElementById('root')
);


