import {addMessageAC,updateNewTextMessageAC} from "../../Redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const onDispatchToProps = (dispatch) => {
    return{
        onClick(){
            dispatch(addMessageAC())
        },
        onChange(text){
            dispatch(updateNewTextMessageAC(text));
        },
    };
};

const onStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    };
};

export default compose(withAuthRedirect,connect(onStateToProps,onDispatchToProps))(Dialogs)