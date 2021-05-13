import React from 'react';
import sFrends from './FrendsBlock.module.css'
import {NavLink} from "react-router-dom";


const FrendsBlock = (props) => {

    let frendsElement = props.frends.map(i => <NavLink acriveClassName={sFrends.active} className={sFrends.frend} to={'/id' +i.id} ><img src={i.avatar}/>{i.userName}</NavLink> )

    return (
        <div className={sFrends.frends}>
            <h1>Frends</h1>
            {frendsElement}
        </div>
    )
}

export default FrendsBlock