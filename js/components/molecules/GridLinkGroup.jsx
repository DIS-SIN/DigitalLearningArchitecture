import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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

class GridLinkGroup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title } = this.props;

        const linksFragment = this.props.links.map((link, index) => (
            <Button key={index} size="small" color="primary" target="_blank" href={link.href}>{link.title}</Button>
        ));

        return (
            <React.Fragment>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" align="center" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        {linksFragment}
                    </Typography>
                </Grid>
            </React.Fragment>
        );
    }
}

GridLinkGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridLinkGroup);


