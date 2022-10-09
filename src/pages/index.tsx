import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Pinboard</title>
      </Head>
    </Box>
  );
};

export default Home;
