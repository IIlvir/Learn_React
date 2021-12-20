import {addMessageAC, updateNewTextMessageAC} from "../../Redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {useCallback} from "react";
import {useAppDispatch, useAppSelector} from "../../Redux/redux-store";
import {dialogsPageSelector} from "../../Redux/dialogPageReducer";

const DialogsContainer = () => {
    const dispatch = useAppDispatch();

    const onClick = useCallback(
        () => dispatch(addMessageAC()),
        [dispatch]
    );

    const onChange = useCallback(
        (text) => dispatch(updateNewTextMessageAC(text)),
        [dispatch]
    );

    const stateDialogsPage = useAppSelector(dialogsPageSelector);

    return <Dialogs
        state={stateDialogsPage}
        onChange={onChange}
        onClick={onClick}
    />
}

export default withAuthRedirect(DialogsContainer)