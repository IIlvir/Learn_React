import {addMessageAC, updateNewTextMessageAC} from "../../Redux/dialogPageActionCreators";
import Dialogs from "./Dialogs";
import {useSelector} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import {dialogsPageSelector} from "../../Redux/dialogPageReducer";

const DialogsContainer = () => {
    const dispatch = useAppDispatch();

    const onClick = useCallback(
        () => dispatch(addMessageAC()),
        []
    );

    const onChange = useCallback(
        (text) => dispatch(updateNewTextMessageAC(text)),
        []
    );

    const stateDialogsPage = useAppSelector(dialogsPageSelector);

    return <Dialogs
        state={stateDialogsPage}
        onChange={onChange}
        onClick={onClick}
    />
}

export default withAuthRedirect(DialogsContainer)