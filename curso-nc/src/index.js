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
 import MainProps from "views/1-basico/props/MainProps";
 import Props from "views/1-basico/props/Props"
 import MainProps2 from "views/1-basico/props/MainProps2"
import ModProps from "views/1-basico/props/ModPropsMismoArchivo"
import ModPropsMismoArchivoStyle from "views/1-basico/props/ModPropsMismoArchioStyles"
import StateSintaxis1 from "views/1-basico/states/StateSintaxisBasica"
import StateSintaxisConstructor from "views/1-basico/states/StateSintaxisConstructor"

ReactDOM.render(
  <React.StrictMode>
    < StateSintaxisConstructor /> 
  </React.StrictMode>,
  document.getElementById('root')
);


