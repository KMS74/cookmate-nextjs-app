import '@mantine/core/styles.css';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { theme } from '../theme';
import Navbar from '@/components/Navbar/Navbar';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '700', '800', '900'],
});

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={montserrat.className}>
        <MantineProvider theme={theme}>
          <Container size="lg">
            <Navbar />
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
