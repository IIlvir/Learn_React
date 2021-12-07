import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../Redux/authReducer";

class HeaderComponent extends React.Component {
    componentDidMount() {
        this.props.auth();
    }

    render() {
        return <Header props={this.props}/>;
    };
}

const mapStateToProps = (state) => ({
    state: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    auth(){
        dispatch(auth());
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);