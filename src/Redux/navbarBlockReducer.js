const CREATE_MY_FRIENDS = "CREATE-MY-FRIENDS";
const DELETE_MY_FRIENDS = "DELETE-MY-FRIENDS";

export const createMyFriendsAC = (user) => ({type:CREATE_MY_FRIENDS, user:user});
export const deleteMyFriendsAC = (user) => ({type:DELETE_MY_FRIENDS, user:user});

const preloadedState = {
    jsonMenu: [
        {to: '/profile', name: 'Profile'},
        {to: '/dialogs', name: 'Messages'},
        {to: '/news', name: 'News'},
        {to: '/music', name: 'Music'},
        {to: '/settings', name: 'Settings'},
        {to: '/users', name: 'Users'},
    ],
    jsonFriends:[
        {
            id: 1,
            fullName: 'Иван Иванов',
            srcAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpaxwJzItbHS8bb_J0L08CKA5DflHYLP41bQVoL7fUZHUGv1S92V-VkZe2MPkiFMn0J0&usqp=CAU'
        },
        {
            id: 2,
            fullName: 'Петр Петрович',
            srcAvatar: 'https://cdn4.vectorstock.com/i/1000x1000/20/73/black-cat-icon-flat-vector-11112073.jpg'
        },
    ]
};
const navbarBlockReducer = (state = preloadedState,action) => {
    switch (action.type){
        case CREATE_MY_FRIENDS:
            return {
                ...state,
                jsonFriends: [...state.jsonFriends,action.user],
            };
        case DELETE_MY_FRIENDS:
            return {
                ...state,
                jsonFriends: state.jsonFriends.filter(obj => obj.id !== action.user.id),
            };
        default:
            return state;
    };
};

export default navbarBlockReducer;