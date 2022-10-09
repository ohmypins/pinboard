import Head from 'next/head';
import { Box, Button, Center, Heading, VStack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pinboard</title>
      </Head>
      <Box>
        <Center>
          <VStack>
            <Heading mb={4}>Hello</Heading>
            <Text fontSize="xl" mb={4}>
              Welcome to your pinboard!
            </Text>
            <Button
              size="md"
              height="48px"
              width="200px"
              border="2px"
              borderColor="green.500"
            >
              Create a free account
            </Button>
          </VStack>
        </Center>
      </Box>
    </>
  );
};

export default Home;
