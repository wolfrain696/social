import React from 'react';
import sDialogs from './../Dialogs.module.css'


const Message = (props) => {
    return (
        <div className={sDialogs.message}>{props.message}</div>
    )
}


export default Message