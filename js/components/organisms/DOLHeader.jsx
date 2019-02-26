import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import MoreIcon from '@material-ui/icons/MoreVert';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import LockIcon from '@material-ui/icons/Lock';

// connect the state from redux
import { connect } from "react-redux";
import HeaderLogoItem from '../atoms/HeaderLogoItem';
import HeaderSearchControl from '../molecules/HeaderSearchControl';

import HeaderMenuItem from '../atoms/HeaderMenuItem';
import HeaderMenuItemMobile from '../atoms/HeaderMenuItemMobile';
import HeaderMenuItemDesktop from '../atoms/HeaderMenuItemDesktop';

import LangSelectMenuItemDesktop from '../atoms/LangSelectMenuItemDesktop';
import LangSelectMenuItemMobile from '../atoms/LangSelectMenuItemMobile';
import LangSelectMenuItem from '../atoms/LangSelectMenuItem';
const mapStateToProps = state => {
    return {
        literals: state.literals
    };
};


const styles = theme => ({
    root: {
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#232323',
    },
    headerAppbarDark: {
        backgroundColor: '#232323',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 4,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class DOLHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    handleSettingsMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { literals, classes, location } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <HeaderMenuItem
                    href="/explore"
                    icon={<ImageSearchIcon />}
                    text={literals.organisms.header.menu.explore}
                    action={this.handleMenuClose}
                />
            </Menu>
        );

        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                <LangSelectMenuItemMobile location={location} />
                <HeaderMenuItemMobile
                    href="/explore"
                    icon={<ImageSearchIcon />}
                    text={literals.organisms.header.menu.explore}
                    action={this.handleMobileMenuClose}
                />
            </Menu>
        );

        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.headerAppbarDark}>
                    <Toolbar className={classes.headerAppbarDark}>
                        <HeaderLogoItem text={literals.common.lat} href="/explore" />
                        {/* <HeaderSearchControl /> */}
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <HeaderMenuItemDesktop
                                href="/explore"
                                icon={<ImageSearchIcon />}
                                text={literals.organisms.header.menu.explore}
                            />
                            <LangSelectMenuItemDesktop location={location} />
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleSettingsMenuOpen}
                                color="inherit"
                            >
                                <SettingsIcon />
                            </IconButton>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                                <MoreIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMenu}
                {renderMobileMenu}
            </div>
        );
    }
}

DOLHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default withStyles(styles)(DOLHeader);
export default connect(mapStateToProps)(withStyles(styles)(DOLHeader));