import React from 'react';
import '../../../stylesheets/Kitchen.css';
import NavBar from '../../generalComponents/NavBar';
import OrderCard from './OrderCard';



function Kitchen({ user, changeUser }) {
    return (
        <div className='kitchenContainer'>
            <NavBar
                changeUser={changeUser} />
            <main className='cards-order-container'>
                <OrderCard
                    key='1'
                    order={{
                        id:'Order ID: 0001',
                        dateEntry:'Date: Thu Dec 08 2022 19:39:23',
                        client:'Customer’s name: Night King '}} />
            </main>
            <img className='logo-person' src={require('../../../images/person-pin.png')} alt='Person icon' />
            <p className='chef-name'>{user}</p>
        </div>
    );
}

export default Kitchen;