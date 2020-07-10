import React, { Component, Fragment } from "react";
import Button from '@material-ui/core/Button';

class FormSuma extends Component {
    state = {
        numero1: 0,
        numero2: 0,
        resultado: 0

    }
    render() {
        return(
            <Fragment>
                <h2> Formulario Suma </h2>
                <Button variant="contained" color="primary" href="#contained-buttons">
                   Numero1
                </Button>
                <br /> <br />
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Numero2
                </Button>
                <h2> 0 </h2>
                <button> Sumar </button>
            </Fragment>

        );
    }
}

export default FormSuma;