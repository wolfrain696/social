import React from 'react';
import sPtofile from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = (props) => {


    return (
        <div className={sPtofile.content}>

            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile