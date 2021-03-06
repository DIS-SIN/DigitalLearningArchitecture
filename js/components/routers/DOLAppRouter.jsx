import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from "react-redux";
import DOLLayout from "../templates/DOLLayout";
import DOL404 from "../templates/DOL404";
import DOLExploreRouter from "./DOLExploreRouter";

const mapStateToProps = state => {
    return {
        literals: state.literals
    };
};

class DOLAppRouter extends React.Component {

    render() {
        const { literals, classes, match } = this.props;

        const routers = [
            { path: '/:lang/explore', name: 'Explore', Component: DOLExploreRouter },
        ]
        const langroutes = [
        ]
        const LanguifiedRoute = ({ match, location }) => (
            <Switch>
                {langroutes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                        <DOLLayout content={<Component location={location} />} />
                    </Route>
                ))}
                {routers.map(({ path, Component }) => (
                    <Route key={path} path={path}>
                        <Component location={location} />
                    </Route>
                ))}
                <Route>
                    <DOLLayout content={<DOL404 location={location} />} />
                </Route>
            </Switch>
        )

        return (
            <React.Fragment>
                <Switch>
                    <Route path='/:route*' component={LanguifiedRoute} />
                </Switch>
            </React.Fragment>
        );
    }
}

// connect redux state
export default withRouter(connect(mapStateToProps)(DOLAppRouter));


