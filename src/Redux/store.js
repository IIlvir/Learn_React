import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import navbarBlockReducer from "./navbarBlockReducer";

const store = {
    _state: {
        dialogsPage:{
            jsonDialogs: [
                {id:"1",name:"Ilvir"},
                {id:"2",name:"Max"},
                {id:"3",name:"Ivan"},
                {id:"4",name:"Dima"}
            ],
            jsonMessage: [
                {id:"1",message:"Hi"},
                {id:"2",message:"Hi2"},
                {id:"3",message:"H3"}
            ],
            newMessageText: '',
        },
        profilePage:{
            jsonPosts: [
                {id:"1",message:"One",likeCount:"2"},
                {id:"2",message:"Two",likeCount:"3"},
                {id:"3",message:"Three",likeCount:"4"},
            ],
            newPostText: '',
        },
        navbarBlock:{
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
        },
    },
    render(){
        console.log('render not found!');
    },
    getState(){
        return this._state;
    },
    subscriber(observer){
        this.render = observer;
    },
    dispatch(action){
        this._state.profilePage = profilePageReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage,action);
        this._state.navbarBlock = navbarBlockReducer(this._state.navbarBlock,action);
        this.render(this._state);
    },
};

window.state = store;
export default store;