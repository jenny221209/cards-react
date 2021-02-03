import React, { Fragment }  from 'react'

// Componentes
import GridContainer from '../components/grid-container/grid-container'
import FlexContainer from '../components/flex-container/flex-container'
import Typography from '../components/typography/typography'


// Styles
import '../assets/css/section.css'

const section = () => {
    return (
        <Fragment> 
        <GridContainer>
            <GridContainer className='container__section'>
                <div className='container__bloque'>
                    <Typography className='container__titulo' h2 textBlueGray500> Lorem, ipsum dolor</Typography>
                    <Typography  className='container__text' p2 textBlueGray500>  dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptate, debitis reiciendis natus ratione perspiciatis quasi soluta aperiam nam voluptas</Typography>

                </div>
            </GridContainer>


            <GridContainer className='gridcontainer' gridCols3>
                <div className='gridcontainer__div-bloque'>
                    <Typography className='gridcontainer__titulo' h2 textBlueGray500> Lorem </Typography>
                    <Typography className='gridcontainer__text'p2 textBlueGray300>Lorem ipsum, dolor sit amet consectetur</Typography>
                </div>

                <div className='gridcontainer__div-bloque'>
                    <Typography className='gridcontainer__titulo' h2 textBlueGray500> Lorem </Typography>
                    <Typography className='gridcontainer__text' p2 textBlueGray300>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
                </div>

                <div className='gridcontainer__div-bloque'>
                    <Typography  className='gridcontainer__titulo' h2 textBlueGray500> Lorem </Typography>
                    <Typography className='gridcontainer__text' p2 textBlueGray300> Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
                </div>
            </GridContainer>
            </GridContainer>

        </Fragment>
    )
}

export default section
