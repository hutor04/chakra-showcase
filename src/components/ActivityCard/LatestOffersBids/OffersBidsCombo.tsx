import { Box, Text, VStack } from '@chakra-ui/react';
import {FunctionComponent} from 'react';
import Bid from './Bid';


const OffersBidsCombo: FunctionComponent = () => {
  return(
    <VStack
      spacing='0.5rem'
      align='left'
    >
      <Text
        fontSize='0.75rem'
        color='widgetPrimaryText'
        fontWeight='600'
        textAlign='left'
        textTransform='uppercase'
      >
        latest offers
      </Text>
      <VStack>
        <Bid/>
        <Bid/>
        <Bid/>
      </VStack>
    </VStack>

  );
};

export default OffersBidsCombo;

