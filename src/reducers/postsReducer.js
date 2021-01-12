let defaultState= {
        dummyPosts:[],
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
            console.log(state)
            return state;
    }
}

