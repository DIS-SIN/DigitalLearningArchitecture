import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginTop: 100,
    },
});

class GridTextGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, text } = this.props;

        return (
            <React.Fragment>
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h6" align="left" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" align="left" gutterBottom>
                        {text}
                    </Typography>
                </Grid>
            </React.Fragment>
        );
    }
}

GridTextGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridTextGroup);


