import React, { useState, useReducer } from 'react'
import Post from '../Post/Post';
import { COMMENT_ADD, COMMENT_LIKE, COMMENT_REMOVE, POST_LIKE,POST_ADD, POST_REMOVE } from '../../actions/actionTypes';
import PostAddForm from '../PostAddFrom/PostAddForm';

let nextPostId = 1;
let nextCommentId = 1;


const initialPosts = [
    
    { id: nextPostId++, author: 'Sabina', authorAvatar:'https://i.pravatar.cc/150?img=32',postImg:'https://klike.net/uploads/posts/2019-01/1547367999_1.jpg', likes: 3, likedByMe: false, content: 'Second Post', comments: [] },
    {id: nextPostId++, author: 'Max', authorAvatar:'https://i.pravatar.cc/150?img=56',postImg:'https://i.pravatar.cc/150?img=32', likes: 4, likedByMe: false, content: 'First Post', comments: [
            { id: nextCommentId++, author: 'Marina',  content: 'Nice Post', likes: 0,likedByMe: false},
            ]},
        ]

function likeComment(comments, id) {
    return comments.map(c => {
        if (c.id !== id) {
            return c;
        }
        return { ...c, likedByMe: !c.likedByMe, likes: c.likedByMe ? c.likes - 1 : c.likes + 1}; 
    });
}

function removeComment(comments, id) {
    return comments.filter(c => c.id !== id);
}

function addComment(comments, comment) { 
    return [...comments, { id: nextCommentId++, author: 'Alex', content: comment, likes: 0 }];
}

function reducer(posts, action) {
    switch (action.type) {
        case POST_LIKE:
            {
                const { postId } = action;
                return posts.map(p => {
                    if (p.id !== postId) {
                        return p;
                    }
                    return {...p, likedByMe: !p.likedByMe, likes: p.likedByMe ? p.likes - 1 : p.likes + 1 };
                });
            }
        case COMMENT_ADD:
            {
                const { postId, comment } = action;
                return posts.map(
                    p => ({
                        ...p,
                        comments: p.id !== postId ? p.comments : addComment(p.comments, comment)
                    })
                );
            }
        case COMMENT_LIKE:
            {
                const { commentId } = action;
                return posts.map(
                    p => ({ ...p, comments: likeComment(p.comments, commentId) })
                );
            }
        case COMMENT_REMOVE:
            {
                const { commentId } = action;
                return posts.map(
                    p => ({ ...p, comments: removeComment(p.comments, commentId) })
                );
            } 
        case POST_ADD: 
                {
                const { author,authorAvatar,postImg,content} = action;
                const newPost = {
                    id: nextPostId++, 
                    author,
                    authorAvatar,
                    postImg, 
                    likes: 0, 
                    content, 
                    comments: [] 
                }
                console.log(posts)
                return [newPost, ...posts]
            }
        case POST_REMOVE:
            {
                const {postId} = action;
                return posts.filter(p => p.id !== postId)
            }
        default:
            return posts;
    }
}


export default function Wall() {
    const [posts, dispatch] = useReducer(reducer, initialPosts);

    return (
        <div>
            <PostAddForm dispatch={dispatch} />
            {posts.map(o => <Post
                key={o.id}
                post={o}
                dispatch={dispatch}
            />)}
        </div>
    )
}
