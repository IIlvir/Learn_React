import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setIsFetching, setUserData} from "../../Redux/authReducer";

class HeaderComponent extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
            this.props.setUserData(response.data.data);
        })
    }

    render() {
        return <Header props={this.props}/>;
    };
}

const mapStateToProps = (state) => ({
    state: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    setUserData(data) {
        dispatch(setUserData(data))
    },
    setIsFetching(isFetching) {
        dispatch(setIsFetching(isFetching))
    },
})

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);