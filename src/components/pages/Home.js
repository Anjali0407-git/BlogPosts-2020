import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import Pagination from './Pagination';


const Home =() => {
    const [allPosts, setAllPosts]= useState([]);
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage]= useState(3);

    useEffect(()=>{
       loadPosts();
    },[]
    );

    const loadPosts= async()=>{
        const result = await axios.get("https://nodejs-mysql-2020.herokuapp.com/");
        setPosts(result.data.reverse());
    };

    var posts= allPosts;
    const deletePost= async id =>{
        alert("Are you sure to delete?");
        await axios.delete(`https://nodejs-mysql-2020.herokuapp.com/posts/delete/${id}`);
        loadPosts();
    };

    //----------------------get Current posts
    const indexOfLastPost= currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    var currentPosts;
    var searchPosts;
    if(search === "")
    currentPosts= posts.slice(indexOfFirstPost, indexOfLastPost);
    else{
     searchPosts = posts.filter(post => {
        if(post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1){
            return post;
        }
    }).map(post =>{
        return post;
    })

    posts= searchPosts;
    console.log("posts");
    console.log(posts);
    currentPosts= posts.slice(indexOfFirstPost, indexOfLastPost);
    }

    //----------------------change page
    const paginate= (pageNumber) => setCurrentPage(pageNumber); 
 
    return (
        <div className="container">
            <div className="py-4">
            <div>
                <h1 className= 'text-info mb-20'> All Posts: </h1>
                <input className= "search float-right" label="Search Post" icon="search" placeholder= "Search Posts...." onChange= {e => {setSearch(e.target.value);setCurrentPage(1);}} ></input>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <table className="table table-success table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Post</th>
                        <th scope="col">View|Edit|Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((post,index) =>(
                            <tr>
                                <th scope="row">{indexOfFirstPost + index +1}</th>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <Link className="btn btn-outline-success mr-2" to={`/posts/${post.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary mr-2" to={`/posts/edit/${post.id}`}>Edit</Link>
                                    <Link className="btn btn-outline-danger mr-2 " onClick={()=> deletePost(post.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    );
};

export default Home;