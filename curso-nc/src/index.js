import React from 'react';
import ReactDOM from 'react-dom';


// Componentes 
import Menu from './components/menus/Nav';
import MenuBuscar from './components/menus/Nav-Buscar'
import ComponenteConProps from './components/curso/Props'
import EstadoAlarma from './components/curso/State'


/*
import HolaMundoCruel from "./components/HolaMundo";
import ChaoMundo from "./components/ChaoMundo";
import ComponentesConFunctions from './components/ComponentesConFunctions';
import ComponentesConArrowFunctions from './components/ComponentesConArrowFunctions';
import ComponenteConClases from './components/ComponentesConClases';
*/



ReactDOM.render(
  <React.StrictMode>
   <Menu/>
  <MenuBuscar/>
  <ComponenteConProps/>
  <EstadoAlarma/>

  </React.StrictMode>,
  document.getElementById('root')
);


