import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";


// pages
import OperacionesMatematicas from "views/2-intermedio/operaciones-matematicas/OperacionesMatematicas";

// Routes
import Rutas from './routes/routes';
import StyleLine from "views/1-basico/style/StyleInLine";
import FuentesGoogle from 'views/1-basico/fuentes-tipograficas/FuentesGoogle';
import FuentesGoogle02 from 'views/1-basico/fuentes-tipograficas/FuentesGoogle02';
import GridAll from "views/componentes-material-ui/grid/GridAll"

ReactDOM.render(
  <React.StrictMode>
    <GridAll />
  </React.StrictMode>,
  document.getElementById('root')
);


