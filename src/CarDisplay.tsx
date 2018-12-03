import * as React from 'react';

class CarDisplay extends React.Component<{ id: string }, { clicked: string }> {
  constructor(props: { id: string }) {
    super(props);

    this.state = { clicked: 'no' };
  }

  public click = () => {
    this.setState({
      clicked: 'yes!'
    });
  }

  public render() {
    return (<button onClick={this.click}> My car {this.props.id} {this.state.clicked}</button>);
  }
}

export default CarDisplay;