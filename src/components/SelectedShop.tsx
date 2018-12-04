import * as React from 'react';

import { Shop } from '../models';

const SelectedShop = (props: { shop: Shop | undefined }) => {
  return <span>{ !!props.shop ? props.shop.address : 'None' } </span>;
}

export default SelectedShop;