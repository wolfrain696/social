const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initializationState = {
    posts: [
        {id: 1, likePost: 15, post: 'hi, how are you?'},
        {id: 2, likePost: 21, post: 'My first podject)'},
        {id: 3, likePost: 666, post: 'Test Post'}],
    newPostText: 'Чё нового?!'

}



const profileReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                post: state.newPostText,
                likePost: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT :
            state.newPostText = action.newText
            return state
        default:
            return state

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}

export default profileReducer