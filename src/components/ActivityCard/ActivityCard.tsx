import {FunctionComponent} from 'react';
import { GridItem, Stack, Button, IconButton } from '@chakra-ui/react';
import CardHeader from "./CardHeader/CardHeader";
import OffersBidsCombo from "./LatestOffersBids/OffersBidsCombo";
import EnergyAmountCombo from './EnergyAmountCombo';
import Expiration from './Expiration/Expiration';
import ActivityTag from './ActivityTag/ActivityTag';
import * as React from 'react';

import { PhoneIcon } from '@chakra-ui/icons';

const ActivityCard: FunctionComponent = () => {
  return (
    <GridItem
      colSpan={2}
      bg='widgetBackground'
      borderRadius={8}
      p={3}
    >
      <Stack spacing='1rem'>
        <CardHeader/>
        <EnergyAmountCombo
          isExpired={false}
          amountUnsold={5000}
          originalAmount={20000}
        />
        <OffersBidsCombo/>
        <Expiration/>
        <ActivityTag/>
      </Stack>
    </GridItem>
  );
}

export default ActivityCard;
