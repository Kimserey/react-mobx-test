import * as React from 'react';

interface CarDisplayProps {
  id: string,
  name: string,
  onSelect: (carId: string) => void
}

class CarDisplay extends React.Component<CarDisplayProps> {
  constructor(props: CarDisplayProps) {
    super(props);
  }

  public onClick = () => {
    this.props.onSelect(this.props.id);
  }

  public render() {
    console.log('rendered');
    return (<button onClick={this.onClick}> Car number {this.props.id} {this.props.name}</button>);
  }
}

export default CarDisplay;