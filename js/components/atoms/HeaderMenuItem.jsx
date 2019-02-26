import React, { Component } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

class HeaderMenuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { action, href, icon, text } = this.props;

        return (
            <React.Fragment>
                <MenuItem component={Link} to={href} onClick={action}>
                    {icon} {text}
                </MenuItem>
            </React.Fragment>
        );
    }
}

export default HeaderMenuItem;
