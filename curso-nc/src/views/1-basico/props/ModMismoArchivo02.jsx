import React, { Fragment } from "react";

function ModMismoArchivo (props) {
    return (
        <Fragment>
            <button> { props.texto } </button>
        </Fragment>

    );
}


function SectionProps () {
    return (
        <Fragment>
            <ModMismoArchivo texto="Sebastian"/>
        </Fragment>

    );
}

export default SectionProps;
    