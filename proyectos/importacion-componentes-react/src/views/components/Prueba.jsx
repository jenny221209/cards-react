import React, { Fragment } from 'react';

// Componentes Material UI
import ButtonMU from '@material-ui/core/Button';


// Componentes Material Kit
import ButtonMk from 'components/CustomButtons/Button';



//import ButtonMk from '../../components/CustomButtons/Button';

function Prueba () {
    return (
        <Fragment>
        <ButtonMU variant="contained" color="secondary">
        Secondary
        </ButtonMU>

        <ButtonMk type="button" color="warning">
        Warning
        </ButtonMk>
        </Fragment>
    );
}
 export default Prueba;