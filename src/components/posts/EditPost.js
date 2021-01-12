import React,{useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/PostsActions';
import {bindActionCreators} from 'redux';

const EditPost =(props) => {
    let history = useHistory();
    const {id}= useParams();

const [post,setPost]= useState({
    title: "",
     body:""
});
  
    // const {title,body}= post;
   
    useEffect(()=>{
        console.log('in edit post');
        loadUser();
    },[]);

    async function loadUser(){
       await props.ViewPost(id);
        console.log(props.viewPost)    
    };

    const onTitleChange=e=>{
        props.viewPost.title= e.target.value;
        setPost({...post,title : e.target.value }) 
    };
    const onBodyChange=e=>{
        
        props.viewPost.body= e.target.value;
        setPost({...post,body : e.target.value })
        console.log(e.target.value);  
    };


    const onSubmit = e =>{
        e.preventDefault();
        props.EditPost({id:id,title:props.viewPost.title, body:props.viewPost.body});
        history.push("/")
    };

    return (
        <div className="container">
            <br></br>
            <Link className="btn btn-warning float-right" to='/'>Back to Home</Link>
            <h2 className= 'text-info mb-3'> Edit Post: </h2>
                <br></br>
            
                <form onSubmit={e=> onSubmit(e)}>                   
                    <div>
                        <label>Title : </label><br />
                        <input className="form-control" type ="text" name="title" value ={props.viewPost.title} 
                        onChange={e =>onTitleChange(e)}/>
                    </div>
                    <br></br>
                    <div>
                        <label>Body : </label><br />
                        <textarea className="form-control" name="body"  value= {props.viewPost.body}
                        onChange={e => onBodyChange(e)}/>
                    </div>                                
                    <br />
                    <button className="btn btn-primary" type = "submit"> Update </button>
                </form>               
        </div>
    );
};

const mapStateToProps = state => {
    return {
        viewPost: state.viewPost
    }
};
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        ViewPost : actions.view,
        EditPost : actions.edit
    },dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
