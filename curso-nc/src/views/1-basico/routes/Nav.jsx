import React, { Fragment } from "react";
import  { Link, Redirect, withRouter } from 'react-router-dom';

// Iconos Material UI
import Account from '@material-ui/icons/AccountBalance';

function Menu(props) {
    const { history } = props

    return (
        <Fragment>
         {/* Metodo 1*/}
        <h4> Menu Links </h4>
        <Link to='/'> <Account/> Inicio </Link>
        <a href='/pagina2'> <button> Pagina 2 </button></a>
        <Link to='/pagina3'> <button> Pagina 3 </button></Link>
        { false && <Redirect to="/" /> }

        {/*Metodo 2 */}
        <h4> Menu Button + History </h4>
        <button onClick={ () => history.push('/') } > Inicio </button>
        <button onClick={ () => history.push('/pagina2') } > Pagina 2 </button>
        <button onClick={ () => history.push('/pagina2') } > Pagina 3 </button>
        <button onClick={ () => history.goBack() } > Atras </button>
        <button onClick={ () => history.goForward() } > Adelante </button>
        
        </Fragment>

        );

}

export default withRouter(Menu);
