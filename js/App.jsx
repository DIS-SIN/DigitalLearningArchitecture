import React from 'react';
import { HashRouter } from 'react-router-dom'
import { connect } from "react-redux";
import DOLRootRouter from './components/routers/DOLRootRouter';
const mapStateToProps = state => {
  return {
    literals: state.literals
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const elem = document.getElementById("initloader");
    elem.parentNode.removeChild(elem);
  }

  render() {
    return (
      <HashRouter>
        <DOLRootRouter />
      </HashRouter >
    );
  }
}

export default connect(mapStateToProps)(App);
