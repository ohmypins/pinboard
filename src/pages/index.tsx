import Head from 'next/head';
import Link from 'next/link';
import {
  Box,
  Center,
  VStack,
  Text,
  Container,
  Stat,
  useColorModeValue,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
// import Blur from 'components/Blur';
import Header from 'components/Header';
import type { NextPage } from 'next';

interface ServiceCardProps {
  pin: PinService;
}

function ServiceCard({ pin }: ServiceCardProps) {
  const { name, tagline } = pin;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <StatLabel fontWeight={'medium'}>{name}</StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {tagline}
      </StatNumber>
    </Stat>
  );
}

interface PinService {
  key: string;
  name: string;
  tagline: string;
}

interface HomeProps {
  pins: PinService[];
}

const Home: NextPage<HomeProps> = ({ pins }) => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <Head>
        <title>Pinboard</title>
      </Head>
      <Header />
      <Box>
        <Center>
          <VStack>
            <Text fontSize="xl" mb={4}>
              <Link href={'welcome'}>
                <a>Welcome</a>
              </Link>
              to your pinboard!
            </Text>

            {pins.map((pin) => (
              <ServiceCard key={pin.key} pin={pin} />
            ))}

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
    props: {
      pins: [
        {
          key: 'nextcloud',
          name: 'Nextcloud',
          tagline: 'Productivity platform that keeps you in control',
        },
        {
          key: 'pi-hole',
          name: 'Pi-hole',
          tagline: 'Block ads on your entire network',
        },
      ],
    },
  };
}

export default Home;
