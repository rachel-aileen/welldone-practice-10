import { Close, DragHandle } from '@mui/icons-material';
import { IconButton } from '@mui/material'
import React, { useState } from 'react'

export default function Navbar() {



    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const toggleMenu = () => setIsMenuVisible(!isMenuVisible);


    return (
        <div className='navbar'>
            <a className='logo' href="#">Rodarte</a>

            <div className='navigation'>


                <IconButton onClick={toggleMenu} className='menuBtn'>

                    {!isMenuVisible &&
                        <DragHandle className='menuIcon'
                        />}

                    {isMenuVisible &&
                        <Close className='menuIcon'
                        />}

                </IconButton>

                <ul className={`menu ${isMenuVisible ? 'active' : 'hidden'}`}>
                    <li className='menuItem'><a href="#home">Home</a></li>
                    <li className='menuItem'><a href="#portfolio">Portfolio</a></li>
                    <li className='menuItem'><a href="#services">Services</a></li>
                    <li className='menuItem'><a href="#about">About</a></li>
                    <li className='menuItem'><a href="#pricing">Pricing</a></li>
                    <li className='menuItem'><a href="#contact">Contact</a></li>

                </ul>
            </div>



        </div>
    )
}
