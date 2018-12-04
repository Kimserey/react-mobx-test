import { observer } from 'mobx-react';
import * as React from 'react';

import { AppState } from '../state/AppState';
import CarListingContainer from './CarListingContainer';
import ShopListingContainer from './ShopListingContainer';

const ContentPage = observer (
  class ContentPage extends React.Component<{ rootStore: AppState }> {
    constructor(props: { rootStore: AppState }) {
      super(props);
    }

    public load = () => {
      this.props.rootStore.load();
    }

    public render() {
      return (
        <div>
          <button onClick={this.load}>Load whatever</button>
          <div>
            Cars:
            <CarListingContainer appState={this.props.rootStore}/>
            Shops:
            <ShopListingContainer appState={this.props.rootStore}/>
          </div>
        </div>
      );
    }
  }
)

export default ContentPage;