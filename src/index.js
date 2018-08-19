import React from 'react';
import { render } from 'react-dom';
import Screen from './system/screen';

import homeConfig from './resources/home.json';
import './resources/home.css';
import Registry from './system/registry';

class App extends React.Component {

  _home = null;
  _registry = new Registry();

  constructor(props) {
    super(props);
    this._home = new Screen(homeConfig, this._registry);
  }

  render () {
    return <p>{
        this._home.render()
      }
      </p>;
  }
}

render(<App/>, document.getElementById('app'));