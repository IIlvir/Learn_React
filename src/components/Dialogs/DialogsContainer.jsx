import {addMessageAC,updateNewTextMessageAC} from "../../Redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const onStateToProps = (state) => {
    return {
        state: state.dialogsPage,
    };
};

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

const DialogsContainer = connect(onStateToProps,onDispatchToProps)(Dialogs)

export default DialogsContainer;