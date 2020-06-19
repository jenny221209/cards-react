import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";

// Rutas
import Pagina2 from './views/1.basico/pages/pagina2';
import Pagina3 from './views/1.basico/pages/pagina3';
import PaginaInicio from './views/1.basico/pages/PaginaInicio';



/*
import HolaMundoCruel from "./components/HolaMundo";
import ChaoMundo from "./components/ChaoMundo";
import ComponentesConFunctions from './components/ComponentesConFunctions';
import ComponentesConArrowFunctions from './components/ComponentesConArrowFunctions';
import ComponenteConClases from './components/ComponentesConClases';
*/

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>

    <Router history={hist}>
      <Switch>
        <Route  path='/pagina2' component={Pagina2} />
        <Route  path='/pagina3' component={Pagina3} />
        <Route  path='/' component={PaginaInicio} />
        <Route />
        <Route />
      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);


