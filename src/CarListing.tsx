import * as React from 'react';

import CarDisplay from './CarDisplay';

class CarListing extends React.Component {
  public render() {
    const values = 
      [1, 2, 3, 4, 5]
        .map((x) => 
          <li key={x}>
            <CarDisplay id={x.toString()}/>
          </li>
        );

    return (
      <ul>{values}</ul>
    );
  }
}

export default CarListing;
