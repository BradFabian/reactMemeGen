import React from 'react';
import Troll from '../img/pexels-ellie-burgin-4007776.jpg'
function Header(){

    const logoStyle = {
        borderRadius: '5%',
        filter: 'drop-shadow({2,3} ?)'
    }
return (
    <header>
        <img src={Troll} alt='Troll' style={logoStyle}/>
        <p>Meme Generator</p>
    </header>
)

}

export default Header;