
import React, { Fragment } from 'react'

const styles = {
    div: {
        backgroundColor: 'gray'
    },

    buttonCancelar: {
        padding: '8px 15px',
        color: 'white',
        backgroundColor: 'tomato',

    },

    buttonGuardar: {
        padding: '8px 15px',
        color: 'white',
        backgroundColor: 'tomato',
    },
}

const StylesCSSInterno = () => {
    return (
        <Fragment>
            <div style={ styles.div} >
                <h2> Styles Interno </h2>
                <button style={ styles.buttonCancelar}> Cancelar </button>
                <button> Guardar </button>
            </div>
        </Fragment>
    )
}

export default StylesCSSInterno
