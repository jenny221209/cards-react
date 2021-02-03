
import React, { Fragment } from 'react'

// Componentes
import GridContainer from '../components/grid-container/grid-container'
import FlexContainer from '../components/flex-container/flex-container'
import Typography from '../components/typography/typography'
import Button from '../components/buttons/button'

// Styles
import '../assets/css/header.css'

const header = () => {
    return (
        <Fragment>
            <GridContainer className='container' gridCols1>
                <GridContainer className='container__contenedor'>

                    <Typography className='container__typography-titulo' h2 textWhite>Lorem ipsum dolor sit</Typography>

                    <Typography className='container__typography-text' p2 textWhite> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, facere distinctio. Officia deleniti a,
                            perspiciatis vel sit impedit, optio eaque molestiae dolor incidunt rem labore officiis veniam voluptatum, quia reprehenderit</Typography>

                </GridContainer>


                <GridContainer>
                    <FlexContainer className='container__div-button'>
                        <Button bgGreenA200 textWhite> Lorem, ipsum</Button>
                    </FlexContainer>

                </GridContainer>
            </GridContainer>

        </Fragment>
    )
}

export default header
