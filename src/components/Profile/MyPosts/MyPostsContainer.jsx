import {addPostAC,updateNewPostTextAC} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.profilePage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        onChange(text) {
            dispatch(updateNewPostTextAC(text))
        },
        onClick(){
            dispatch(addPostAC());
        },
    };
};

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostContainer;