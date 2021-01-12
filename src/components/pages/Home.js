import React, {useState, useEffect,useDidUpdate} from 'react';
import {Link} from 'react-router-dom';
import Pagination from './Pagination';
import {connect} from 'react-redux';
import * as actions from '../../actions/PostsActions';
import {bindActionCreators} from 'redux';


const Home =(props) => {
    const [allPosts, setAllPosts]= useState([]);
    const [search,setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage]= useState(3);

    useEffect(()=>{  
       loadPosts();
    },[]);

    async function loadPosts(){
     await props.sendPosts();  
     setAllPosts(props.dummyPosts)      
    };

    var posts= allPosts
    const deletePost= id =>{
        alert("Are you sure to delete?");
        props.DeletePost(id);
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

const mapStateToProps = state => {
    return {
        dummyPosts: state.dummyPosts
    }
};
const mapDispatchToProps = dispatch =>{
    return bindActionCreators({
        sendPosts : actions.sendPosts,
        DeletePost : actions.Delete
    },dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);