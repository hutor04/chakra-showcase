import { FunctionComponent } from 'react';
import { Badge } from '@chakra-ui/react';

export type RfqLabelType = 'sell' | 'buy';

export interface IRfqLabelProps {
  labelType: RfqLabelType;
}

const RfqLabel: FunctionComponent<IRfqLabelProps> = ({ labelType }) => {
  let component;
  switch (labelType) {
    case 'buy':
      component = <Badge colorScheme='red'>BUY</Badge>;
      break;
    case 'sell':
      component =  <Badge colorScheme='green'>SELL</Badge>;
      break;
  }
  return component;
};

export default RfqLabel;
