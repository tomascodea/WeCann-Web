"use client";
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import theme from '../theme';
import { IndoorModeProvider } from './context/IndoorModeContext';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const metadata = {
  title: 'WeCann: Innovación y redes para la industria del cannabis en Argentina.',
  description: 'Nuestra misión es modernizar y optimizar los procesos de la industria cannábica, conectando de manera efectiva a las ONGs, las personas usuarias del Reprocann y todos los actores involucrados.',
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setShowContent(true);
      document.body.style.overflow = 'auto';
    };

    if (pathname !== '/') {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }
    } else {
      setShowContent(true);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname]);

  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          <IndoorModeProvider>
            {pathname !== '/' && !showContent && <Loader />}
            <Header />
            <main>{showContent && children}</main>
            {showContent && <Footer />}
          </IndoorModeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}