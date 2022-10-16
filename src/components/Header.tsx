import { Box, Flex, Heading, IconButton, Spacer } from '@chakra-ui/react';
import { IoSettingsOutline } from 'react-icons/io5';

import Greeting from './Greeting';

export default function Header() {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      bgColor={'green.500'}
    >
      <Box p="4">
        <Heading size="md">
          <Greeting />
        </Heading>
      </Box>
      <Spacer />

      <IconButton p="4" aria-label="Settings" icon={<IoSettingsOutline />} />
    </Flex>
  );
}
