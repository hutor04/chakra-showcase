import {FunctionComponent} from "react";
import { HStack } from '@chakra-ui/react';
import RfqLabel from "./RfqLabel";
import Technology from "./Technology";
import Messages from "../Messages";


const CardHeader: FunctionComponent = () => {
  return(
    <HStack justify='space-between'>
      <HStack spacing='8px'>
        <RfqLabel labelType='buy'/>
        <Technology/>
      </HStack>
      <Messages/>
    </HStack>
  );
}

export default CardHeader;
