import React, { Component, Fragment} from "react";

class EventosEnClases extends Component {


    render () {
        
    const reaccion = () => {
        window.alert( "Me encanta")
    }
        return(
            <Fragment>
                <button onClick={ reaccion }> Me encanta </button>
            </Fragment>
        );
    }
}

export default EventosEnClases;