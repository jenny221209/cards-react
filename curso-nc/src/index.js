import React from 'react';
import ReactDOM from 'react-dom';


// Componentes 
import Menu from './components/Nav';
import MenuBuscar from './components/Nav-Buscar'


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

  </React.StrictMode>,
  document.getElementById('root')
);


