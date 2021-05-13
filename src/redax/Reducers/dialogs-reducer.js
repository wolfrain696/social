const NEW_MESSAGE = 'NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initializationState = {
    dialogs: [
        {
            id: 1,
            name: "Ruslan",
            avatar: 'https://sun9-46.userapi.com/impf/BwYWrTXZVL1icU0mUhKfOpt3HYOyZFFhytfV7Q/380tO6QNppM.jpg?size=960x720&quality=96&sign=765b3edf6ea7f5b9bf50d3a8a266d9da&type=album'
        },
        {
            id: 2,
            name: "Sanay",
            avatar: 'https://sun9-68.userapi.com/impf/c854428/v854428976/17e96a/JtxoZumSCdk.jpg?size=1620x2160&quality=96&sign=6e73a91f611a7235e17a7488a84073d6&type=album'
        },
        {
            id: 3,
            name: "Anton",
            avatar: 'https://sun9-60.userapi.com/impf/Z1YVMvvXuTDp9O_7Z3hhc9Jfq20o_a2dRSH6nw/0v6whl7qKpQ.jpg?size=1623x2160&quality=96&sign=a00a60c0dd6a9dc4b5ae3b0e092eeb84&type=album'
        },
        {
            id: 4,
            name: "Ditch",
            avatar: 'https://sun9-60.userapi.com/impf/Z1YVMvvXuTDp9O_7Z3hhc9Jfq20o_a2dRSH6nw/0v6whl7qKpQ.jpg?size=1623x2160&quality=96&sign=a00a60c0dd6a9dc4b5ae3b0e092eeb84&type=album'
        },
        {
            id: 5,
            name: "Jenay",
            avatar: 'https://sun9-57.userapi.com/impf/c844417/v844417096/cba8e/1nhOGucLQC0.jpg?size=1620x2160&quality=96&sign=b15d96a87851e91786ac3aa90907ab28&type=album'
        },
    ],
    messages: [
        {id: 1, message: "hi"},
        {id: 2, message: "How are your"},
        {id: 3, message: "YO"},
        {id: 4, message: "yo"},

    ],
    messageText: 'pruvet'
}

const dialogsReducer = (state = initializationState, action) => {
    switch (action.type) {
        case NEW_MESSAGE :
            let newMassage = {
                id: 6,
                message: state.messageText
            }
            state.messages.push(newMassage)
            state.messageText = ''
            return state

        case UPDATE_NEW_MESSAGE_TEXT :
            state.messageText = action.newText
            return state
        default:
            return state
    }
}
export const addNewMessageActionCreator = () => ({type: NEW_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, newText: text
    }

}
export default dialogsReducer