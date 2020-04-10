
import React from 'react';

// Style 
import StylesBuscar from '../assets/styles/buscar';

// Assets
import ImagenBuscar from '../assets/img/buscar.png';

class Buscar extends React.Component {
    render(){

        return(
            <div>
            <img style={StylesBuscar.img} src={ImagenBuscar} alt="" width="30px"  />
            <label style={StylesBuscar.label} htmlFor=""> Buscar : </label>
            <input style={StylesBuscar.input} type="text"/>
            <button style={StylesBuscar.button}> Buscar </button>
            </div>
        )

    }
}

export default Buscar;
