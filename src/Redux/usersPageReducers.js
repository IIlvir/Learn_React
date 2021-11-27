const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const ADD_STATE = "ADD-STATE";

export const toggleFollowAC = (id) => ({type:"TOGGLE-FOLLOW",id:id});
export const addStateAC = (users) => ({type:"ADD-STATE",users:users})

const preloadedState = {
    users:[],
};

const usersPageReducers = (state = preloadedState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(obj => {
                    if(obj.id === action.id){
                        obj.follow = !obj.follow
                    }
                    return obj;
                }),
            };
        case ADD_STATE:
            return {
                ...state,
                users: action.users,
            };
        default:
            return state;
    }
};

export default usersPageReducers;
