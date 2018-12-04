import * as React from 'react';

import ContentPage from './containers/ContentPage';
import { AppState } from './state/AppState';

class App extends React.Component {
  public render() {
    const appState = new AppState();

    return (
      <ContentPage rootStore={appState}/>
    );
  }
}

export default App;
