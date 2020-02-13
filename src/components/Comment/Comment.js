
import React from 'react'
import { COMMENT_LIKE, COMMENT_REMOVE } from '../../actions/actionTypes';



export default function Comment({ comment, dispatch }) {
    const handleLike = () => {
        dispatch({ type: COMMENT_LIKE, commentId: comment.id });
    };
    const handleRemove = () => {
        dispatch({ type: COMMENT_REMOVE, commentId: comment.id });
    };

    return (
        <div>
            
        </div>
    )
}
