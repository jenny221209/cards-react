import React, { Fragment } from "react";

function Eventos (){

    const MiprimerEvento = () => {
        window.alert( "Este es mi primer evento lanzado")
    }

 return(
        <Fragment>
            <button onClick={ MiprimerEvento }> Lanzador del evento </button>
        </Fragment>

    );

}
export default Eventos;