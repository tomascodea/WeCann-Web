// app/layout.tsx
import { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'WeCann: Innovación y redes para la industria del cannabis en Argentina.',
  description: 'Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las ONGs, las personas usuarias del Reprocann y todos los actores involucrados.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ChakraProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
