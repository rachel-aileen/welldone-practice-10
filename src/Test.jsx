import React, { useState } from 'react'

export default function Test() {

    const [name, setName] = useState('Aileen');

    const changeName = () => {
        setName('tushar')
    }


    return (
        <div>
            {name}


            <br />

            <button
                onClick={() => {
                    setName('aileen')
                }}
            >
                Aileen
            </button>
            <button
                onClick={() => {
                    setName('tushar')
                }}
            >
                Tushar
            </button>

        </div>
    )
}
