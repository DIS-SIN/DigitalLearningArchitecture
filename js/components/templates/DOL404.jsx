import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import DOLPageStub from "../views/DOLPageStub";
import ScrollToTop from "../atoms/ScrollToTop";

const mapStateToProps = state => {
    return {
        literals: state.literals
    };
};

const styles = theme => ({
    fabButton: {
        position: 'fixed',
        zIndex: 1,
        bottom: 35,
        left: 'auto',
        right: 35,
        margin: '0 auto',
    },
})

class DOL404 extends React.Component {

    render() {
        const { literals, classes, match, location } = this.props;

        return (
            <React.Fragment>
                <ScrollToTop />
                <DOLPageStub location={location} />
            </React.Fragment>
        );
    }
}

DOL404.propTypes = {
    classes: PropTypes.object.isRequired,
};

// connect redux state
export default connect(mapStateToProps)(withStyles(styles)(DOL404));


