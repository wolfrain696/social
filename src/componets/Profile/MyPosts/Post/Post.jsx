import React from 'react';
import sPost from './Post.module.css'

const Post = (props) => {
    return (
        <div className={sPost.post}>
            <img src="http://www.smileexpo.ru/public/upload/news/tn_10_faktov_ob_eynshteyne_kotorih_vi_ne_znali_14458667137751_image.jpg"></img>
                {props.message}
            <div>
                <span>
                       Like {props.like}
                </span>
            </div>
        </div>
    )
}

export default Post