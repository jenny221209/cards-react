import React, { Fragment } from 'react';

// Componentes Material UI
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    h2: {
        fontFamily: "'Galada', cursive",
        fontSize: 50,
        color: "blue"
    },

    h3: {
        fontFamily: "'Comfortaa', cursive",
        fontSize: 50,
        color: "red"
    }
  
  });




function FuentesGoogle (){

    const classes = useStyles();

    return (
        
        <Fragment>
            <h2 className={classes.h2}> Fuentes Tipograficas Google </h2>
            <h3 className={classes.h3}> Fuentes Tipograficas Google </h3>

        </Fragment>
    );
}

export default FuentesGoogle ;