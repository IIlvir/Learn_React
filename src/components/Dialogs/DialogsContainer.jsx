import {addMessageAC, updateNewTextMessageAC} from "../../Redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {useDispatch, useSelector} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {useCallback} from "react";

const DialogsContainer = () => {
    const dispatch = useDispatch();

    const onClick = useCallback(
        () => dispatch(addMessageAC()),
        []
    );

    const onChange = useCallback(
        (text) => dispatch(updateNewTextMessageAC(text)),
        []
    );

    const stateDialogsPage = useSelector(
        state => state.dialogsPage
    );

    return <Dialogs
        state={stateDialogsPage}
        onChange={onChange}
        onClick={onClick}
    />
}

export default withAuthRedirect(DialogsContainer)