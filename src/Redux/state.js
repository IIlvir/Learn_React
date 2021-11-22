const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_TEXT_MESSAGE = "UPDATE-NEW-TEXT-MESSAGE";

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
        switch (action.type){
            case ADD_POST:
                const postObj = {
                    id: String(this._state.profilePage.jsonPosts.length + 1),
                    message: this._state.profilePage.newPostText,
                    likeCount: "0",
                };
                this._state.profilePage.jsonPosts.push(postObj);
                this._state.profilePage.newPostText = '';
                this.render(this._state);
                break;
            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.text;
                this.render(this._state);
                break;
            case ADD_MESSAGE:
                const messageObj = {
                    id: String(this._state.dialogsPage.jsonMessage.length + 1),
                    message: this._state.dialogsPage.newMessageText,
                };
                this._state.dialogsPage.jsonMessage.push(messageObj);
                this._state.dialogsPage.newMessageText = '';
                this.render(this._state);
                break;
            case UPDATE_NEW_TEXT_MESSAGE:
                this._state.dialogsPage.newMessageText = action.text;
                this.render(this._state);
                break;
            default:
        };
    },
}

export const addPostAC = () => ({type:ADD_POST});
export const updateNewPostTextAC = (text) => ({type:UPDATE_NEW_POST_TEXT,text:text});
export const addMessageAC = () => ({type:ADD_MESSAGE});
export const updateNewTextMessageAC = (text) => ({type:UPDATE_NEW_TEXT_MESSAGE,text:text});

window.state = store;
export default store;