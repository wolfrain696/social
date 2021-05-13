import React from 'react';
import sDialogs from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/id' + props.userId;
    return (
        <div className={sDialogs.dialog}>
            <NavLink to={path} activeClassName={sDialogs.active}><img className={sDialogs.avatar} src={props.avatar}
                                                                      alt="12"/>{props.userName}</NavLink>
        </div>
    )
}


export default DialogItem