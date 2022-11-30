import React from 'react';

function NavBar(){
    return(
        <nav className='superiorNav'>
            <img className='logo-logout' src={require('../../../images/logout.png')} alt='Logout' />
            <button className='logout-button'>Logout</button>
            <img className='logo-waiter-layout' src={require('../../../images/queen.png')} alt='Logo' />
        </nav>
    )
}
