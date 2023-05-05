import * as React from "react"
import {
  ChakraProvider,
  Grid,
  GridItem,
  Container,
  Button,
  Stack, IconButton, Box, Flex
} from '@chakra-ui/react'
import {ColorModeSwitcher} from "./ColorModeSwitcher"
import customTheme from './theme/index';
import ActivityCard from "./components/ActivityCard/ActivityCard";
import Fonts from './theme/CustomFont';
import { PhoneIcon } from '@chakra-ui/icons';


export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Fonts />
    <Container minW="1920px" maxW='100%' bg='teal' p={0}>
      <Grid
        templateAreas={`
          "header header"
          "sideNav secondaryNav"
          "sideNav activityCards"
          "sideNav orders"
        `}
        gridTemplateRows={'80px 56px 2fr 3fr'}
        gridTemplateColumns={'80px 1fr'}
        gap='0'
        minH='1080px'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem bg='orange.300' area={'header'}>
          <ColorModeSwitcher/>
          Header
        </GridItem>
        <GridItem bg='pink.300' area={'sideNav'}>
          Nav
        </GridItem>
        <GridItem bg='pink.100' area={'secondaryNav'}>
        </GridItem>
        <GridItem bg='green.300' area={'activityCards'}>
          <Grid m='10' templateColumns='repeat(16, minmax(103px, 1fr))' gap={4}>
            <ActivityCard/>
          </Grid>
        </GridItem>
        <GridItem bg='papayawhip' area={'orders'}>
          <Grid
            m='10'
            templateColumns='repeat(16, 1fr)'
            gap={4}
          >
            <GridItem
              colSpan={4}
              borderRadius={8}
              bg='widgetBackground'
              p={4}
            >
              <Stack spacing={2}>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                >Call me
                </Button>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  isDisabled
                >Call me
                </Button>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  variant={'secondary'}
                >Call me
                </Button>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  variant={'secondary'}
                  isDisabled
                >Call me
                </Button>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  variant={'tertiary'}
                >Call me
                </Button>

                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  size={'sm'}
                >Call me
                </Button>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  size={'sm'}
                  isDisabled
                >Call me
                </Button>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  variant={'secondary'}
                  size={'sm'}
                >Call me
                </Button>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  variant={'secondary'}
                  size={'sm'}
                  isDisabled
                >Call me
                </Button>
                <Button
                  rightIcon={<PhoneIcon boxSize={4}/>}
                  variant={'tertiary'}
                  size={'sm'}
                >Call me
                </Button>
              </Stack>

            </GridItem>
            <GridItem
              colSpan={4}
              borderRadius={8}
              bg='widgetBackground'
              p={4}
            >
              <Flex gap={4}>
                <IconButton
                  aria-label='Call me'
                  icon={<PhoneIcon/>}
                  isRound
                >
                  Call me
                </IconButton>
                <IconButton
                  aria-label='Call me'
                  icon={<PhoneIcon/>}
                  isRound
                  isDisabled
                >
                  Call me
                </IconButton>
                <IconButton
                  aria-label='Call me'
                  variant={'secondary'}
                  icon={<PhoneIcon/>}
                  isRound
                >
                  Call me
                </IconButton>
                <IconButton
                  aria-label='Call me'
                  variant={'secondary'}
                  icon={<PhoneIcon/>}
                  isRound
                  isDisabled
                >
                  Call me
                </IconButton>
                <IconButton
                  aria-label='Call me'
                  size={'sm'}
                  icon={<PhoneIcon/>}
                  isRound
                >
                  Call me
                </IconButton>
                <IconButton
                  aria-label='Call me'
                  size={'sm'}
                  icon={<PhoneIcon/>}
                  isRound
                  isDisabled
                >
                  Call me
                </IconButton>
                <IconButton
                  aria-label='Call me'
                  variant={'secondary'}
                  size={'sm'}
                  icon={<PhoneIcon/>}
                  isRound
                >
                  Call me
                </IconButton>
                <IconButton
                  aria-label='Call me'
                  variant={'secondary'}
                  size={'sm'}
                  icon={<PhoneIcon/>}
                  isRound
                  isDisabled
                >
                  Call me
                </IconButton>
              </Flex>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  </ChakraProvider>
)
