import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    },[props.status]);

    const setStatusAndEditMode = (editMode) => {
        if (!editMode) props.setProfileStatus(status);
        setEditMode(editMode)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {(!editMode) ?
                <div>
                    <span onDoubleClick={() => {
                        setStatusAndEditMode(true)
                    }}>{props.status}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange}
                           onBlur={() => {
                               setStatusAndEditMode(false)
                           }}
                           value={status}/>
                </div>
            }
        </div>
    );
}

export default ProfileStatus;