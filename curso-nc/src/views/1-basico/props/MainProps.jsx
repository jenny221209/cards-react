import React, { Fargament, Fragment } from "react";

// componentes Props 
import ButtonProps from "views/1-basico/props/ButtonProps";
import ProductosPreciosProps from "views/1-basico/props/ProductosPreciosProps";

function PropsMain () {
    return(
        <Fragment>

            <ProductosPreciosProps 

                producto1="CamiBuso"
                precio1="50.000"

                producto2="Pantalon"
                precio2="80.000"
            >

            </ProductosPreciosProps>
            <ButtonProps texto="Boton">

            </ButtonProps>
           
        </Fragment>

    );
}

export default PropsMain;