import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Animation from './components/animation';
import './index.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  render = () => (
      <React.Fragment>
          <Animation />
      </React.Fragment>
  );
}

export default hot(module)(App);
