import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";


// pages
import OperacionesMatematicas from "views/2-intermedio/operaciones-matematicas/OperacionesMatematicas";

// Routes
import FormSuma from "views/2-intermedio/forms-state/FormSuma";

ReactDOM.render(
  <React.StrictMode>
    < FormSuma /> 
  </React.StrictMode>,
  document.getElementById('root')
);


