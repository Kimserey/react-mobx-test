import * as React from 'react';

interface ShopDisplayProps {
  address: string,
  onSelect: (address: string) => void
}

class ShopDisplay extends React.Component<ShopDisplayProps> {
  constructor(props: ShopDisplayProps) {
    super(props);
  }

  public onClick = () => {
    this.props.onSelect(this.props.address);
  }

  public render() {
    console.log('ShopDisplay Rendered');
    return (<button onClick={this.onClick}> Shop: {this.props.address}</button>);
  }
}

export default ShopDisplay;