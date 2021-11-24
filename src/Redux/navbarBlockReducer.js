const preloadedState = {
    jsonMenu: [
        {to: '/profile', name: 'Profile'},
        {to: '/dialogs', name: 'Messages'},
        {to: '/news', name: 'News'},
        {to: '/music', name: 'Music'},
        {to: '/settings', name: 'Settings'},
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

    return state;
};

export default navbarBlockReducer;