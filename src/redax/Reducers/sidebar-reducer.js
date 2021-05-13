let initializationState = {
    navLinks: [
        {link: '/profile', nameLink: 'Profile',},
        {link: '/dialogs', nameLink: 'Message',},
        {link: '/news', nameLink: 'News',},
        {link: '/music', nameLink: 'Music',},
        {link: '/setting', nameLink: 'Setting',},
    ],
    friends: [
        {
            id: 1,
            userName: 'Sany',
            avatar: 'https://sun9-68.userapi.com/impf/c854428/v854428976/17e96a/JtxoZumSCdk.jpg?size=1620x2160&quality=96&sign=6e73a91f611a7235e17a7488a84073d6&type=album'
        },
        {
            id: 2,
            userName: 'Anton',
            avatar: 'https://sun9-60.userapi.com/impf/Z1YVMvvXuTDp9O_7Z3hhc9Jfq20o_a2dRSH6nw/0v6whl7qKpQ.jpg?size=1623x2160&quality=96&sign=a00a60c0dd6a9dc4b5ae3b0e092eeb84&type=album'
        },
        {
            id: 3,
            userName: 'Jenay',
            avatar: 'https://sun9-57.userapi.com/impf/c844417/v844417096/cba8e/1nhOGucLQC0.jpg?size=1620x2160&quality=96&sign=b15d96a87851e91786ac3aa90907ab28&type=album'
        }
    ]
}

const sidebarReducer = (state = initializationState, action) => {


    return state
}

export default sidebarReducer