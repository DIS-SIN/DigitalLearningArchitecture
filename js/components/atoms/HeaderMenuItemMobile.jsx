import React, { Component } from "react";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

class HeaderMenuItemMobile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { action, href, icon, text } = this.props;
        // <Badge color="secondary">4</Badge>
        return (
            <React.Fragment>
                <MenuItem component={Link} to={href} onClick={action}>
                    <IconButton color="inherit">
                        {icon}
                    </IconButton>
                    <p>{text}</p>
                </MenuItem>
            </React.Fragment>
        );
    }
}

export default HeaderMenuItemMobile;
