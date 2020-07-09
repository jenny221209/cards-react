import React, { Fragment, Component } from "react"

class StateSintaxisBasica extends Component {

    state= {
        nombre: "jenny",
        edad: 27
    }

    render() {
        return(
            <Fragment>
                <h2> { this.state.nombre } </h2>
                <h2> { this.state.edad} </h2>
            </Fragment>
        );
    }
}
export default StateSintaxisBasica;
    
   