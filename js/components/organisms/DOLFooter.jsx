import React, { Component } from "react";
import { connect } from "react-redux"; // redux state
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridLinkGroup from "../molecules/GridLinkGroup";
import GridTextGroup from "../molecules/GridTextGroup";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 100,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});
const mapStateToProps = state => {
    return {
        literals: state.literals
    };
};

class DOLFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { literals, location, classes } = this.props;

        const links_group_connect = [
            { "href": "https://github.com/DIS-SIN", "title": "CSPS" },
            { "href": "https://github.com/DIS-SIN", "title": "GCCampus" },
            { "href": "https://github.com/DIS-SIN", "title": "GitHub" },
            { "href": "https://github.com/DIS-SIN", "title": "Message" },
        ];
        const links_group_socialmedia = [
            { "href": "https://github.com/DIS-SIN", "title": "GCCollab" },
            { "href": "https://github.com/DIS-SIN", "title": "Twitter" },
            { "href": "https://github.com/DIS-SIN", "title": "LinkedIn" },
            { "href": "https://github.com/DIS-SIN", "title": "Medium" },
        ];
        return (
            <React.Fragment>
                {/* Footer */}
                <footer className={classes.footer}>
                    <Grid container spacing={16} justify="center">
                        <GridTextGroup title={literals.organisms.footer.desctitle} text={literals.organisms.footer.description} />
                        <GridLinkGroup title={literals.organisms.footer.connect} links={links_group_connect} />
                        <GridLinkGroup title={literals.organisms.footer.socialmedia} links={links_group_socialmedia} />
                    </Grid>
                </footer>
                {/* End footer */}
            </React.Fragment>
        );
    }
}

DOLFooter.propTypes = {
    classes: PropTypes.object.isRequired,
};

// connect redux state
export default connect(mapStateToProps)(withStyles(styles)(DOLFooter));


