import axios from 'axios';
import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from "react-router-dom";

const AddPost =() => {
    let history = useHistory();
    const [post,setPost]= useState({
        title: "",
        body: ""
    });

    const {title,body}= post;

    const onInputChange=e=>{
        setPost({...post,[e.target.name]: e.target.value});
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("https://nodejs-mysql-2020.herokuapp.com/posts/add",{
            title:post.title,
            body : post.body
        });
        history.push("/")
    };

    return (
        <div className="container">
            <br></br>
            <Link className="btn btn-warning float-right" to='/'>Back to Home</Link>
            <h2 className= 'text-info mb-3'> Add Post: </h2>
            <br>
            </br>
            <form onSubmit={e=> onSubmit(e)}>
                <div>
                    <label>Title : </label><br />
                    <input class="form-control" type ="text" name="title" value={title}
                    onChange={e =>onInputChange(e)}/>
                </div>
                <br></br>
                <div>
                    <label>Body : </label><br />
                    <textarea class="form-control" name="body" value={body}
                    onChange={e => onInputChange(e)}/>
                </div>
                <br />
                <button className="btn btn-primary" type = "submit"> Add </button>
            </form>
        </div>
    );
};

export default AddPost;