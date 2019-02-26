import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DOLHeader from "../organisms/DOLHeader";
import DOLFooter from "../organisms/DOLFooter";
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

class DOLLayout extends React.Component {

    render() {
        const { literals, classes, match, content, location } = this.props;

        return (
            <React.Fragment>
                <ScrollToTop />
                <DOLHeader location={location} />
                <CssBaseline />
                {content}
                <DOLFooter />
            </React.Fragment>
        );
    }
}

DOLLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

// connect redux state
//export default connect(mapStateToProps)(withStyles(styles)(DOLLayout));
export default withRouter(connect(mapStateToProps)(withStyles(styles)(DOLLayout)));

