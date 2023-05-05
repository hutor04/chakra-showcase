import {FunctionComponent} from "react";
import { Icon } from '@chakra-ui/react'
import { MdChatBubbleOutline  } from 'react-icons/md'

const Messages: FunctionComponent = () => {
  return(
    <Icon as={MdChatBubbleOutline} color='white'/>
  );
};

export default Messages;
