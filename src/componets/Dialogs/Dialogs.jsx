import React from 'react';
import sDialogs from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message"
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redax/Reducers/dialogs-reducer";


const Dialogs = (props) => {
    debugger

    let addMessage = () => {
        props.dispatch(addNewMessageActionCreator())
    }
    let onMessageChange = (e) => {
       let text =  e.target.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    let dialogsElements = props.state.dialogsPage.dialogs.map(d => <DialogItem userId={d.id} avatar={d.avatar}
                                                                          userName={d.name}/>)
    let messagesElement = props.state.dialogsPage.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={sDialogs.dialogs}>
            <div className={sDialogs.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={sDialogs.messages}>
                <div>
                    {messagesElement}
                </div>
                <div className={sDialogs.addMessage}>
                    <textarea onChange={onMessageChange}
                              value={props.state.dialogsPage.messageText}/>
                    <button onClick={addMessage}>Enter</button>
                </div>
            </div>
        </div>
    )
}


export default Dialogs