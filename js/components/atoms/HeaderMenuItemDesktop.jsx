import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class HeaderMenuItemDesktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { href, icon, text } = this.props;

        return (
            <React.Fragment>
                <Button color="inherit" component={Link} to={href}>
                    {icon} {text}
                </Button>
            </React.Fragment>
        );
    }
}

export default HeaderMenuItemDesktop;
