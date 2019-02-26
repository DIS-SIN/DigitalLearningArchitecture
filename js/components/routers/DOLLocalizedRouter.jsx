import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
// redux state
import { connect } from "react-redux";
import DOL404 from "../templates/DOL404";
import DOLAppRouter from "./DOLAppRouter";
import loadLangPack from "../atoms/i18n";
import { loadLiterals } from "../../store/literals";
import { loadLang } from "../../store/lang";
import store from "../../store";


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

class DOLLocalizedRouter extends React.Component {

    render() {
        const { literals, classes, match, lang } = this.props;

        const LanguageSelect = ({ match }) => (
            <Switch>
                {changeLanguage(match.params.lang)}
                {/*console.log('LanguageSelect: ' + match.params.lang + "|" + match.url)*/}
                <Route path="/:route*">
                    <React.Fragment>
                        {/*console.log('-- route: ' + match.url)*/}
                        <Route path='/:route*' component={DOLAppRouter} />
                    </React.Fragment>
                </Route>
                <Route component={DOL404} />
            </Switch>
        )
        const NoLangRoute = ({ match }) => (
            <Switch>
                {/*console.log('NoLangRoute: ' + match.url)*/}
                {/*console.log('Redirect To: ' + '/en' + match.path)*/}
                <Redirect to={'/' + ((lang == 'en' || lang == 'fr') ? lang : 'en') + '/' + match.params.route} />
                <Route component={DOL404} />
            </Switch>
        )

        return (
            <React.Fragment>
                <Switch>
                    {/*console.log('DOLLocalizedRouter: ' + match.path + "|" + match.url)*/}
                    <Route path='/:lang(en|fr)/:route*' component={LanguageSelect} />
                    <Route path='/:route*' component={NoLangRoute} />
                </Switch>
            </React.Fragment>
        );
    }
}
DOLLocalizedRouter.defaultProps = {
    lang: 'en'
};
// connect redux state
export default withRouter(connect(mapStateToProps)(DOLLocalizedRouter));


