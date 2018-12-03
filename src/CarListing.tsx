import { observer } from 'mobx-react';
import * as React from 'react';

import { AppState } from './AppState';
import CarDisplay from './CarDisplay';

const CarListing = observer (
  class CarListing extends React.Component<{ appState: AppState }> {
    constructor(props: { appState: AppState }) {
      super(props);
    }

    public load = () => {
      this.props.appState.loadCarList();
    }

    public select = (id: string) => {
      alert('Hoooooo' + id);
    }

    public render() {
      const values = 
        this.props.appState.carListing.map((x, index) => 
          <li key={index}>
            <CarDisplay id={x.id} onSelect={this.select}/>
          </li>
        );

      return (
        <div>
          <button onClick={this.load}>Load cars</button>
          <ul>{values}</ul>
        </div>
      );
    }
  }
)

export default CarListing;
