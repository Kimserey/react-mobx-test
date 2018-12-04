import { observer } from 'mobx-react';
import * as React from 'react';

import { AppState } from '../state/AppState';
import ShopDisplay from 'src/components/ShopDisplay';

const ShopListingContainer = observer (
  class ShopListingContainer extends React.Component<{ appState: AppState }> {
    constructor(props: { appState: AppState }) {
      super(props);
    }

    public OnSelect = (address: string) => {
      this.props.appState.selectShop(address);
    }

    public render() {
      const selectedShop = 
        !!this.props.appState.selectedShop ? this.props.appState.selectedShop.address : 'None';

      const shops =  
        this.props.appState.shops.map((shop) => 
          <li key={shop.address}>
            <ShopDisplay address={shop.address} onSelect={this.OnSelect}/>
          </li>
        );

      return (
        <div>
          <div>Selected Shop: {selectedShop}</div>
          <ul>{shops}</ul>
        </div>
      );
    }
  }
)

export default ShopListingContainer;