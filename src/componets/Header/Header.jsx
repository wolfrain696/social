import React from 'react';
import sHeader from './Header.module.css';

const Header = () => {
    return (
        <header className={sHeader.header}>
            <img src='https://partner.loyaltyplant.com/IPLPartner/images/logo.svg'></img>
        </header>
    )
}

export default Header