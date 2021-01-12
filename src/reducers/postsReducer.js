import axios from "axios";
// export const PostsReducer = (state, action) => {
   
//     // async function loadPosts(){
//     //     const result = await axios.get("http://localhost:5000/posts");
//     //     return result.data[0]
//     //   }
    var allPosts= [{title: "anjali",body: "anjali"},{title:"jaanu",body:"jaanu"}]
    let defaultState= {
        dummyPosts:[{title:"radha",body:"radha"}],
        viewPost :{title:'' , body: ''}
    }
export const postsReducer=(state=defaultState,action)=>{
    switch (action.type) {
        case "VIEW":        
            return {...state,
                        viewPost:action.payload}
        case "EDIT":     
            return {...state,
                viewPost:action.payload}
        case "DELETE":  
            return { ...state,
                dummyPosts : action.payload}
        case "SEND_POSTS":
            return {
                ...state,
                dummyPosts : action.payload
            }
        default:
            console.log("in reducers, default")
            console.log(state)
            return state;
    }
}

// const postsReducer=(state=defaultState,action)=>{
//     if(action.type==="SEND_POSTS"){
//         return{
//             ...state,
//             dummyPosts:action.payload
//         }
//     }
//     else{
//         return {
//             ...state
//         }
//     }
// }
// export default postsReducer;