import { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A powerful and customizable server OS for self-hosting."
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={'system'} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
