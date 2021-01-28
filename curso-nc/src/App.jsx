import React from 'react'

// Componentes NC
import StylesCSSExterno from './views/1-basico/styles/styles-css/StylesCSSExterno'
import StylesCSSInLine from './views/1-basico/styles/styles-css/StylesCSSInLine'

// pages
import OperacionesMatematicas from "views/2-intermedio/operaciones-matematicas/OperacionesMatematicas";

// Routes
import FormSuma from "views/2-intermedio/forms-state/FormSuma";


const App = () => {
    return (
        <div>
            <StylesCSSExterno/>
            <StylesCSSInLine/>
        </div>
    )
}

export default App
