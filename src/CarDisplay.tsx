import * as React from 'react';

interface ICarDisplayProps {
  id: string,
  onSelect: (id: string) => void
}

class CarDisplay extends React.Component<ICarDisplayProps, { clicked: string }> {
  constructor(props: ICarDisplayProps) {
    super(props);

    this.state = { clicked: 'no' };
  }

  public click = () => {
    this.setState({
      clicked: 'yes!'
    });

    this.props.onSelect(this.props.id);
  }

  public render() {
    return (<button onClick={this.click}> My car {this.props.id} {this.state.clicked}</button>);
  }
}

export default CarDisplay;