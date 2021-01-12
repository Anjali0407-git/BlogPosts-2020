import axios from "axios";

export function sendPosts(){
    return(dispatch)=>{
        return axios.get("https://nodejs-mysql-2020.herokuapp.com/").then((response)=>{
            console.log("in send posts")
            // console.log(response)
            console.log(response.data)
            dispatch(sendAllPosts(response.data.reverse()))
        })
    }
}
export function sendAllPosts(posts){
    return{
        type: "SEND_POSTS",
        payload:posts
    }
}
export function Delete(id){
    return(dispatch)=>{
        return axios.delete(`https://nodejs-mysql-2020.herokuapp.com/posts/delete/${id}`).then((response)=>{
            // console.log("in delete")
            // // console.log(response)
            console.log("in delete")
            // dispatch(sendAllPosts(response.data))
            // sendPosts();
        })
    }
}
export const add = data =>{
    return(dispatch)=>{
        return axios.post("https://nodejs-mysql-2020.herokuapp.com/posts/add",{
               title:data.title,
               body : data.body
            }).then((response)=>{
            console.log("in add")
        })
    }
}
export const edit = data =>{
    return(dispatch)=>{
        return axios.put(`https://nodejs-mysql-2020.herokuapp.com/posts/update/${data.id}`, {
               title:data.title,
               body : data.body
            }).then((response)=>{
            console.log("in edit");
            dispatch(sendPosts())
        })
    }
}
export function editPost(post){
    return{
        type: "EDIT",
        payload:post
    }
}
export const view = id =>{
    return(dispatch)=>{
        return axios.get(`https://nodejs-mysql-2020.herokuapp.com/posts/${id}`).then((response)=>{
            // console.log("in view");
            // console.log(response)
            dispatch(viewPost(response.data[0]))
        })
    }
}
export function viewPost(post){
    return{
        type: "VIEW",
        payload:post
    }
}
// export const Delete = (id) =>{
//     return {
//         type : 'DELETE',
//         payload : id
//     }
// }