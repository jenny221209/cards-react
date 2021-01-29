
import React, {Fragment} from 'react'

// COMPONENTES
import FlexContainer from '../components/flex-container/flex-container'

const ViewsFlexContainer = () => {
    return (
        <Fragment>
            <FlexContainer bgOrange900 jcSpaceBetween>
            <ul>
                <label htmlFor="" > Logo </label>
            </ul>
            <ul> 
                <li><a href=""> Inicio</a></li>
                <li><a href=""> Acerca de </a></li>
                <li><a href=""> Servicios </a></li>
                <li><a href=""> Contactenos </a></li>
            </ul>
            <ul>
                <label htmlFor=""> Login </label> 
            </ul>
            </FlexContainer>

        </Fragment>
    )
}

export default ViewsFlexContainer
