import { useState } from 'react';
import React from 'react';
import axios from 'axios';



const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/posts', { title, content });

        setTitle('');
        setContent('');
    };

    return (
        <div className="container mt-5">
            <h1>Create a New Post</h1>
            <form onSubmit={onSubmit}>
                <label className="form-label">
                    Title:
                    <input type="text" name="title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <br />
                <label className="form-label">
                    Content:
                    <textarea name="content" className="form-control" />
                </label>
                <br />
                <button type="submit" className="btn btn-solid theme-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreatePost;