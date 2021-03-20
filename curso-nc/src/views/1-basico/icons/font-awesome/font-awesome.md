## ICONS FONT AWESOME

### Install

    - Se debe instalar estas 3 dependencias para usar como minimo los iconos libres

    <Code>

    $ npm i --save @fortawesome/fontawesome-svg-core
    $ npm install --save @fortawesome/free-solid-svg-icons
    $ npm install --save @fortawesome/react-fontawesome
    $ npm install --save @fortawesome/free-brands-svg-icons
    $ npm install --save @fortawesome/free-regular-svg-icons

    Ejemplo: 
    <code>
    import React,  { Fragment } from 'react'

    //Icons Font Awesome
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import { faCoffee } from '@fortawesome/free-solid-svg-icons'
    import { faBabyCarriage } from '@fortawesome/free-solid-svg-icons'
    

    const fontAwesome = () => {
        return (
            <div>
                <h2> ICONS FONT AWESOME </h2>
                <FontAwesomeIcon  icon={faBabyCarriage} size='5x'color='#6D4C41'/>
            </div>
        )
    }

    export default fontAwesome
