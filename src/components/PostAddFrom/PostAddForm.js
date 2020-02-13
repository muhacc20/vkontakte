import React, { useState } from 'react'
import { POST_ADD } from '../../actions/actionTypes';

export default function PostAddForm({dispatch }) {
const [author, setAuthor] = useState('');
const [authorAvatar, setAuthorAvatar] = useState('');
const [postImg, setPostImg] = useState('')
const [content, setContent] = useState("")


const handleSubmit = evt => {
    evt.preventDefault();
    dispatch({
        type: POST_ADD,
        author,
        authorAvatar,
        postImg,
        content,
    });
    setContent('')
};


const handleChangeAuthor = evt => {
    const authorValue = evt.target.value;
    setAuthor(authorValue);
};

const handleChangeAva = evt => {
    const authorAva = evt.target.value;
    setAuthorAvatar(authorAva);
};


const handleChangePostImg = evt => {
    const postImg = evt.target.value;
    setPostImg(postImg);
};

const handleChangeDesc = evt => {
    const desc = evt.target.value;
    setContent(desc)

};

return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChangeAuthor} value={author} placeholder="Имя автора"/>
        <input onChange={handleChangeAva} value={authorAvatar}placeholder="аватарка"/>
        <input onChange={handleChangePostImg} value={postImg}placeholder="картинка для поста"/>
        <input onChange={handleChangeDesc} value={content}placeholder="текст поста"/>
        <button>Ok</button>
    </form>
)
}