import React, { Component } from "react";

// redux state
import { connect } from "react-redux";
const mapStateToProps = state => {
    return {
        literals: state.literals
    };
};

class Layout extends React.Component {

    render() {
        const { literals } = this.props;

        return (
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        );
    }
}

// connect redux state
export default connect(mapStateToProps)(Layout);
