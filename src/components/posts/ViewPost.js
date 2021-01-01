import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { Link } from "react-router-dom";

const Post= () =>{
    const {id}= useParams();
    const [post,setPost]= useState({});

    const loadUser = async () =>{
        const result= await axios.get(`https://nodejs-mysql-2020.herokuapp.com/posts/${id}`);   
        setPost(result.data[0]);
    };

    useEffect(()=>{
        loadUser();
    },[]);

    return (
        <div className="container">
            <br></br>
            <Link className="btn btn-warning float-right" to='/'>Back to Home</Link>
            <h2 className= 'text-info mb-3'> View Post: </h2>
            <br>
            </br>           
            <ul className="list-group w-90">
                <li className="list-group-item"><b>Title:</b> {post.title}</li>
                <li className="list-group-item"><b>Body:</b> {post.body}</li>
            </ul>          
        </div>
    )
};

export default Post;
