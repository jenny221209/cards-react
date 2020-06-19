import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

// Rutas

import Pagina2 from './views/1.basico/pages/pagina2';



/*
import HolaMundoCruel from "./components/HolaMundo";
import ChaoMundo from "./components/ChaoMundo";
import ComponentesConFunctions from './components/ComponentesConFunctions';
import ComponentesConArrowFunctions from './components/ComponentesConArrowFunctions';
import ComponenteConClases from './components/ComponentesConClases';
*/



ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Switch>
        <Route path='/pagina2' component={Pagina2} />
        <Route />
        <Route />
      </Switch>
    </Router>


  </React.StrictMode>,
  document.getElementById('root')
);


