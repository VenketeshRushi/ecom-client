import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue } from '@chakra-ui/react'

import AccountSettings from './AccountSettings'
import Actions from './Actions'
import Notifications from './Notifications'
import OrderStaus from './OrderStaus'

export default function Content() {
  const tabs = ['Account Settings', 'Order Status', 'Notifications']

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="gray.200"
      style={{ transform: 'translateY(-100px)' }}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Tabs>
        <TabList px={5}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.cadet"
              borderBottomWidth={1}
              _active={{ bg: 'transparent' }}
              _selected={{ color: useColorModeValue("brand.dark", "white"), borderColor: 'brand.blue' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <AccountSettings />
          </TabPanel>
          <TabPanel>
            <OrderStaus />
          </TabPanel>
          <TabPanel>
            <Notifications />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Actions />
    </Box>
  )
}

