import * as React from 'react';

class CarDisplay extends React.Component<{ id: string }> {
  constructor(props: { id: string }) {
    super(props);
  }
  public render() {
    return (<div>My car {this.props.id}</div>);
  }
}

export default CarDisplay;