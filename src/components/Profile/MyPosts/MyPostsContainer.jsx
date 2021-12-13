import {addLike, addPostAC, updateNewPostTextAC} from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPost";
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return{
        onChange(text) {
            dispatch(updateNewPostTextAC(text))
        },
        onClick(){
            dispatch(addPostAC());
        },
        onClickLike(id){
            dispatch(addLike(id));
        },
    };
};

const mapStateToProps = (state) => {
    return {
        state: state.profilePage,
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(MyPosts);