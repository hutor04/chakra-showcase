import { FunctionComponent } from 'react';
import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  Text,
} from '@chakra-ui/react';


const Expiration: FunctionComponent = () => {
 return (
   <Box p={0}>
     <RangeSlider
       min={0}
       max={300}
       defaultValue={[175, 300]}
       isReadOnly
     >
       <RangeSliderTrack
         bg='transparent'
       >
         <RangeSliderFilledTrack
           bg='brand.heritageOrange'
         />
       </RangeSliderTrack>
     </RangeSlider>
     <Text color='brand.heritageOrange' align='right' fontSize='xs'>01:08:26</Text>
   </Box>

 );
};

export default Expiration;
