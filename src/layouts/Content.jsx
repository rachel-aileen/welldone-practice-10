import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Content() {
    return (
        <div>


            <Container maxWidth='md' className='introContent'>

                <Typography className='heading'  > We believe in transparency.</Typography>

                {/* <h1 className='heading'>We believe in transparency</h1> */}
                <h6 className='subheading'>Want a price estimate?</h6>
                <p className='mainText' >
                    Get it below.
                    Please note this is only a ballpark cost and does not
                    reflect the final cost.
                </p>


            </Container>



        </div>
    )
}
