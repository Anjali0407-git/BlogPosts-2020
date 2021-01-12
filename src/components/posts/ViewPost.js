import React,{useState, useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from '../../actions/PostsActions';
import {bindActionCreators} from 'redux';

const Post= (props) =>{
    const {id}= useParams();
    useEffect(()=>{
        loadUser();
    },[]);
    
    async function loadUser(){
        await props.ViewPost(id);
        console.log("in load user");
        console.log(props.viewPost);       
    }
    
    return (
        <div className="container">
            <br></br>
            <Link className="btn btn-warning float-right" to='/'>Back to Home</Link>
            <h2 className= 'text-info mb-3'> View Post: </h2>
            <br>
            </br>
            <ul className="list-group w-90">
                <li className="list-group-item"><b>Title:</b> {props.viewPost.title}</li>
                <li className="list-group-item"><b>Body:</b> {props.viewPost.body}</li>
            </ul>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        viewPost: state.viewPost
    }
};
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        ViewPost : actions.view
    },dispatch)
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
