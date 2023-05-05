import { FunctionComponent } from 'react';
import { Box, Text, useStyleConfig, BoxProps } from '@chakra-ui/react';

type AmountVariant = 'active' | 'disabled';
type AmountSize = 'sm' | 'md';
type AmountUnits = 'MWh' | 'EUR';

export interface IAmountProps extends BoxProps {
  amount: number;
  units?: AmountUnits;
  prefix?: string;
  variant?: AmountVariant;
  size?: AmountSize;
}

const Amount: FunctionComponent<IAmountProps> = (
  {
    amount,
    units,
    prefix = '',
    variant,
    size,
    ...rest
  }
) => {
  const styles = useStyleConfig('Amount', { variant, size })

  return(
    <Box __css={styles} {...rest}>
      <Text>{prefix} {amount.toLocaleString('no')} {units}</Text>
    </Box>
  );
};

export default Amount;
