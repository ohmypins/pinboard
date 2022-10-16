import Head from 'next/head';
import { Box, Center, VStack, Text, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const Welcome: NextPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>Welcome to your Pinboard!</title>
      </Head>
      <Box>
        <Center>
          <VStack>
            <Text fontSize="xl" mb={4}>
              Welcome to your pinboard!
            </Text>
            <Container>
              There are many benefits to a joint design and development system.
              Not only does it bring benefits to the design team, but it also
              brings benefits to engineering teams. It makes sure that our
              experiences have a consistent look and feel, not just in our
              design specs, but in production
            </Container>
          </VStack>
        </Center>
        {/* <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
        /> */}
      </Box>
    </motion.div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Welcome;
