import React from 'react';
import pietroflix from '../../assets/img/pietroflix.png';
import './Menu.css'
//import ButtonLink from './componentes/ButtonLink';
import Button from '../Button'

function Menu(){
    return(
        <nav className = "Menu">
            <a href = "/">
            <img className = "Logo" src = {pietroflix} alt = "Pietroflix logo"></img> 
            </a>

            <Button as = "a" className = "ButtonLink" href = "/">
                NOVO VIDEO!
            </Button>
        </nav>
    )
}

export default Menu;