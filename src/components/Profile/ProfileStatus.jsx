import React from "react";

class ProfileStatus extends React.Component{
    state = {
        editMode: false,
    }

    setEditMode(val){
        this.setState({
            editMode: val,
        })
    }

    render() {
        return(
            <div>
                {(!this.state.editMode) ?
                    <div>
                        <span onDoubleClick={() => {this.setEditMode(true)}}>{this.props.status}</span>
                    </div>
                :
                <div>
                    <input onBlur={() => {this.setEditMode(false)}} defaultValue={this.props.status} />
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;