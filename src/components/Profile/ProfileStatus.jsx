import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    const {
        status,
        setProfileStatus,
    } = props;

    const [editMode, setEditMode] = useState(false);
    const [localStatus, setLocalStatus] = useState(status);

    useEffect(() => {
        setLocalStatus(status)
    },[status]);

    const setStatusAndEditMode = (editMode) => {
        if (!editMode) setProfileStatus(localStatus);
        setEditMode(editMode)
    }

    const onStatusChange = (e) => {
        setLocalStatus(e.currentTarget.value);
    }

    const onDoubleClick = () => setStatusAndEditMode(true);
    const onBlur = () => setStatusAndEditMode(false);

    return (
        <div>
            {
                (!editMode) ?
                    <div>
                        <span
                            onDoubleClick={onDoubleClick}
                        >
                            {status}
                        </span>
                    </div> :
                    <div>
                        <input
                            onChange={onStatusChange}
                            onBlur={onBlur}
                            value={localStatus}
                        />
                    </div>
            }
        </div>
    );
}

export default ProfileStatus;