import { VStack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import Amount from '../Amount/Amount';


export interface IEnergyAmountCombo {
  amountUnsold: number;
  originalAmount: number;
  isExpired: boolean;
}

const EnergyAmountCombo: FunctionComponent<IEnergyAmountCombo> = (
  {
    amountUnsold,
    originalAmount,
    isExpired,
  }
) => {
  return(
    <VStack alignItems='center' spacing='0rem'>
      <Amount
        amount={amountUnsold}
        units='MWh'
        variant={isExpired ? 'disabled' : 'active'}
        size='md'
      />
      <Amount
        amount={originalAmount}
        units='MWh'
        variant='disabled'
        size='sm'
        prefix={'was'}
      />
    </VStack>
  )
};

export default EnergyAmountCombo;
