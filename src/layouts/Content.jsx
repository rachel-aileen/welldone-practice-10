import React from 'react'
import PageSelect from '../PageSelect'

export default function Content() {
    return (
        <div>


            <div className='introContent' >
                <h1 className='heading'>We believe in transparency</h1>
                <h6 className='subheading'>Want a price estimate?</h6>
                <p className='mainText' >
                    Get it below.
                    Please note this is only a ballpark cost and does not
                    reflect the final cost.
                </p>

                <PageSelect />
            </div>


        </div>
    )
}
