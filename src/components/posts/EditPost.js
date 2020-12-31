import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { Link } from "react-router-dom";

const EditPost =() => {
    let history = useHistory();
    const {id}= useParams();

const [post,setPost]= useState({
    title: "",
     body:""
});
  
    const {title,body}= post;
   
    useEffect(()=>{
        console.log('in edit post');
        loadUser();
    },[]);

    const loadUser = async () =>{
        var result= await axios.get(`http://localhost:5000/posts/${id}`);
        // result =JSON.stringify(result.data);
 console.log(result.data[0]);
//  console.log(JSON.stringify(result.data));
        setPost(result.data[0]);
        
        // console.log(post);
        // console.log("title : "+post.title);
        // console.log("body : "+post.body);
    };

    const onInputChange=e=>{
        setPost({...post,[e.target.name]: e.target.value});
        console.log(e.target.value);  
    };

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.put(`https://nodejs-mysql-2020.herokuapp.com/posts/update/${id}`, {
            title:post.title,
            body:post.body,
        });
        history.push("/")
    };

    return (
        <div className="container">
            <br></br>
            <Link className="btn btn-warning float-right" to='/'>Back to Home</Link>
            <h2 className= 'text-info mb-3'> Edit Post: </h2>
                <br>
                </br>
            
                <form onSubmit={e=> onSubmit(e)}>
              
                   
                    <div>
                        <label>Title : </label><br />
                        <input className="form-control" type ="text" name="title" value={title}
                        onChange={e =>onInputChange(e)}/>
                    </div>
                    <br></br>
                    <div>
                        <label>Body : </label><br />
                        <textarea className="form-control" name="body" value={body}
                        onChange={e => onInputChange(e)}/>
                    </div>
                                
                    <br />
                    <button className="btn btn-primary" type = "submit"> Update </button>
                </form>
               
        </div>
    );
};

export default EditPost;

// {
//     title: "",
//  body: ""
// }