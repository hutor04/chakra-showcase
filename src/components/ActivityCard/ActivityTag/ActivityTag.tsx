import { FunctionComponent } from 'react';
import { Avatar, Tag, Icon, Text, HStack, Center } from '@chakra-ui/react';


const ActivityTag:FunctionComponent = () => {
 return (
   <Center>
     <Tag borderRadius='34px' w='min-content'>
       <HStack align='center'>
         <Avatar size='2xs' color='brand.background' bg='brand.publications' getInitials={(name) => name} name='YK'/>
         <Text textTransform='uppercase'>
           Mine
         </Text>
         <Icon viewBox='0 0 200 200' boxSize={2}>
           <path
             fill='currentColor'
             d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
           />
         </Icon>
         <Text textTransform='uppercase'>
           Rfq
         </Text>
       </HStack>
     </Tag>
   </Center>

 );
};

export default ActivityTag;
