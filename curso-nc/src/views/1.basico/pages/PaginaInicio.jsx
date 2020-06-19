import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

function PaginaInicio (){
    return (
        
        <Fragment>
            <h2> Pagina Inicio </h2>
        <Link to='/'> <button> Pagina Inicio </button></Link>
        <Link to='/pagina2'> <button> pagina 2 </button></Link>
        <Link to='/pagina3'> <button> pagina 3 </button> </Link>
        </Fragment>
    );
}

export default PaginaInicio;