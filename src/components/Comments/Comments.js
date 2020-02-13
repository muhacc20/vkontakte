import React from 'react'
import Comment from '../Comment/Comment'
import { COMMENT_LIKE, COMMENT_REMOVE } from '../../actions/actionTypes'

export default function Comments({ comments, dispatch }) {
    const commentLike = ()=>{
        dispatch({type: COMMENT_LIKE, commentId: comments.id})
    }
    const commentRemove = ()=>{
        dispatch({type: COMMENT_REMOVE, commentId: comments.id})
    }
    return (
        <div className='comment'>
            <p>{comments.author}</p>
            <p>{comments.content}</p>
            <p>{comments.likes}</p>
            <button className="btn3" onClick={commentLike}>Лайк коммента</button>
            <button className="btn4" onClick={commentRemove}>Удалить коммент</button>
        </div>
    )
}
