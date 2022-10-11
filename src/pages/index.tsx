import Head from 'next/head';
import {
  Box,
  Button,
  Center,
  Heading,
  VStack,
  Text,
  Container,
} from '@chakra-ui/react';
import Greeting from 'components/Greeting';
import type { NextPage } from 'next';
import Blur from 'components/Blur';
import Clock from 'components/Clock';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pinboard</title>
      </Head>
      <Box>
        <Center>
          <VStack>
            <Heading mb={4}>
              <Greeting />
            </Heading>
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
            <Container>
              There are many benefits to a joint design and development system.
              Not only does it bring benefits to the design team, but it also
              brings benefits to engineering teams. It makes sure that our
              experiences have a consistent look and feel, not just in our
              design specs, but in production
            </Container>
            <Clock />
          </VStack>
        </Center>
        <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        />
      </Box>
    </>
  );
};

export default Home;
