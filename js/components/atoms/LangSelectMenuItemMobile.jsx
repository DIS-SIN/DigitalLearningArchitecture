import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import loadLangPack from "./i18n";
import { loadLiterals } from "../../store/literals";
import { loadLang } from "../../store/lang";
import store from "../../store";
import LanguageIcon from '@material-ui/icons/Language';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

const mapStateToProps = state => {
    return {
        literals: state.literals,
        lang: state.lang
    };
};

const changeLanguage = lng => {
    const langpack = loadLangPack(lng);
    store.dispatch(loadLiterals(langpack));
    store.dispatch(loadLang(lng));
};

class LangSelectMenuItemMobile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { literals, location, classes, lang } = this.props;

        const unlanged_pathname = location.pathname.replace('/' + lang, '')
        const link_group_hero = [
            { "href": "/en" + unlanged_pathname, "title": literals.common.english, "lang": "en" },
            { "href": "/fr" + unlanged_pathname, "title": literals.common.french, "lang": "fr" },
        ];
        // WARN: Brittle, there's a better way to do this
        const link = (lang == 'fr') ? link_group_hero[0] : link_group_hero[1]

        return (
            <React.Fragment>
                <MenuItem component={Link} to={link.href} onClick={() => changeLanguage(link.lang)}>
                    <IconButton color="inherit">
                        <LanguageIcon />
                    </IconButton>
                    <p>{link.title}</p>
                </MenuItem>
            </React.Fragment>
        );
    }
}

// connect redux state
export default connect(mapStateToProps)(LangSelectMenuItemMobile);
