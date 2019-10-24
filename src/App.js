import React from 'react';
import Game from './components/game';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameOver: false,
    }
  }
  render() {
    return (
      <><Game props={this.props} callBack={e => this.setState({ gameOver: e.gameOver })} /></>
    )
  }
}

export default App;
