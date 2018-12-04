import { observer } from 'mobx-react';
import * as React from 'react';

import { AppState } from '../state/AppState';
import CarDisplay from '../components/CarDisplay';

const CarListingContainer = observer (
  class CarListingContainer extends React.Component<{ appState: AppState }> {
    constructor(props: { appState: AppState }) {
      super(props);
    }

    public onSelect = (carId: string) => {
      this.props.appState.selectCar(carId);
    }
    
    public render() {
      const selectedCar = 
        !!this.props.appState.selectedCar ? this.props.appState.selectedCar.name : 'None';

      const cars =  
        this.props.appState.cars.map((car) => 
          <li key={car.id}>
            <CarDisplay id={car.id} name={car.name} onSelect={this.onSelect}/>
          </li>
        );

      return (
        <div>
          <div>Selected car: {selectedCar}</div>
          <ul>{cars}</ul>
        </div>
      );
    }
  }
)

export default CarListingContainer;