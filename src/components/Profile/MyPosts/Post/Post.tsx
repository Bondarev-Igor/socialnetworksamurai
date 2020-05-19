import React from 'react';
import style from './Post.module.css';

type PropsType = {
    message: string
    like: string
}

const Post = (props: PropsType) => {
    return (
        <div className={style.item}>
            <img src='data:image/jpeg;base64,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' alt='avatar'/>
            {props.message}
            <div>
            <span>like</span> {props.like}
            </div>
        </div>
    )
};

export default Post;