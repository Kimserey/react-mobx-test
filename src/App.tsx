import * as React from 'react';

import { AppState } from './AppState';
import CarListing from './CarListing';

class App extends React.Component {
  public render() {
    return (
      <CarListing appState={new AppState()}/>
    );
  }
}

export default App;
