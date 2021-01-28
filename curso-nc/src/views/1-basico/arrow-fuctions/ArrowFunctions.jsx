
// FUNCION FLECHA
// Arrow Function = Funcion flecha 

// Es una forma nueva de hacer componentes  y salio en la version  ES6 - Ecma Script 2015

import React, { Fragment } from "react";

// SINTAXIS
// Abreviacion : rafce, rafc, rafcp

// Arroow function con return 
// Arrow funtion declarada para almacenar un componente de react
const ComponenteArrowFunctions01 = () => {
    return (
        <Fragment>
            <h2> Este es un componente Arrow Funtions </h2>
            <button> Mi Boton </button>
        </Fragment>

    );
}


//Arrow function sin return
const ComponenteArrowFunctions02 = () => {

    var numero1 = 5;
    var numero2 = 10;
    var suma

    suma = numero1 + numero2;

    console.log(suma);

}

// Arrow function sin return y los elementos en un contenedor fragment
const ComponenteArrowFunctions03 = () =>
    <Fragment>
        <h2> Este es un componente Arrow Funtions </h2>
        <h2> Otra Etiqueta </h2>
    </Fragment>


// Arrow function en una sola lines
const ComponenteArrowFunctions04 = () => <h2> Este es un componente Arrow Functions </h2>



export default { ComponenteArrowFunctions01, ComponenteArrowFunctions02, ComponenteArrowFunctions03, ComponenteArrowFunctions04 };




