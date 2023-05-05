import {FunctionComponent} from "react";
import {CircularProgress, HStack, Avatar} from '@chakra-ui/react'
import Amount from '../../Amount/Amount';

const Bid: FunctionComponent = () => {
  return (
    <HStack justify='space-between' w='100%'>
      <CircularProgress
        value={25}
        color='brand.success'
        trackColor='transparent'
        size='1rem'
      />
      <HStack spacing='1rem'>
        <Amount amount={3000} units='MWh' size='sm'/>
        <Amount amount={3639} units='EUR' size='sm'/>
      </HStack>
      <Avatar size='2xs' color='brand.background' bg='brand.publications' getInitials={(name) => name} name='YK'/>
    </HStack>
  );
};

export default Bid;
