import React from 'react';
import sNav from './Nav.module.css'
import NavLinks from "./NavLinks";
import FriendsBlock from './FriendsBlock/FrendsBlock'

const Nav = (props) => {

    let navElement = props.state.sideBar.navLinks.map(i => <NavLinks Link={i.link} nameLink={i.nameLink}/>)

    return (
        <nav className={sNav.nav}>
            {navElement}
            <FriendsBlock frends={props.state.sideBar.friends}/>
        </nav>
    )
}

export default Nav