import * as React from 'react';

import ContentPage from './pages/ContentPage';
import { AppState } from './state/AppState';

class App extends React.Component {
  public render() {
    return (
      <ContentPage appState={new AppState()}/>
    );
  }
}

export default App;
