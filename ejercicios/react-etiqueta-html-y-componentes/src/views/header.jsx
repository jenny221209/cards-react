
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

                    <Typography className='container__typography-text' p2 textGray50> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, facere distinctio. Officia deleniti a,
                            perspiciatis vel sit impedit, optio eaque molestiae dolor incidunt rem labore officiis veniam voluptatum, quia reprehenderit</Typography>

                </GridContainer>


                <GridContainer>
                    <FlexContainer className='container__div-button'>
                        <Button bgGreenA200 textWhite> Lorem, ipsum</Button>
                    </FlexContainer>

                </GridContainer>
            </GridContainer>

            <GridContainer>
            <GridContainer className='container__dos'>
                <div className='container__bloque'>
                    <Typography className='container__text' h2> Lorem, ipsum dolor</Typography>
                    <Typography p2>  dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, debitis reiciendis natus ratione perspiciatis quasi soluta aperiam nam voluptas</Typography>

                </div>
            </GridContainer>


            <GridContainer className='gridcontainer' gridCols3>
                <div className='gridcontainer__div-bloque'>
                    <Typography className='gridcontainer__titulo' h2> Lorem </Typography>
                    <Typography className='gridcontainer__text'p2>Lorem ipsum, dolor sit amet consectetur a
                    dipisicing elitLorem ipsum, consectetur adipisicing elit.</Typography>
                </div>

                <div className='gridcontainer__div-bloque'>
                    <Typography className='gridcontainer__titulo' h2> Lorem </Typography>
                    <Typography className='gridcontainer__text' p2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
                </div>

                <div className='gridcontainer__div-bloque'>
                    <Typography  className='gridcontainer__titulo' h2> Lorem </Typography>
                    <Typography className='gridcontainer__text' p2> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
                </div>
            </GridContainer>
            </GridContainer>

        </Fragment>
    )
}

export default header
