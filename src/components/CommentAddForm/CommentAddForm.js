import React, { useState } from 'react'
import { COMMENT_ADD } from '../../actions/actionTypes';

export default function CommentAddForm({ postId, dispatch }) {
    const [comment, setComment] = useState('');
    const handleSubmit = evt => {
        evt.preventDefault();
        dispatch({ type: COMMENT_ADD, comment, postId });
        setComment(''); 
    };

    const handleChange = evt => {
        const value = evt.target.value;
        setComment(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={comment}></input>
            <button>Ok</button>
        </form>
    )
}
