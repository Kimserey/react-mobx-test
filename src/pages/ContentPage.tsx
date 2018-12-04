import { observer } from 'mobx-react';
import * as React from 'react';

import { AppState } from '../state/AppState';
import CarListingContainer from './CarListingContainer';
import ShopListingContainer from './ShopListingContainer';

const ContentPage = observer (
  class ContentPage extends React.Component<{ appState: AppState }> {
    constructor(props: { appState: AppState }) {
      super(props);
    }

    public load = () => {
      this.props.appState.load();
    }

    public render() {
      return (
        <div>
          <button onClick={this.load}>Load whatever</button>
          <CarListingContainer appState={this.props.appState}/>
          Shops:
          <ShopListingContainer appState={this.props.appState}/>
        </div>
      );
    }
  }
)

export default ContentPage;