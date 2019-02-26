import React from 'react';
import { Switch, Route, HashRouter, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import Layout from '../atoms/Layout';
import DOLPageLanguageSelect from '../views/DOLPageLanguageSelect';
import DOLLocalizedRouter from './DOLLocalizedRouter';
import DOL404 from '../templates/DOL404';

const mapStateToProps = state => {
    return {
        literals: state.literals
    };
};

class DOLRootRouter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Switch>
                    {/*console.log("Root Router Start")*/}
                    <Route exact path='/' component={DOLPageLanguageSelect} />
                    <Route path='/*' component={DOLLocalizedRouter} />
                    <Route component={DOL404} />
                </Switch>
            </Layout>
        );
    }
}

export default withRouter(connect(mapStateToProps)(DOLRootRouter));
