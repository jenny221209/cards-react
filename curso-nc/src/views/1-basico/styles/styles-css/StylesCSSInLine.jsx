
import { lightGreen } from '@material-ui/core/colors'
import React, { Fragment } from 'react'

/* Styles*/
import './assets/css/styles.css'

const StylesCSSInLine = () => {
    return (
        <Fragment>
        <div style= {{ backgroundColor: 'lightGreen', height: '100px' }}>
            <h3> Styles InLine </h3>
            <button style= {{ color: 'white' }}> Enviar</button>
            <button style= {{
             }}> Cancelar </button>
        </div>
        </Fragment>
    )
}

export default StylesCSSInLine



