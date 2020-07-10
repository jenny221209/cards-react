import React, { Component, Fragmen } from "react";
import { Fragment } from "react";

class EventoCambiarProductoPrecio extends Component {

    state = {
        producto1: "Camisa Nacional",
        precio1: 50
    }

    render() {
        const cambiarprecio = () => {
          
            this.setState({ producto1: this.state.producto1 = "Camisa Importada" })
            this.setState({ precio1: this.state.precio1 = 80 })
        }
        return(
            <Fragment>
                <h2> cambiarprecio: </h2>
                <h2> { this.state.producto1 } </h2>
                <h2> { this.state.precio1 } </h2>
                <button onClick={ cambiarprecio } > Aumentar Precio </button>

            </Fragment>
        );
    }
}

export default EventoCambiarProductoPrecio;