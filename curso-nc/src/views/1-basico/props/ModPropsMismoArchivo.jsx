import React, { Fragment } from "react";

 

function ButtonProps(props) {
    return(
        <Fragment>
            <h2> Me gusta : </h2>
            <h2> { props.numero } </h2>
        </Fragment>
    );
}



function  ModProps() {
    return(
        <Fragment>
            <ButtonProps/>
            <button> Like </button>
        </Fragment>
    );

}

export default ModProps;