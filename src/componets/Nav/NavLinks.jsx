import React from 'react';
import sNav from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const NavLinks = (props) => {
    return (
        <div className={sNav.item}>
            <NavLink activeClassName={sNav.active}
                     to={props.Link}
            >
                {props.nameLink}
            </NavLink>
        </div>
    )
}

export default NavLinks