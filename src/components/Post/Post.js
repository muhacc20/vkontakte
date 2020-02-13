import React from 'react'
import Comments from '../Comments/Comments'
import CommentAddForm from '../CommentAddForm/CommentAddForm'
import { POST_LIKE, POST_REMOVE } from '../../actions/actionTypes'


export default function Post({ post, dispatch }) {
    const  postLike = ()=>  {
        dispatch({type: POST_LIKE, postId: post.id})
    }
    const postRemove = ()=>{
        dispatch({type: POST_REMOVE, postId: post.id})
    }
    return (
           <div className='post'>
                <p className="autAva">
                    <img className="autAvaimg" src={post.authorAvatar} alt='authorAvatar'/>
                    <p className="author">{post.author}</p>
                </p>
                <p className="desc">{post.content}</p>
                <p className="postimg"><img class='imgP' src={post.postImg} alt='authorAvatar'/></p>
                <p>{post.likes}</p>
                <button className="btn1" onClick={postLike}>Like!</button>
                <button className="btn2" onClick={postRemove}>удалить пост</button>
                {post.comments.map(c => <Comments key={c.id} comments={c} dispatch={dispatch}/> )}
                <CommentAddForm dispatch={dispatch} postId={post.id}/>
           </div>
    )
}

