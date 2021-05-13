import React from 'react';
import sPosts from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redax/Reducers/profile-reducer";


const MyPosts = (props) => {


    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    let postElement = props.profilePage.posts.map(p => <Post message={p.post} like={p.likePost}/>)

    return (
        <div className={sPosts.posts}>
            <h3>my posts</h3>
            <div>

                <textarea onChange={onPostChange}  value={props.profilePage.newPostText}/>
                <br/>
                <button onClick={addPost}>add post</button>

            </div>
            <div>
                new post
            </div>
            {postElement}
        </div>

    )
}

export default MyPosts